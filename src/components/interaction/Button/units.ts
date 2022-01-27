import styled from '@emotion/native';

import { TColorSheme } from './types';

export const Button = styled.TouchableOpacity<{ colorSheme?: TColorSheme; width?: string }>`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    background-color: ${({ colorSheme = 'primary' }) =>
        colorSheme === 'primary' ? '#007aff' : '#f6f6f6'};
    border-radius: 16px;

    width: ${({ width }) => width};
    height: 50px;

    text-align: center;
    /* cursor: pointer; */
`;

export const Text = styled.Text<{ colorSheme?: TColorSheme }>`
    font-size: 16px;
    line-height: 20px;
    font-weight: bold;

    color: ${({ colorSheme = 'primary' }) => (colorSheme === 'primary' ? '#ffffff' : '#007aff')};
`;

export const Image = styled.Image<{ w?: number; h?: number }>`
    width: ${({ w }) => `${w}px`};
    height: ${({ h }) => `${h}px`};
    margin-right: 9px;
`;

// import { StyleSheet } from 'react-native';

// export const S = StyleSheet.create({
//     button: {
//         backgroundColor: '#007aff',
//         borderRadius: 16,

//         /* TODO: убрать фикс ширину */
//         width: 300,
//         height: 50,
//         // padding-top: 15px;

//         textAlign: 'center',
//         cursor: 'pointer',
//         overflow: 'hidden',
//     },

//     imageContainer: {
//         display: 'flex',
//         alignItems: 'center',
//         width: '100%',
//     },
// });
