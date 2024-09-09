from typing import Annotated
from datetime import datetime, timedelta, UTC
import json

from admyral.workflow import workflow, Schedule
from admyral.typings import JsonValue
from admyral.action import action, ArgumentMetadata
from admyral.actions import get_okta_logs, send_slack_message_to_user_by_email


@action(
    display_name="Calculate Time Range for Last Full Hour",
    display_namespace="Utilities",
    description="Calculate the time range for the last full hour",
)
def get_time_range_of_last_full_hour() -> tuple[str, str]:
    end_time = datetime.now(UTC).replace(minute=0, second=0, microsecond=0)

    start_time = (end_time - timedelta(hours=1)).isoformat() + "Z"

    return (start_time, end_time.isoformat() + "Z")


@action(
    display_name="Get Okta Password Policy Update Logs",
    display_namespace="Okta",
    description="Retrieve Okta password policy update logs for a specified time range",
    secrets_placeholders=["OKTA_SECRET"],
)
def get_okta_password_policy_update_logs(
    start_time: Annotated[
        str,
        ArgumentMetadata(
            display_name="Start Time",
            description="The start time for the logs to retrieve in ISO 8601 format",
        ),
    ],
    end_time: Annotated[
        str,
        ArgumentMetadata(
            display_name="End Time",
            description="The end time for the logs to retrieve in ISO 8601 format",
        ),
    ],
) -> list[dict[str, JsonValue]]:
    logs = get_okta_logs(
        query="policy.lifecycle.update Password",
        start_time=start_time,
        end_time=end_time,
    )

    return [
        log
        for log in logs
        if log.get("target", [{}])[0].get("detailEntry", {}).get("policyType")
        == "Password"
    ]


@action(
    display_name="Format Okta Policy Update Message",
    display_namespace="Okta",
    description="Format Okta policy update logs into a readable message",
)
def format_okta_policy_update_message(
    logs: Annotated[
        list[dict[str, JsonValue]],
        ArgumentMetadata(
            display_name="Okta Logs",
            description="List of Okta policy update logs",
        ),
    ],
) -> str:
    message = f"Attention: {len(logs)} Okta password policy update(s) detected in the last hour.\n\n"
    for log in logs:
        message += f"Event ID: {log.get('transaction', {}).get('id')}\n"
        message += f"Timestamp: {log.get('published')}\n"
        message += f"Actor: {log.get('actor', {}).get('displayName')} ({log.get('actor', {}).get('alternateId')})\n"

        debug_data = log.get("debugContext", {}).get("debugData", {})

        new_policy = json.loads(
            debug_data.get("newPolicyExtensiblePropertiesJson", "{}")
        )
        old_policy = json.loads(
            debug_data.get("oldPolicyExtensiblePropertiesJson", "{}")
        )

        message += "Changes:\n"

        for key in new_policy:
            new_value = str(new_policy.get(key))
            old_value = str(old_policy.get(key))

            if new_value.lower() != old_value.lower():
                message += f"- {key}: {old_value} -> {new_value}\n"

        message += "---\n"
    return message


@workflow(
    description="Monitor Okta password policy changes and notify via Slack",
    triggers=[Schedule(cron="0 * * * *")],
)
def okta_password_policy_monitoring(payload: dict[str, JsonValue]):
    time_range = get_time_range_of_last_full_hour()

    logs = get_okta_password_policy_update_logs(
        start_time=time_range[0],
        end_time=time_range[1],
        secrets={"OKTA_SECRET": "okta_secret"},
    )

    if logs:
        message = format_okta_policy_update_message(logs=logs)

        send_slack_message_to_user_by_email(
            email="daniel@admyral.dev",
            text=message,
            secrets={"SLACK_SECRET": "slack_secret"},
        )