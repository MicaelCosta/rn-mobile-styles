/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import RNModal from 'react-native-modal';

import { ModalProps } from './modalType';

export function Modal(props: ModalProps) {
	const { children, style, onClose, ...modalProps } = props;

	return (
		<RNModal
			isVisible
			onBackButtonPress={onClose}
			onBackdropPress={onClose}
			onSwipeComplete={onClose}
			style={[style, { margin: 0 }]}
			{...modalProps}
		>
			{children}
		</RNModal>
	);
}
