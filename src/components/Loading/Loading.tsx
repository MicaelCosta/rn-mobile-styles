import React from 'react';
import { ActivityIndicator } from 'react-native';

import { useAppTheme } from '../../hooks';

import { LoadingProps } from './loadingType';

export function Loading(props: LoadingProps) {
	const { color = 'primary' } = props;

	const { colors } = useAppTheme();

	return <ActivityIndicator color={colors[color]} />;
}
