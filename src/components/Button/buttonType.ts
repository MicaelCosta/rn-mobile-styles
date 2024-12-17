import { TouchableOpacityBoxProps } from '../Box';
import { ThemeColor } from '../ThemeProvider';

export type ButtonProps = {
	title: string;
	loading?: boolean;
	preset?: ButtonPreset;
} & TouchableOpacityBoxProps;

export type ButtonPreset = 'primary' | 'outline';

export type ButtonUI = {
	container: TouchableOpacityBoxProps;
	content: ThemeColor;
};
