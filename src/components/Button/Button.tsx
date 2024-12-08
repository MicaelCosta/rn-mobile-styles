import React from 'react';
import { Text, ActivityIndicator } from 'react-native';

import { ButtonProps } from './ButtonType';
import { TouchableOpacityBox } from '../Box';

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
            {loading ? <ActivityIndicator /> : <Text>{title}</Text> }
        </TouchableOpacityBox>
    );
}
