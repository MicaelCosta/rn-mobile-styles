import { FC } from 'react';

import { BoxProps, TouchableOpacityBoxProps } from './components/Box';
import { ButtonProps } from './components/Button';
import { TextProps } from './components/Text';
import { ThemeProviderProps } from './components/ThemeProvider';

export const Box: FC<BoxProps>;
export const TouchableOpacityBox: FC<TouchableOpacityBoxProps>;
export const Button: FC<ButtonProps>;
export const Text: FC<TextProps>;
export const ThemeProvider: FC<ThemeProviderProps>;
