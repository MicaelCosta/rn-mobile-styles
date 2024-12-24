import React, { useRef } from 'react';
import { Pressable, TextInput as RNTextInput, TextStyle } from 'react-native';

import { useAppTheme } from '../../hooks';

import { Box, BoxProps } from '../Box';
import { $fontSizes, Text } from '../Text';

import { TextInputProps } from './textInputType';

export function TextInput(props: TextInputProps) {
	const { label, errorMessage, RightComponent, LeftComponent, boxProps, ...rnTextInputProps } = props;

	const { colors, fonts } = useAppTheme();
	const inputRef = useRef<RNTextInput>(null);

	function focusInput() {
		inputRef.current?.focus();
	}

	const $textInputContainer: BoxProps = {
		flexDirection: 'row',
		borderWidth: errorMessage ? 2 : 1,
		borderColor: errorMessage ? 'error' : 'gray4',
		borderRadius: 's12',
		padding: 's16',
	};

	return (
		<Box {...boxProps}>
			<Pressable onPress={focusInput}>
				<Text mb="s4" preset="paragraphMedium">
					{label}
				</Text>

				<Box {...$textInputContainer}>
					{LeftComponent && (
						<Box mr="s16" justifyContent="center">
							{LeftComponent}
						</Box>
					)}

					<RNTextInput
						ref={inputRef}
						placeholderTextColor={colors.gray2}
						style={[$textInputStyle, { fontFamily: fonts.regular }]}
						autoCapitalize="none"
						{...rnTextInputProps}
					/>

					{RightComponent && (
						<Box ml="s16" justifyContent="center">
							{RightComponent}
						</Box>
					)}
				</Box>

				{errorMessage && (
					<Text preset="paragraphSmall" bold color="error">
						{errorMessage}
					</Text>
				)}
			</Pressable>
		</Box>
	);
}

const $textInputStyle: TextStyle = {
	flexGrow: 1,
	flexShrink: 1,
	padding: 0,
	...$fontSizes.paragraphMedium,
};
