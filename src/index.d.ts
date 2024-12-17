import { FC } from 'react';

import { BoxProps, TouchableOpacityBoxProps } from './components/Box';
import { ButtonProps } from './components/Button';
import { LoadingProps } from './components/Loading';
import { TextProps } from './components/Text';
import { Theme, ThemeProviderProps } from './components/ThemeProvider';

export const Box: FC<BoxProps>;
export const Button: FC<ButtonProps>;
export const Loading: FC<LoadingProps>;
export const Text: FC<TextProps>;
export const ThemeProvider: FC<ThemeProviderProps>;
export const TouchableOpacityBox: FC<TouchableOpacityBoxProps>;

export const useAppTheme: () => Theme;
