import React from 'react';
import { ThemeProvider as SRThemeProvider, createTheme } from '@shopify/restyle';

import { ThemeProviderProps } from './themeProviderType';

export function ThemeProvider(props: ThemeProviderProps) {
	const { children, theme } = props;

	const newTheme = {
		...theme,
		//textVariants é obrigatorio para não dar erro de funcsMap[key] is not a function
		textVariants: {
			defaults: {},
		},
	};

	return <SRThemeProvider theme={createTheme(newTheme)}>{children}</SRThemeProvider>;
}
