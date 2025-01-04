import { ModalProps as RMModalProps } from 'react-native-modal';

export type ModalProps = Omit<
	RMModalProps,
	'onBackButtonPress' | 'onBackdropPress' | 'onSwipeComplete' | 'isVisible'
> & {
	onClose: () => void;
};
