import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { ButtonProps } from './ButtonType';

export function Button(props: ButtonProps){
    const { title } = props;

    return (
        <TouchableOpacity style={{ paddingHorizontal: 20, paddingVertical: 14, backgroundColor: '#074C4E', alignItems: 'center', borderRadius: 16 }}>
            <Text style={{ color: '#fff' }}>{title}</Text>
        </TouchableOpacity>
    )
}