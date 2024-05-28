import {
	ApiParameterDatatype,
	IntegrationDefinition,
	IntegrationType,
} from "./types";

export const INTEGRATIONS: Record<string, IntegrationDefinition> = {
	// VirusTotal
	[IntegrationType.VIRUSTOTAL]: {
		name: "VirusTotal",
		integrationType: IntegrationType.VIRUSTOTAL,
		credentials: [
			{
				id: "API_KEY",
				displayName: "API Key",
			},
		],
		apis: [
			{
				id: "GET_A_FILE_REPORT",
				name: "Get a file report",
				description: "Retrieve information about a file using its hash",
				documentationUrl:
					"https://docs.virustotal.com/reference/file-info",
				parameters: [
					{
						id: "hash",
						displayName: "Hash",
						description: "The file's hash.",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
				requiresAuthentication: true,
			},
			{
				id: "GET_A_DOMAIN_REPORT",
				name: "Get a domain report",
				description:
					"Retrieve information about a domain (reputation, whois information, last DNS records, etc.)",
				documentationUrl:
					"https://docs.virustotal.com/reference/domain-info",
				parameters: [
					{
						id: "domain",
						displayName: "Domain",
						description: "The domain to get a report for.",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
				requiresAuthentication: true,
			},
			{
				id: "GET_IP_ADDRESS_REPORT",
				name: "Get IP address report",
				description:
					"Retrieve information about an IP address (reputation, country, last SSL certificate, etc.)",
				documentationUrl:
					"https://docs.virustotal.com/reference/ip-info",
				parameters: [
					{
						id: "ip",
						displayName: "IP Address",
						description: "The IP address to get a report for",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
				requiresAuthentication: true,
			},
			{
				id: "GET_URL_ANALYSIS_REPORT",
				name: "Get URL analysis report",
				description: "Retrieve information about a URL.",
				documentationUrl:
					"https://docs.virustotal.com/reference/url-info",
				parameters: [
					{
						id: "url",
						displayName: "URL",
						description: "The URL to get a report for",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
				requiresAuthentication: true,
			},
			{
				id: "GET_FILE_BEHAVIOR_REPORTS_SUMMARY",
				name: "Get a summary of all behavior reports for a file",
				description:
					"Retrieve a summary of all behavior reports for a file consisting in merging together the reports produced by multiple sandboxes.",
				documentationUrl:
					"https://docs.virustotal.com/reference/file-all-behaviours-summary",
				parameters: [
					{
						id: "hash",
						displayName: "Hash",
						description:
							"SHA-256, SHA-1 or MD5 identifying the file",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
				requiresAuthentication: true,
			},
			{
				id: "GET_VOTES_ON_A_DOMAIN",
				name: "Get votes on a domain",
				description: "Retrieve the votes for a domain.",
				documentationUrl:
					"https://docs.virustotal.com/reference/domains-votes-get",
				parameters: [
					{
						id: "domain",
						displayName: "Domain",
						description: "The domain to get votes for.",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
				requiresAuthentication: true,
			},
			{
				id: "GET_VOTES_ON_A_FILE",
				name: "Get votes on a file",
				description: "Retrieve the votes for a domain.",
				documentationUrl:
					"https://docs.virustotal.com/reference/files-votes-get",
				parameters: [
					{
						id: "hash",
						displayName: "Hash",
						description:
							"SHA-256, SHA-1 or MD5 identifying the file",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
				requiresAuthentication: true,
			},
			{
				id: "GET_VOTES_ON_AN_IP_ADDRESS",
				name: "Get votes on an IP address",
				description: "Retrieve the votes for an IP address.",
				documentationUrl:
					"https://docs.virustotal.com/reference/ip-votes",
				requiresAuthentication: true,
				parameters: [
					{
						id: "ip",
						displayName: "IP Address",
						description: "The IP address to get votes for.",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
			},
			{
				id: "GET_VOTES_ON_A_URL",
				name: "Get votes on a URL",
				description: "Retrieve the votes for a URL.",
				documentationUrl:
					"https://docs.virustotal.com/reference/urls-votes-get",
				requiresAuthentication: true,
				parameters: [
					{
						id: "url",
						displayName: "URL",
						description: "The URL to get votes for.",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
			},
			{
				id: "SCAN_URL",
				name: "Scan a URL",
				description: "Submit a URL for scanning.",
				documentationUrl:
					"https://docs.virustotal.com/reference/scan-url",
				requiresAuthentication: true,
				parameters: [
					{
						id: "url",
						displayName: "URL",
						description: "The URL to scan.",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
			},
			{
				id: "GET_COMMENTS_IP_ADDRESS",
				name: "Get comments on an IP address",
				description: "Retrieve the comments for an IP address.",
				documentationUrl:
					"https://docs.virustotal.com/reference/ip-comments-get",
				requiresAuthentication: true,
				parameters: [
					{
						id: "ip",
						displayName: "IP Address",
						description: "The IP address to get comments for.",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
			},
			{
				id: "GET_COMMENTS_DOMAIN",
				name: "Get comments on a domain",
				description: "Retrieve the comments for a domain.",
				documentationUrl:
					"https://docs.virustotal.com/reference/domains-comments-get",
				requiresAuthentication: true,
				parameters: [
					{
						id: "domain",
						displayName: "Domain",
						description: "The domain to get comments for.",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
			},
			{
				id: "GET_COMMENTS_FILE",
				name: "Get comments on a file",
				description: "Retrieve the comments for a file.",
				documentationUrl:
					"https://docs.virustotal.com/reference/files-comments-get",
				requiresAuthentication: true,
				parameters: [
					{
						id: "hash",
						displayName: "Hash",
						description:
							"SHA-256, SHA-1 or MD5 identifying the file",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
			},
			{
				id: "GET_COMMENTS_URL",
				name: "Get comments on a URL",
				description: "Retrieve the comments for a URL.",
				documentationUrl:
					"https://docs.virustotal.com/reference/urls-comments-get",
				requiresAuthentication: true,
				parameters: [
					{
						id: "url",
						displayName: "URL",
						description: "The URL to get comments for.",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
			},
			{
				id: "SEARCH",
				name: "Search for files, URLs, domains, IPs, and comments",
				description:
					"This endpoint searches for file hashes, URLs, domains, IPs, and comments by tags",
				documentationUrl:
					"https://docs.virustotal.com/reference/api-search",
				requiresAuthentication: true,
				parameters: [
					{
						id: "query",
						displayName: "Query",
						description:
							"File hash, URL, domain, IP, or comment by tag (e.g. #tag)",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
			},
		],
	},
	// AlienVault OTX
	[IntegrationType.ALIENVAULT_OTX]: {
		name: "AlienVault OTX",
		integrationType: IntegrationType.ALIENVAULT_OTX,
		credentials: [
			{
				id: "API_KEY",
				displayName: "API Key",
			},
		],
		apis: [
			{
				id: "GET_DOMAIN_INFORMATION",
				name: "Get Domain Information",
				description:
					"Information about the currently available data (geographic, malware, URLs, passive DNS records, whois, meta data for http(s) connections).",
				documentationUrl:
					"https://otx.alienvault.com/assets/static/external_api.html#api_v1_indicators_domain__domain___section__get",
				parameters: [
					{
						id: "domain",
						displayName: "Domain",
						description: "The domain to get a report for.",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
				requiresAuthentication: true,
			},
		],
	},
	// Threatpost
	[IntegrationType.THREATPOST]: {
		name: "Threatpost",
		integrationType: IntegrationType.THREATPOST,
		credentials: [],
		apis: [
			{
				id: "FETCH_RSS_FEED",
				name: "Get Latest Threats",
				description:
					"Get the latest threats from Threatpost's RSS feed",
				documentationUrl: "https://threatpost.com/",
				parameters: [],
				requiresAuthentication: false,
			},
		],
	},
	// YARAify
	[IntegrationType.YARAIFY]: {
		name: "YARAify",
		integrationType: IntegrationType.YARAIFY,
		credentials: [],
		apis: [
			{
				id: "QUERY_A_FILE_HASH",
				name: "Query a File Hash",
				description:
					"Query YARAify for a file hash (SHA256, MD5, SHA1, SHA3-384)",
				documentationUrl:
					"https://yaraify.abuse.ch/api/#query-filehash",
				parameters: [
					{
						id: "hash",
						displayName: "Hash",
						description: "The file's hash.",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
				requiresAuthentication: false,
			},
			{
				id: "QUERY_YARA_RULE",
				name: "Query YARA Rule",
				description:
					"Get a list of recent files matching a specific YARA rule",
				documentationUrl: "https://yaraify.abuse.ch/api/#yara",
				parameters: [
					{
						id: "yara",
						displayName: "YARA",
						description: "The YARA rule to query for.",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
				requiresAuthentication: false,
			},
			{
				id: "QUERY_CLAMAV_SIGNATURE",
				name: "Query ClamAV Signature",
				description:
					"Get a list of recent files associated with a specific ClamAV signature",
				documentationUrl: "https://yaraify.abuse.ch/api/#clamav",
				parameters: [
					{
						id: "clamav",
						displayName: "ClamAV Signature",
						description: "The ClamAV Signature to query for.",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
				requiresAuthentication: false,
			},
			{
				id: "QUERY_IMPHASH",
				name: "Query imphash",
				description:
					"Get a list of recent files associated with a specific imphash",
				documentationUrl: "https://yaraify.abuse.ch/api/#imphash",
				parameters: [
					{
						id: "imphash",
						displayName: "imphash",
						description: "The imphash to query for.",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
				requiresAuthentication: false,
			},
			{
				id: "QUERY_TLSH",
				name: "Query tlsh",
				description:
					"Get a list of recent files associated with a tlsh",
				documentationUrl: "https://yaraify.abuse.ch/api/#tlsh",
				parameters: [
					{
						id: "tlsh",
						displayName: "tlsh",
						description: "The tlsh to query for.",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
				requiresAuthentication: false,
			},
			{
				id: "QUERY_TELFHASH",
				name: "Query telfhash",
				description:
					"Get a list of recent files associated with a specific telfhash",
				documentationUrl: "https://yaraify.abuse.ch/api/#telfhash",
				parameters: [
					{
						id: "telfhash",
						displayName: "telfhash",
						description: "The telfhash to query for.",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
				requiresAuthentication: false,
			},
			{
				id: "QUERY_GIMPHASH",
				name: "Query gimphash",
				description:
					"Get a list of recent files associated with a specific gimphash",
				documentationUrl: "https://yaraify.abuse.ch/api/#gimphash",
				parameters: [
					{
						id: "gimphash",
						displayName: "gimphash",
						description: "The gimphash to query for.",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
				requiresAuthentication: false,
			},
			{
				id: "QUERY_ICON_DHASH",
				name: "Query icon dhash",
				description:
					"Get a list of recent files associated with a specific icon dhash",
				documentationUrl: "https://yaraify.abuse.ch/api/#dhash_icon",
				parameters: [
					{
						id: "icon_dhash",
						displayName: "icon dhash",
						description: "The icon dhash to query for.",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
				requiresAuthentication: false,
			},
			{
				id: "LIST_RECENTLY_DEPLOYED_YARA_RULES",
				name: "List Recently Deployed YARA Rules",
				description:
					"Get a list of the most recent deployed YARA rules on YARAify",
				documentationUrl: "https://yaraify.abuse.ch/api/#yara-recent",
				parameters: [],
				requiresAuthentication: false,
			},
		],
	},
	// Phish Report
	[IntegrationType.PHISH_REPORT]: {
		name: "Phish Report",
		integrationType: IntegrationType.PHISH_REPORT,
		credentials: [
			{
				id: "API_KEY",
				displayName: "API Key",
			},
		],
		apis: [
			{
				id: "GET_HOSTING_CONTACT_INFORMATION",
				name: "Get Hosting Providers and Abuse Contact Information for an URL/IP",
				description:
					"Finds the best way to report a URL/IP to the relevant hosting providers and domain registrars.",
				documentationUrl:
					"https://phish.report/api/v0#tag/Analysis/paths/~1api~1v0~1hosting/get",
				parameters: [
					{
						id: "url",
						displayName: "URL",
						description:
							"The URL, domain, or IP address to find abuse contact information for.",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
				requiresAuthentication: true,
			},
			{
				id: "LIST_TAKEDOWNS",
				name: "List Takedowns",
				description:
					"Retrieve a list of takedowns you've previously reported",
				documentationUrl:
					"https://phish.report/api/v0#tag/Takedown/paths/~1api~1v0~1cases/get",
				parameters: [],
				requiresAuthentication: true,
			},
			{
				id: "START_TAKEDOWN",
				name: "Start a Takedown",
				description:
					"Start the takedown of a URL you've identified as malicious. Phish Report will complete all available automatic takedown steps, and return a list of recommended manual actions.",
				documentationUrl:
					"https://phish.report/api/v0#tag/Takedown/paths/~1api~1v0~1cases/post",
				parameters: [
					{
						id: "url",
						displayName: "Phishing URL",
						description:
							"The phishing URL to take down. You should have high confidence that this URL is malicious.",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
					{
						id: "ignoreDuplicates",
						displayName: "Ignore Duplicates",
						description:
							"By default, trying to create a duplicate case will fail. Setting this to true will allow duplictes.",
						required: false,
						dataType: ApiParameterDatatype.BOOLEAN,
					},
				],
				requiresAuthentication: true,
			},
			{
				id: "GET_TAKEDOWN",
				name: "Get a Takedown",
				description:
					"Retrieve the takedown information for an URL you've previously reported.",
				documentationUrl:
					"https://phish.report/api/v0#tag/Takedown/paths/~1api~1v0~1cases~1%7Bid%7D/get",
				requiresAuthentication: true,
				parameters: [
					{
						id: "id",
						displayName: "Case ID",
						description: "The ID of the takedown request.",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
			},
			{
				id: "CLOSE_TAKEDOWN_CASE",
				name: "Close a Takedown Case",
				description:
					"Close a takedown case you've previously reported (e.g. because the site is not longer active).",
				documentationUrl:
					"https://phish.report/api/v0#tag/Takedown/paths/~1api~1v0~1cases~1%7Bid%7D~1close/put",
				requiresAuthentication: true,
				parameters: [
					{
						id: "id",
						displayName: "Case ID",
						description: "The ID of the takedown request.",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
					{
						id: "comment",
						displayName: "Comment",
						description:
							"An optional comment explaining why the case is being closed.",
						required: false,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
			},
		],
	},
	// Slack
	[IntegrationType.SLACK]: {
		name: "Slack",
		integrationType: IntegrationType.SLACK,
		credentials: [
			{
				id: "API_KEY",
				displayName: "API Key",
			},
		],
		apis: [
			{
				id: "SEND_MESSAGE",
				name: "Send a message",
				description:
					"This method posts a message to a public channel, private channel, or direct message (DM, or IM) conversation. Required scope: chat:write",
				documentationUrl:
					"https://api.slack.com/methods/chat.postMessage",
				requiresAuthentication: true,
				parameters: [
					{
						id: "channel",
						displayName: "Channel / Group / User",
						description:
							"Channel, private group, or user to send a message to. For channels, you can use the name (e.g. #my-channel) or the ID. For private channels and groups, use the ID. For DMs to users, use the user ID.",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
					{
						id: "text",
						displayName: "Text",
						description:
							"The purpose of this field changes depends on whether the blocks field is used. If blocks is used, this is used as a fallback string to display in notifications. If blocks is not used, this is the main body text of the message. It can be formatted as plain text, or with mrkdwn.",
						required: true,
						dataType: ApiParameterDatatype.TEXTAREA,
					},
					{
						id: "blocks",
						displayName: "Blocks",
						description: "An array of layout blocks.",
						required: false,
						dataType: ApiParameterDatatype.TEXTAREA,
					},
					{
						id: "threadTs",
						displayName: "Thread Timestamp",
						description:
							'To reply to another message, provide the "ts" value of the message to reply to. Avoid using a reply\'s "ts" value. Instead, use the "ts" value of the parent message.',
						required: false,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
			},
			{
				id: "LIST_USERS",
				name: "List Users",
				description:
					"Lists all users in a Slack team. This includes deleted/deactivated users. Requred scopes: users:read, users:read.email",
				documentationUrl: "https://api.slack.com/methods/users.list",
				requiresAuthentication: true,
				parameters: [
					{
						id: "includeLocale",
						displayName: "Include Locale for Users?",
						description:
							"Set this to true to receive the locale for users. Defaults to false.",
						required: false,
						dataType: ApiParameterDatatype.BOOLEAN,
					},
					{
						id: "limit",
						displayName: "Limit",
						description:
							"Number of users to return per page. Maximum of 1000. Defaults to 200.",
						required: false,
						dataType: ApiParameterDatatype.NUMBER,
					},
					{
						id: "returnAllPages",
						displayName: "Return All Pages",
						description:
							"Set this to true to handle pagination automatically and return all users. Defaults to false.",
						required: false,
						dataType: ApiParameterDatatype.BOOLEAN,
					},
				],
			},
			{
				id: "LOOKUP_BY_EMAIL",
				name: "Lookup User by Email",
				description:
					"Find a user with an email address. Requred scopes: users:read.email",
				documentationUrl:
					"https://api.slack.com/methods/users.lookupByEmail",
				requiresAuthentication: true,
				parameters: [
					{
						id: "email",
						displayName: "Email",
						description: "An email address to look up.",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
			},
			{
				id: "CONVERSATIONS_OPEN",
				name: "Open a Conversation",
				description:
					"Opens or resumes a direct message or multi-person direct message. Requred scopes: im:write, mpim:write, groups:write, channels:manage",
				documentationUrl:
					"https://api.slack.com/methods/conversations.open",
				requiresAuthentication: true,
				parameters: [
					{
						id: "users",
						displayName: "User IDs",
						description:
							'Comma-separated list of 1 to 8 user IDs (e.g. "W1234567890,U2345678901,U3456789012"). If only one user is included, this creates a 1:1 DM. If no users are included, then a channel must be provided.',
						required: false,
						dataType: ApiParameterDatatype.TEXT,
					},
					{
						id: "channel",
						displayName: "Channel",
						description:
							'Resume a conversation by supplying an "im" or "mpim"\'s ID. Alternatively, provide a list of user IDs.',
						required: false,
						dataType: ApiParameterDatatype.TEXT,
					},
					{
						id: "returnIm",
						displayName: "Return IM?",
						description:
							'Boolean, indicates you want the full IM channel definition in the response. Defaults to "false".',
						required: false,
						dataType: ApiParameterDatatype.BOOLEAN,
					},
				],
			},
			{
				id: "REACTIONS_ADD",
				name: "Add a Reaction",
				description: "Adds a reaction to a message.",
				documentationUrl: "https://api.slack.com/methods/reactions.add",
				requiresAuthentication: true,
				parameters: [
					{
						id: "channel",
						displayName: "Channel",
						description:
							'Channel where the message to add reaction to was posted (e.g., "C1234567890").',
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
					{
						id: "name",
						displayName: "Name",
						description:
							'Reaction (emoji) name (e.g., "thumbsup").',
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
					{
						id: "timestamp",
						displayName: "Timestamp",
						description:
							'Timestamp of the message to add reaction to (e.g., "1234567890.123456").',
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
			},
		],
	},
	// Jira
	[IntegrationType.JIRA]: {
		name: "Jira",
		integrationType: IntegrationType.JIRA,
		credentials: [
			{
				id: "DOMAIN",
				displayName:
					"Domain (e.g., the your-domain part of https://your-domain.atlassian.net)",
			},
			{
				id: "EMAIL",
				displayName:
					"Email of the account who provisioned the API token",
			},
			{
				id: "API_TOKEN",
				displayName: "API Token",
			},
		],
		apis: [
			{
				id: "CREATE_ISSUE",
				name: "Create Issue",
				description: "Create a new issue",
				documentationUrl:
					"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-post",
				requiresAuthentication: true,
				parameters: [
					{
						id: "summary",
						displayName: "Summary",
						description: "Summary of the issue",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
					{
						id: "projectId",
						displayName: "Project ID",
						description:
							"The ID of the project to create the issue in",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
					{
						id: "issueType",
						displayName: "Issue Type",
						description:
							'The name of the issue type to create (e.g. "Story", "Bug")',
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
					{
						id: "description",
						displayName: "Description",
						description:
							"Description of the issue in Atlassian Document Format",
						required: false,
						dataType: ApiParameterDatatype.TEXTAREA,
					},
					{
						id: "assignee",
						displayName: "Assignee",
						description: "The account ID of the assignee",
						required: false,
						dataType: ApiParameterDatatype.TEXT,
					},
					{
						id: "labels",
						displayName: "Labels",
						description:
							'Comma-separated list of labels (e.g., "label1, label2"). Note that a label must not contain spaces.',
						required: false,
						dataType: ApiParameterDatatype.TEXT,
					},
					{
						id: "priority",
						displayName: "Priority",
						description:
							'The priority of the issue (e.g., "High", "Medium")',
						required: false,
						dataType: ApiParameterDatatype.TEXT,
					},
					{
						id: "customFields",
						displayName: "Custom Fields",
						description:
							'Custom fields for the issue (e.g., { "customfield_10000": "value" } ) defined as a JSON object.',
						required: false,
						dataType: ApiParameterDatatype.TEXTAREA,
					},
					{
						id: "components",
						displayName: "Components",
						description:
							'JSON array of components for the issue (e.g., [ { "name": "component1" }, { "name": "component2" } ]). Note that you must use the IDs of the custom fields.',
						required: false,
						dataType: ApiParameterDatatype.TEXTAREA,
					},
				],
			},
			{
				id: "ASSIGN_ISSUE",
				name: "Assign Issue",
				description: "Assign an issue to a user.",
				documentationUrl:
					"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-assignee-put",
				requiresAuthentication: true,
				parameters: [
					{
						id: "issueIdOrKey",
						displayName: "Issue ID or Key",
						description:
							"The ID or key of the issue to be assigned.",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
					{
						id: "accountId",
						displayName: "Account ID",
						description: "The account ID of the assignee",
						required: true,
						dataType: ApiParameterDatatype.TEXT,
					},
				],
			},
		],
	},
	// ...
};
