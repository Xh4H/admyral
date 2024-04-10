function isObject(data: any): boolean {
	return typeof data === "object" && !Array.isArray(data) && data !== null;
}

function toCamelCase(s: string): string {
	return s.replace(/([-_][a-z])/gi, ($1) => {
		return $1.toUpperCase().replace("-", "").replace("_", "");
	});
}

export function transformObjectKeysToCamelCase(data: any): any {
	if (isObject(data)) {
		const newObject = {} as Record<string, any>;
		Object.keys(data).forEach((key) => {
			newObject[toCamelCase(key)] = transformObjectKeysToCamelCase(
				data[key],
			);
		});
		return newObject;
	}

	if (Array.isArray(data) && data !== null) {
		return data.map((datum) => transformObjectKeysToCamelCase(datum));
	}

	return data;
}
