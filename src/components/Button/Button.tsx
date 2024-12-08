import React from 'react';
import { ActivityIndicator } from 'react-native';

import { ButtonProps } from './ButtonType';
import { TouchableOpacityBox } from '../Box';
import { Text } from '../Text';

export function Button(props: ButtonProps){
    const { title, loading, ...touchableOpacityBoxProps } = props;

    return (
        <TouchableOpacityBox
            backgroundColor="primary"
            paddingHorizontal="s20"
            height={50}
            alignItems="center"
            justifyContent="center"
            borderRadius="s16"
            {...touchableOpacityBoxProps}
        >
            {loading ? <ActivityIndicator /> : <Text bold color='primaryContrast'>{title}</Text> }
        </TouchableOpacityBox>
    );
}
