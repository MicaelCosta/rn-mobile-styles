/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Box } from '../../../Box';
import { Button } from '../../../Button';
import { Modal } from '../../../Modal';
import { Text } from '../../../Text';

import { DateIOSProps } from './dateIOSType';

export function DateIOS(props: DateIOSProps) {
	const { label, dateIOS, onHideDatePicker, onDateIOS, onNewDate, maxDate, minDate } = props;

	return (
		<Modal swipeDirection={['down']} style={{ justifyContent: 'flex-end' }} onClose={onHideDatePicker}>
			<Box
				borderTopLeftRadius="s12"
				borderTopRightRadius="s12"
				paddingHorizontal="s12"
				paddingVertical="s8"
				height={'40%'}
			>
				<Box flexDirection="row" justifyContent="space-between" alignItems="center">
					<Text preset="paragraphMedium">{label}</Text>

					<Pressable onPress={onHideDatePicker}>
						<Text preset="paragraphMedium">X</Text>
					</Pressable>
				</Box>

				<Box flex={1} alignItems="center">
					<DateTimePicker
						mode="date"
						display="spinner"
						locale="pt-BR"
						themeVariant="light"
						value={dateIOS || new Date()}
						onChange={(_: any, date: any) => onDateIOS(date)}
						maximumDate={maxDate}
						minimumDate={minDate}
					/>

					<Button title="Selecionar" onPress={() => onNewDate(dateIOS || new Date())} />
				</Box>
			</Box>
		</Modal>
	);
}
