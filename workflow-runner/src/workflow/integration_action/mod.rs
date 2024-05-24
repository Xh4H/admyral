use anyhow::Result;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;

use super::{
    context::Context,
    http_client::{HttpClient, ReqwestClient},
    ActionExecutor,
};

mod alienvault_otx;
mod phish_report;
mod threatpost;
mod virustotal;
mod yaraify;

pub trait IntegrationExecutor {
    async fn execute(
        &self,
        client: &dyn HttpClient,
        context: &Context,
        api: &str,
        credential_name: &str,
        parameters: &HashMap<String, String>,
    ) -> Result<serde_json::Value>;
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq)]
#[serde(rename_all = "SCREAMING_SNAKE_CASE")]
pub enum IntegrationType {
    VirusTotal,
    AlienvaultOtx,
    Threatpost,
    Yaraify,
    PhishReport,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Integration {
    integration_type: IntegrationType,
    api: String,
    params: HashMap<String, String>,
    credential: String,
}

impl ActionExecutor for Integration {
    async fn execute(&self, context: &Context) -> Result<serde_json::Value> {
        let client = ReqwestClient::new();

        match self.integration_type {
            IntegrationType::VirusTotal => {
                virustotal::VirusTotalExecutor
                    .execute(&client, context, &self.api, &self.credential, &self.params)
                    .await
            }
            IntegrationType::AlienvaultOtx => {
                alienvault_otx::AlienvaultOtxExecutor
                    .execute(&client, context, &self.api, &self.credential, &self.params)
                    .await
            }
            IntegrationType::Threatpost => {
                threatpost::ThreatpostExecutor
                    .execute(&client, context, &self.api, &self.credential, &self.params)
                    .await
            }
            IntegrationType::Yaraify => {
                yaraify::YaraifyExecutor
                    .execute(&client, context, &self.api, &self.credential, &self.params)
                    .await
            }
            IntegrationType::PhishReport => {
                phish_report::PhishReportExecutor
                    .execute(&client, context, &self.api, &self.credential, &self.params)
                    .await
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use maplit::hashmap;
    use serde_json::json;

    #[test]
    fn test_deserialization() {
        let action_definition = json!({
            "api": "GET_A_FILE_REPORT",
            "integration_type": "VIRUS_TOTAL",
            "params": {
                "hash": "<<webhook.body.hash>>"
            },
            "credential": "My VirusTotal API Key"
        });

        let parsed_integration = serde_json::from_value::<Integration>(action_definition)
            .expect("Should not fail to parse!");

        assert_eq!(
            parsed_integration.integration_type,
            IntegrationType::VirusTotal
        );
        assert_eq!(parsed_integration.api, "GET_A_FILE_REPORT".to_string());
        assert_eq!(
            parsed_integration.params,
            hashmap! { "hash".to_string() => "<<webhook.body.hash>>".to_string() }
        );
        assert_eq!(
            parsed_integration.credential,
            "My VirusTotal API Key".to_string()
        );
    }
}
