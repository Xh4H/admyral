import { IntegrationType } from "@/lib/types";
import Image from "next/image";
import IntegrationIcon from "./icons/integration-icon";

export interface IntegrationLogoIconProps {
	integration: IntegrationType | null;
}

export default function IntegrationLogoIcon({
	integration,
}: IntegrationLogoIconProps) {
	switch (integration) {
		case IntegrationType.VIRUSTOTAL:
			return (
				<Image
					src="/virustotal-icon.svg"
					alt="VirusTotal"
					height="20"
					width="20"
				/>
			);

		case IntegrationType.ALIENVAULT_OTX:
			return (
				<Image
					src="/alienvault_otx_icon.png"
					alt="AlienVault OTX"
					height="20"
					width="20"
				/>
			);

		default:
			return <IntegrationIcon />;
	}
}