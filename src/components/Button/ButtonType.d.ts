import { TouchableOpacityBoxProps } from '../Box';

export type ButtonProps = {
    title: string;
    loading?: boolean;
} & TouchableOpacityBoxProps;
