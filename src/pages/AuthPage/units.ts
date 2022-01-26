import styled from '@emotion/native';

import { Button, Input } from 'components/interaction';

export const FormWrapper = styled.View`
    width: 375px;
    padding: 80px 15px 0px;
`;

export const InputStyled = styled(Input)`
    margin: 42px 0px 10px;
`;

export const ButtonStyled = styled(Button)`
    margin-top: 10px;
`;

export const TermsBlock = styled.Text`
    position: absolute;
    bottom: 30px;

    max-width: 607px;

    font-size: 14px;
    line-height: 20px;

    text-align: center;

    color: #8d8e93;
`;
