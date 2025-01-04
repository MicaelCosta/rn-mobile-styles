import { useState, useEffect } from 'react';

import { formatDate } from '../../utils';

import { UseDateInputProps } from './dateInputType';

export function useDateInput(props: UseDateInputProps) {
	const { value, onChange } = props;
	const [formatedDate, setFormatedDate] = useState('');
	const [showDatePicker, setShowDatePicker] = useState(false);
	const [dateIOS, setDateIOS] = useState<Date | undefined | null>();

	useEffect(() => {
		setFormatedDate(formatDate(value));
		setDateIOS(value);
	}, [value]);

	function onShowDatePicker() {
		setShowDatePicker(true);
	}

	function onHideDatePicker() {
		setShowDatePicker(false);
	}

	function onNewDate(date?: Date | undefined) {
		onHideDatePicker();

		if (date) {
			onChange(date);
		} else {
			onChange(value);
		}
	}

	function onDateIOS(date?: Date | undefined | null) {
		setDateIOS(date);
	}

	function onCleanDate() {
		onChange(null);
	}

	return {
		formatedDate,
		showDatePicker,
		dateIOS,
		onHideDatePicker,
		onShowDatePicker,
		onNewDate,
		onDateIOS,
		onCleanDate,
	};
}
