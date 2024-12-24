import React from 'react';
import { TextStyle } from 'react-native';
import { ThemeFonts } from '../ThemeProvider';
import { TextProps, TextVariants } from './textType';
import { SRText } from './SRText';
import { useAppTheme } from '../../hooks';

export function Text(props: TextProps) {
	const { children, preset = 'paragraphMedium', bold, italic, semiBold, style, ...textProps } = props;

	const { fonts } = useAppTheme();

	const fontFamily = getFontFamily(fonts, preset, bold, italic, semiBold);
	const fontSize = $fontSizes[preset];

	return (
		<SRText color="text" style={[fontSize, style, { fontFamily }]} {...textProps}>
			{children}
		</SRText>
	);
}

function getFontFamily(
	fonts: ThemeFonts,
	preset: TextVariants,
	bold?: boolean,
	italic?: boolean,
	semiBold?: boolean
): string {
	if (preset === 'headingLarge' || preset === 'headingMedium' || preset === 'headingSmall') {
		return italic ? fonts.boldItalic : fonts.bold;
	}

	switch (true) {
		case bold && italic:
			return fonts.boldItalic;
		case semiBold && italic:
			return fonts.semiboldItalic;
		case bold:
			return fonts.bold;
		case semiBold:
			return fonts.semibold;
		case italic:
			return fonts.italic;
		default:
			return fonts.regular;
	}
}

const $fontSizes: Record<TextVariants, TextStyle> = {
	headingLarge: { fontSize: 32, lineHeight: 38.4 },
	headingMedium: { fontSize: 22, lineHeight: 26.4 },
	headingSmall: { fontSize: 18, lineHeight: 23.4 },

	paragraphLarge: { fontSize: 18, lineHeight: 25.2 },
	paragraphMedium: { fontSize: 16, lineHeight: 22.4 },
	paragraphSmall: { fontSize: 14, lineHeight: 19.6 },

	paragraphCaption: { fontSize: 12, lineHeight: 16.8 },
	paragraphCaptionSmall: { fontSize: 10, lineHeight: 14 },
};
