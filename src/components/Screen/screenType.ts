import { ReactElement, ReactNode } from 'react';

import { BoxProps } from '../Box';

export type ScreenProps = BoxProps & {
	children: ReactNode;
	scrollable?: boolean;
	title?: string;
	LeftComponent?: ReactElement;
	RightComponent?: ReactElement;
};
