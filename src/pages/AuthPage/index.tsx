import React from 'react';

import { Logo } from 'components/core';
import { Button } from 'components/interaction';
import { TextLine } from 'components/other';

import * as SPages from '../units';

import * as S from './units';

import GoogleSVG from './images/google-logo.svg';
import EmailSVG from './images/email.svg';

// TODO: Вынести текст в const
export const AuthPage = () => {
    return (
        <SPages.PageWrapper>
            <S.FormWrapper>
                <Logo />

                <S.InputStyled />
                <Button>Continue with phone</Button>

                <TextLine>or</TextLine>

                <Button colorSheme="secondary" icon={GoogleSVG} iconSize={{ w: 20, h: 21 }}>
                    Continue with Google
                </Button>

                <S.ButtonStyled colorSheme="secondary" icon={EmailSVG} iconSize={{ w: 20, h: 16 }}>
                    Continue with Email
                </S.ButtonStyled>
            </S.FormWrapper>

            <S.TermsBlock>
                By clicking “Continue with Email/Phone” above, you acknowledge that you have read
                and understood, and agree to Ziphy’s Terms & Conditions and Privacy Policy.
            </S.TermsBlock>
        </SPages.PageWrapper>
    );
};
