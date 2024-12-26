import React from 'react';
import { ScrollView, View } from 'react-native';

import { ScreenContainerProps } from './screenContainerType';

export function ScrollViewContainer(props: ScreenContainerProps) {
	const { children, backgroundColor } = props;

	return (
		<ScrollView keyboardShouldPersistTaps="handled" style={{ backgroundColor, flex: 1 }}>
			{children}
		</ScrollView>
	);
}

export function ViewContainer(props: ScreenContainerProps) {
	const { children, backgroundColor } = props;

	return <View style={{ backgroundColor, flex: 1 }}>{children}</View>;
}
