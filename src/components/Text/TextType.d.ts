import { TextProps as RNTextProps } from 'react-native';

import {
    BackgroundColorProps,
    SpacingProps,
    SpacingShorthandProps,
    LayoutProps,
    BorderProps,
    BoxProps,
    createText
} from '@shopify/restyle';
import { Theme } from '../ThemeProvider';
import { SRTextProps } from './SRText';

export type TextProps =
SRTextProps & {
    preset?: TextVariants;
    bold?: boolean;
    italic?: boolean;
    semiBold?: boolean;
};

export type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';