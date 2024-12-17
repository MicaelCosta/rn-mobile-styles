import { TouchableOpacity } from 'react-native';
import {
	createBox,
	createRestyleComponent,
	backgroundColor,
	spacing,
	spacingShorthand,
	layout,
	border,
} from '@shopify/restyle';
import { Theme } from '../ThemeProvider';
import { TouchableOpacityBoxProps } from './boxType';

export const Box = createBox<Theme>();

export const TouchableOpacityBox = createRestyleComponent<TouchableOpacityBoxProps, Theme>(
	[backgroundColor, spacing, spacingShorthand, layout, border],
	TouchableOpacity
);
