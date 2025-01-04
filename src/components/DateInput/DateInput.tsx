import React from 'react';
import { Platform, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Box, BoxProps } from '../Box';
import { Text } from '../Text';

import { useDateInput } from './useDateInput';
import { DateIOS } from './components';

import { DateInputProps } from './dateInputType';

export function DateInput(props: DateInputProps) {
	const { label, value, onChange, errorMessage, disabled, boxProps, maxDate, minDate } = props;

	const {
		formatedDate,
		showDatePicker,
		dateIOS,
		onHideDatePicker,
		onShowDatePicker,
		onNewDate,
		onDateIOS,
		onCleanDate,
	} = useDateInput({
		value,
		onChange,
	});

	const $textInputContainer: BoxProps = {
		flexDirection: 'row',
		borderWidth: errorMessage ? 2 : 1,
		borderColor: errorMessage ? 'error' : 'gray4',
		borderRadius: 's12',
		padding: 's16',
	};

	return (
		<Box {...boxProps}>
			<Pressable onPress={onShowDatePicker} disabled={disabled}>
				<Text mb="s4" preset="paragraphMedium">
					{label}
				</Text>

				<Box {...$textInputContainer}>
					<Box flex={1}>
						<Text preset="paragraphMedium">{formatedDate}</Text>
					</Box>

					{!!formatedDate && !disabled && (
						<Pressable onPress={onCleanDate}>
							<Box>
								<Text preset="paragraphMedium">X</Text>
							</Box>
						</Pressable>
					)}
				</Box>

				{showDatePicker && Platform.OS === 'ios' && (
					<DateIOS
						label={label}
						dateIOS={dateIOS}
						onDateIOS={onDateIOS}
						onNewDate={onNewDate}
						onHideDatePicker={onHideDatePicker}
						maxDate={maxDate}
						minDate={minDate}
					/>
				)}

				{showDatePicker && Platform.OS !== 'ios' && (
					<DateTimePicker
						mode="date"
						display="calendar"
						value={value || new Date()}
						onChange={(_: any, date: any) => onNewDate(date)}
						maximumDate={maxDate}
						minimumDate={minDate}
					/>
				)}

				{errorMessage && (
					<Text preset="paragraphSmall" bold color="error">
						{errorMessage}
					</Text>
				)}
			</Pressable>
		</Box>
	);
}
