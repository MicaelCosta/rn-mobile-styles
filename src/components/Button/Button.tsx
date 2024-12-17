import React from 'react';

import { TouchableOpacityBox } from '../Box';
import { Text } from '../Text';
import { Loading } from '../Loading';

import { ButtonProps } from './buttonType';
import { buttonPresets } from './buttonPresets';

export function Button(props: ButtonProps) {
	const { title, loading, preset = 'primary', disabled, ...touchableOpacityBoxProps } = props;

	const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];

	return (
		<TouchableOpacityBox
			disabled={disabled || loading}
			backgroundColor="primary"
			paddingHorizontal="s20"
			height={50}
			alignItems="center"
			justifyContent="center"
			borderRadius="s16"
			{...buttonPreset.container}
			{...touchableOpacityBoxProps}
		>
			{loading && <Loading color={buttonPreset.content} />}

			{!loading && (
				<Text preset="paragraphMedium" bold color={buttonPreset.content}>
					{title}
				</Text>
			)}
		</TouchableOpacityBox>
	);
}
