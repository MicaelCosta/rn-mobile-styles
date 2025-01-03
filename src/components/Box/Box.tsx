import { TouchableOpacity, TouchableOpacityProps as RNTouchableOpacityProps } from 'react-native';

import {
	createBox,
	createRestyleComponent,
	backgroundColor,
	BackgroundColorProps,
	spacing,
	SpacingProps,
	spacingShorthand,
	SpacingShorthandProps,
	layout,
	LayoutProps,
	border,
	BorderProps,
} from '@shopify/restyle';
import { Theme } from '../ThemeProvider';

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;

export const TouchableOpacityBox = createRestyleComponent<TouchableOpacityBoxProps, Theme>(
	[backgroundColor, spacing, spacingShorthand, layout, border],
	TouchableOpacity
);
export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
	SpacingProps<Theme> &
	SpacingShorthandProps<Theme> &
	LayoutProps<Theme> &
	BorderProps<Theme> &
	RNTouchableOpacityProps;
