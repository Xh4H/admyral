export interface AssistantIconProps {
	fill: string;
}

export default function AssistantIcon({ fill }: AssistantIconProps) {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="18" height="18" fill="white" fill-opacity="0.01" />
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M16.6799 0.599996C16.6799 0.334899 16.465 0.119995 16.1999 0.119995C15.9348 0.119995 15.7199 0.334899 15.7199 0.599996V1.32H14.9999C14.7348 1.32 14.5199 1.5349 14.5199 1.8C14.5199 2.06509 14.7348 2.28 14.9999 2.28H15.7199V3C15.7199 3.26509 15.9348 3.48 16.1999 3.48C16.465 3.48 16.6799 3.26509 16.6799 3V2.28H17.3999C17.665 2.28 17.8799 2.06509 17.8799 1.8C17.8799 1.5349 17.665 1.32 17.3999 1.32H16.6799V0.599996ZM14.2242 3.77573C14.4585 4.01004 14.4585 4.38994 14.2242 4.62426L13.0242 5.82426C12.7899 6.05857 12.4099 6.05857 12.1757 5.82426C11.9413 5.58995 11.9413 5.21005 12.1757 4.97573L13.3756 3.77574C13.6099 3.54142 13.9899 3.54142 14.2242 3.77573ZM11.8242 6.17573C12.0585 6.41004 12.0585 6.78995 11.8242 7.02426L3.42417 15.4242C3.18985 15.6586 2.80996 15.6586 2.57565 15.4242C2.34132 15.19 2.34132 14.8101 2.57565 14.5757L10.9757 6.17573C11.21 5.94142 11.5899 5.94142 11.8242 6.17573ZM16.1999 6.12C16.465 6.12 16.6799 6.3349 16.6799 6.6V7.32H17.3999C17.665 7.32 17.8799 7.5349 17.8799 7.8C17.8799 8.06509 17.665 8.28 17.3999 8.28H16.6799V9C16.6799 9.26509 16.465 9.48 16.1999 9.48C15.9348 9.48 15.7199 9.26509 15.7199 9V8.28H14.9999C14.7348 8.28 14.5199 8.06509 14.5199 7.8C14.5199 7.5349 14.7348 7.32 14.9999 7.32H15.7199V6.6C15.7199 6.3349 15.9348 6.12 16.1999 6.12ZM10.6799 0.599996C10.6799 0.334899 10.465 0.119995 10.1999 0.119995C9.93482 0.119995 9.71993 0.334899 9.71993 0.599996V1.32H8.99993C8.73482 1.32 8.51993 1.5349 8.51993 1.8C8.51993 2.06509 8.73482 2.28 8.99993 2.28H9.71993V3C9.71993 3.26509 9.93482 3.48 10.1999 3.48C10.465 3.48 10.6799 3.26509 10.6799 3V2.28H11.3999C11.665 2.28 11.8799 2.06509 11.8799 1.8C11.8799 1.5349 11.665 1.32 11.3999 1.32H10.6799V0.599996Z"
				fill={fill}
			/>
		</svg>
	);
}