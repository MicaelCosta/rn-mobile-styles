import { ReactElement } from 'react';
import { TextInputProps as RNTextInputProps } from 'react-native';

import { BoxProps } from '../Box';

export type TextInputProps = RNTextInputProps & {
	label: string;
	errorMessage?: string;
	LeftComponent?: ReactElement;
	RightComponent?: ReactElement;
	boxProps?: BoxProps;
};
