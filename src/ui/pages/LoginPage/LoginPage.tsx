import React from 'react';
import { observer } from '../../../utils/mobx-react';
import { LoginContainer, LoginContainerHeader } from './LoginPage.style';
import Logo  from '../../../assets/logo.svg';
import { LoginForm } from './LoginForm';

export const LoginPage = observer('LoginPage',() => {
    return (
        <LoginContainer>
            <LoginContainerHeader>
                <img src={Logo} alt="Main logo" />
                <h1>
                    CHATPORTER APP
                </h1>
            </LoginContainerHeader>

            <LoginForm />
        </LoginContainer>
    );
});
