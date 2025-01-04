import { useAppTheme } from './useAppTheme';

export function useAppSafeArea() {
	const top = 0;
	const bottom = 0;

	const { spacing } = useAppTheme();

	return {
		top: Math.max(top, spacing.s20),
		bottom: Math.max(bottom, spacing.s20),
	};
}
