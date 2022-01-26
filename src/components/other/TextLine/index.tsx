import React, { FC } from 'react';

import { ITextLine } from './types';
import * as S from './units';

export const TextLine: FC<ITextLine> = ({ children }) => {
    return (
        <S.Wrapper>
            <S.Line />
            <S.Text>{children}</S.Text>
            <S.Line />
        </S.Wrapper>
    );
};
