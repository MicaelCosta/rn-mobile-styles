import { format } from 'date-fns';
import { isValidDate } from './validate';

export function formatCurrency(value: number, thousandSeparator = '.', decimalScale = 2, prefix = 'R$ '): string {
	return (
		prefix +
		(Math.round(value * 100) / 100)
			.toFixed(decimalScale)
			.replace('.', ',')
			.replace(/\B(?=(\d{3})+(?!\d))/g, `${thousandSeparator}`)
	);
}

function formatDateHourCore(
	value: Date | undefined | null,
	withHour?: boolean,
	withSeconds?: boolean,
	customFormat?: string
): string {
	if (!value || !isValidDate(value)) {
		return '';
	}

	if (customFormat) {
		return format(new Date(value), customFormat);
	}

	return format(new Date(value), `dd/MM/yyyy${withHour ? ' HH:mm' : ''}${withSeconds ? ':ss' : ''}`);
}

export function formatDate(value: Date | undefined | null, customFormat?: string): string {
	return formatDateHourCore(value, false, false, customFormat);
}

export function formatDateHour(value: Date | undefined | null, withSeconds?: boolean, customFormat?: string): string {
	return formatDateHourCore(value, true, withSeconds, customFormat);
}
