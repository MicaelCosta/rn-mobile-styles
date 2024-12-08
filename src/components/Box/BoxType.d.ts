import { TouchableOpacityProps as RNTouchableOpacityProps } from 'react-native';

import {
    BackgroundColorProps,
    SpacingProps,
    SpacingShorthandProps,
    LayoutProps,
    BorderProps,
    BoxProps as SRBoxProps,
} from '@shopify/restyle';
import { Theme } from '../ThemeProvider';

export type BoxProps =
BackgroundColorProps<Theme> &
SpacingProps<Theme> &
SpacingShorthandProps<Theme> &
LayoutProps<Theme> &
BorderProps<Theme> &
SRBoxProps;

export type TouchableOpacityBoxProps =
BackgroundColorProps<Theme> &
SpacingProps<Theme> &
SpacingShorthandProps<Theme> &
LayoutProps<Theme> &
BorderProps<Theme> &
RNTouchableOpacityProps;
