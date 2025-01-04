import { FC } from 'react';

import { BoxProps, TouchableOpacityBoxProps } from './components/Box';
import { ButtonProps } from './components/Button';
import { DateInputProps } from './components/DateInput';
import { LoadingProps } from './components/Loading';
import { ModalProps } from './components/Modal';
import { ScreenProps } from './components/Screen';
import { TextProps } from './components/Text';
import { TextInputProps } from './components/TextInput';
import { Theme, ThemeProviderProps } from './components/ThemeProvider';

export const Box: FC<BoxProps>;
export const Button: FC<ButtonProps>;
export const DateInput: FC<DateInputProps>;
export const Loading: FC<LoadingProps>;
export const Modal: FC<ModalProps>;
export const Screen: FC<ScreenProps>;
export const Text: FC<TextProps>;
export const TextInput: FC<TextInputProps>;
export const ThemeProvider: FC<ThemeProviderProps>;
export const TouchableOpacityBox: FC<TouchableOpacityBoxProps>;

export const useAppTheme: () => Theme;
export const useAppSafeArea: () => { top: number; bottom: number };

export const formatCurrency: (
	value: number,
	thousandSeparator?: string,
	decimalScale?: number,
	prefix?: string
) => string;
export const formatDate: (value: Date | undefined | null, customFormat?: string) => string;
export const formatDateHour: (value: Date | undefined | null, withSeconds?: boolean, customFormat?: string) => string;

export const isValidDate: (value: any) => boolean;
export const isValidEspecialCaracter: (value: string) => boolean;
export const isText: (value: string) => boolean;
export const isNumber: (value: string) => boolean;
