import styled from '@emotion/styled';

export const LoginContainer = styled('div')`
    width: 500px;
    padding: 30px 30px 100px 30px;

    background-color: #071d53;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    box-shadow: 0px 0px 12px -2px rgba(66, 68, 90, 1);
    @media(max-width: 769px) {
        width: calc(100% - 30px);
        padding: 20px 20px 50px 20px;
        top: 15px;
        transform: translate(-50%, 0);
    }
`;

export const LoginContainerHeader = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
        width: 120px;
        height: 120px;
        @media(max-width: 769px) {
            width: 80px;
            height: 80px;
        }
    }

    h1 {
        font-size: 20px;
        margin-left: 15px;
        color: #fff;
    }
`;

export const LoginFormContainer = styled('div')`
    margin-top: 30px;

    label {
        color: #fff;
    }

    form {
        margin-top: 50px;
    }

    button {
        margin-top: 20px;
    }
`;

export const LoginInputBox = styled('div')`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

export const ButtonWrapper = styled('div')`
    display: flex;
    justify-content: end;
`;