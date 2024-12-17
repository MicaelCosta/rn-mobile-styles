import { SRTextProps } from './SRText';

export type TextProps = SRTextProps & {
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
