import React, { useState } from 'react';
import { observer } from '../../../utils/mobx-react';
import { LoginFormState } from './LoginForm.state';
import { ButtonWrapper, LoginFormContainer, LoginInputBox } from './LoginPage.style';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { TextField } from '@fluentui/react/lib/TextField';
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";



export const LoginForm = observer('LoginForm', () => {
    const [state] = React.useState(() => new LoginFormState());
    let navigate = useNavigate();

    const loginForm = useFormik({
        initialValues: {
          login: '',
          password: '',
        },
        onSubmit: values => {
            const { login, password } = values;
            if ( login === 'admin' && password === 'admin') {
                navigate("/");
            }
        },
    });

    return (
        <LoginFormContainer>
            <form onSubmit={loginForm.handleSubmit}>
                <LoginInputBox>
                    <TextField 
                        label="Login" 
                        id="login"
                        name="login"
                        type="text"
                        onChange={loginForm.handleChange}
                        value={loginForm.values.login}
                    />
                </LoginInputBox>
                <LoginInputBox>
                    <TextField
                        label="Password"
                        type="password"
                        id="password"
                        onChange={loginForm.handleChange}
                        value={loginForm.values.password}
                    />
                </LoginInputBox>

                <ButtonWrapper>
                    <PrimaryButton text="Zaloguj się" type="submit"/>
                </ButtonWrapper>
            </form>
        </LoginFormContainer>
    );
});
