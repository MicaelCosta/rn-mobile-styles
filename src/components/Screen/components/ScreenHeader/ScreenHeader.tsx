import React from 'react';

import { Box } from '../../../Box';
import { Text } from '../../../Text';

import { ScreenHeaderProps } from './screenHeaderType';

const SIZE_DEFAULT = 20;

export function ScreenHeader(props: ScreenHeaderProps) {
	const { title, LeftComponent, RightComponent } = props;
	return (
		<Box flexDirection="row" alignItems="center" justifyContent="space-between" mb="s24" width="100%">
			<Box height={SIZE_DEFAULT} width={SIZE_DEFAULT}>
				{LeftComponent}
			</Box>

			{title && <Text preset="headingSmall">{title}</Text>}

			<Box height={SIZE_DEFAULT} width={SIZE_DEFAULT}>
				{RightComponent}
			</Box>
		</Box>
	);
}
