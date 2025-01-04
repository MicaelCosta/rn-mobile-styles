export function isValidDate(value: any): boolean {
	if (!value || value === 'Invalid Date' || Number(value) < 9999) {
		return false;
	}

	const data = new Date(value);

	// eslint-disable-next-line no-self-compare
	return data.getTime() === data.getTime(); // Se a data não for válida, retorna NaN, Nan sempre é diferente de NaN
}

export function isValidEspecialCaracter(value: string): boolean {
	return /^[a-zA-Z0-9]*$/.test(value);
}

export function isText(value: string): boolean {
	return /^[a-zA-Z]*$/.test(value);
}

export function isNumber(value: string): boolean {
	return /^[0-9]*$/.test(value);
}
