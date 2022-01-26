import React from 'react';
// import { TextInput } from 'react-native';

// import { S } from './units';

import * as S from './units';

export const Input = ({ ...props }) => {
    // return <TextInput style={S.input} />;

    return <S.Input {...props} />;
};
