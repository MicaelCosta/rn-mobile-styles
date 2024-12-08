import { ReactNode } from 'react';

export type ThemeProviderProps = {
  children: ReactNode;
  theme: Theme
}

export type Theme = {
  colors: {
    primary: string;
    primaryContrast: string;

    secondary: string;
    secondaryContrast: string;

    background: string;
    backgroundContrast: string;

    text: string;

    white: string;
    black: string;

    error: string;
    success: string;
    warning: string;
    info: string;

    gray1: string;
    gray2: string;
    gray3: string;
    gray4: string;
  };
  fonts: {
    regular: string;
    semibold: string;
    bold: string;
  };
  spacing: {
    s4: number;
    s8: number;
    s12: number;
    s16: number;
    s20: number;
    s24: number;
  };
  borderRadii: {
    s8: number;
    s12: number;
    s16: number;
  };
}

export type ThemeColor = keyof Theme['colors'];
export type ThemeSpacing = keyof Theme['spacing'];
export type ThemeBorderRadius = keyof Theme['borderRadius'];
