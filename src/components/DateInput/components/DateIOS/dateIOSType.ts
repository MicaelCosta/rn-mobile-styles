export type DateIOSProps = {
	label: string;
	dateIOS: Date | undefined | null;
	onHideDatePicker: () => void;
	onDateIOS: (date?: Date | undefined | null) => void;
	onNewDate: (date?: Date | undefined) => void;
	maxDate?: Date | undefined;
	minDate?: Date | undefined;
};
