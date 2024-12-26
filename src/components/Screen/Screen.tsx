import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { Box } from '../Box';
import { useAppTheme, useAppSafeArea } from '../../hooks';

import { ScrollViewContainer, ViewContainer, ScreenHeader } from './components';
import { ScreenProps } from './screenType';

export function Screen(props: ScreenProps) {
	const { children, scrollable = false, style, title, LeftComponent, RightComponent, ...boxProps } = props;

	const { top, bottom } = useAppSafeArea();
	const { colors } = useAppTheme();

	const Container = scrollable ? ScrollViewContainer : ViewContainer;

	return (
		<KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
			<Container backgroundColor={colors.background}>
				<Box paddingHorizontal="s24" style={[{ paddingTop: top, paddingBottom: bottom }, style]} {...boxProps}>
					<ScreenHeader title={title} LeftComponent={LeftComponent} RightComponent={RightComponent} />

					{children}
				</Box>
			</Container>
		</KeyboardAvoidingView>
	);
}
