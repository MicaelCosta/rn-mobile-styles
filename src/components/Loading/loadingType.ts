import { ActivityIndicatorProps } from 'react-native';
import { ThemeColor } from '../ThemeProvider';

export interface LoadingProps extends Omit<ActivityIndicatorProps, 'color'> {
	color?: ThemeColor;
}
