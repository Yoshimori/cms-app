import styled from '@emotion/styled';

export const HeaderContainer = styled('div')`
    height: 71px;
    max-height: 71px;
    width: 100%;
    background-color: #d5e3f5;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 40px;
    flex: 1 0 auto;
    @media(max-width: 769px) {
        padding: 0 15px;
        justify-content: flex-end;
    }
`;

export const HeaderSearch = styled('div')`
    form {
        display: flex;
        button {
            margin-left: 15px;
        }
    }
`;

export const HeaderUser = styled('div')`
    display: flex;
`;
