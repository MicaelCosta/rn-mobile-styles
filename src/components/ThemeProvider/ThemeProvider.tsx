import React from 'react';
import { ThemeProvider as SRThemeProvider, createTheme } from '@shopify/restyle';

import { ThemeProviderProps } from './ThemeProviderType';

export function ThemeProvider(props: ThemeProviderProps){
    const { children, theme } = props;

    return <SRThemeProvider theme={createTheme(theme)}>
        {children}
    </SRThemeProvider>;
}
