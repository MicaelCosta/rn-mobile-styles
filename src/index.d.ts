import { FC } from 'react';

import { BoxProps, TouchableOpacityBoxProps } from './components/Box';
import { ButtonProps } from './components/Button';
import { LoadingProps } from './components/Loading';
import { ScreenProps } from './components/Screen';
import { TextProps } from './components/Text';
import { TextInputProps } from './components/TextInput';
import { Theme, ThemeProviderProps } from './components/ThemeProvider';

export const Box: FC<BoxProps>;
export const Button: FC<ButtonProps>;
export const Loading: FC<LoadingProps>;
export const Screen: FC<ScreenProps>;
export const Text: FC<TextProps>;
export const TextInput: FC<TextInputProps>;
export const ThemeProvider: FC<ThemeProviderProps>;
export const TouchableOpacityBox: FC<TouchableOpacityBoxProps>;

export const useAppTheme: () => Theme;
export const useAppSafeArea: () => { top: number; bottom: number };
