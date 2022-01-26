// TODO: сравнить

import { StyleSheet } from 'react-native';

export const S = StyleSheet.create({
    input: {
        borderColor: '#E6E6E7',
        borderWidth: 1,
        borderRadius: 16,
        padding: 10,
        width: '100%',
        height: '50px',
    },
});

import styled from '@emotion/native';

export const Input = styled.TextInput`
    width: 100%;
    height: 50px;

    border: 1px solid #e6e6e7;
    border-radius: 16px;

    padding-left: 15px;
`;
