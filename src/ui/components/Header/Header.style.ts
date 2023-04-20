import styled from '@emotion/styled';
import { SearchBox } from '@fluentui/react';

export const HeaderContainer = styled('div')`
    height: 48px;
    max-height: 48px;
    width: 100%;
    background-color: #444791;
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* padding: 0 32px; */
    margin-right: 6px;
    /* flex: 1 0 auto; */
    @media(max-width: 769px) {
        padding: 0 15px;
        justify-content: flex-end;
    }
`;

export const HeaderSearch = styled('div')`
    width: 100%;
`;

export const HeaderUserContainer = styled('div')`
    width: 51rem;
    display: flex;
    justify-content: flex-end;
    @media(max-width: 1038px) {
        width: 34rem;
    }
    @media(max-width: 768px) {
        width: auto;
    }
`;

export const HeaderUser = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 48px;
    width: 48px;
    margin-right: 6px;
    @media(max-width: 768px) {
        margin: 0;
        width: 48px;
    }
    &:hover {
        background-color: rgba(0,0,0,.12);
    }

    >div {
        width: 32px;
    }
`;

export const SearchInput = styled(SearchBox)`
    margin-left: 42.8rem;
    @media(max-width: 1038px) {
        margin-left: 8.8rem;
    }
    @media(max-width: 768px) {
        margin-left: 46px;
    }

    input {
        background: rgba(255,255,255,.8);
        border-radius: 0.4rem;
    }
`