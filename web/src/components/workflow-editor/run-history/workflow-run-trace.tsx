import { Box, Flex, Text } from "@radix-ui/themes";
import WorkflowRunStep from "./workflow-run-step";
import { useGetWorkflowRunStepsApi } from "@/hooks/use-get-workflow-run-steps-api";
import { useEffect, useState } from "react";
import { errorToast } from "@/lib/toast";
import Row from "./row";
import ErrorCallout from "@/components/utils/error-callout";
import { TWorkflowRunStepMetadata } from "@/types/workflow-runs";
import { useEditorActionStore } from "@/stores/editor-action-store";
import ActionIcon from "../action-icon";

export default function WorkflowRunTrace({
	workflowId,
	workflowRunId,
}: {
	workflowId: string;
	workflowRunId: string;
}) {
	const { actionsIndex } = useEditorActionStore();
	const { data, isPending, error } = useGetWorkflowRunStepsApi(
		workflowId,
		workflowRunId,
	);
	const [selectedStepIdx, setSelectedStepIdx] = useState<number | null>(null);

	useEffect(() => {
		if (data) {
			setSelectedStepIdx(0);
		}
		if (error) {
			errorToast("Failed to load workflow runs. Please reload the page.");
		}
	}, [data, error]);

	if (isPending) {
		return <Text>Loading...</Text>;
	}

	if (error) {
		return <ErrorCallout />;
	}

	const handleClickStep = (idx: number) => setSelectedStepIdx(idx);

	return (
		<Flex
			height="100%"
			width="calc(100vw - 256px)"
			left="256px"
			style={{ position: "fixed" }}
		>
			<Box
				height="100%"
				width="290px"
				className="border-r-2 border-r-gray-200"
				style={{ position: "fixed" }}
			>
				<Box
					width="100%"
					height="54px"
					p="16px"
					className="border-b-2 border-b-gray-200"
				>
					<Text size="3" weight="medium">
						Steps
					</Text>
				</Box>

				{data.map(
					(workflowStep: TWorkflowRunStepMetadata, idx: number) => (
						<Row
							key={`workflow_run_row_${idx}`}
							selected={idx === selectedStepIdx}
							onClickOnUnselectedRow={() => handleClickStep(idx)}
						>
							<Flex align="center" justify="between" width="100%">
								<ActionIcon
									actionType={workflowStep.actionType}
								/>
								<Text size="2">
									{workflowStep.actionType === "start"
										? "Start"
										: actionsIndex[workflowStep.actionType]
												.displayName}
								</Text>
							</Flex>
						</Row>
					),
				)}
			</Box>

			{selectedStepIdx !== null && (
				<WorkflowRunStep
					workflowId={workflowId}
					workflowRunId={workflowRunId}
					workflowRunStepId={data[selectedStepIdx].stepId}
				/>
			)}
		</Flex>
	);
}