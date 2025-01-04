import { BoxProps } from '../Box';

export type UseDateInputProps = {
	value: Date | undefined | null;
	onChange: (date?: Date | null) => void;
};

export type DateInputProps = {
	label: string;
	value?: Date | undefined | null;
	onChange: (date?: Date | null) => void;
	maxDate?: Date | undefined;
	minDate?: Date | undefined;
	errorMessage?: string;
	disabled?: boolean;
	boxProps?: BoxProps;
};
