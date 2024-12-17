import { ButtonPreset, ButtonUI } from './ButtonType';

export const buttonPresets: Record<
	ButtonPreset,
	{
		default: ButtonUI;
		disabled: ButtonUI;
	}
> = {
	primary: {
		default: {
			container: {
				backgroundColor: 'primary',
			},
			content: 'primaryContrast',
		},
		disabled: {
			container: {
				backgroundColor: 'gray4',
			},
			content: 'gray2',
		},
	},
	outline: {
		default: {
			container: {
				backgroundColor: 'white',
				borderWidth: 1,
				borderColor: 'primary',
			},
			content: 'primary',
		},
		disabled: {
			container: {
				backgroundColor: 'white',
				borderWidth: 1,
				borderColor: 'gray4',
			},
			content: 'gray2',
		},
	},
};
