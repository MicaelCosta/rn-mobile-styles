import { useTheme } from '@shopify/restyle';

import { Theme } from '../components/ThemeProvider';

export function useAppTheme() {
	return useTheme<Theme>();
}
