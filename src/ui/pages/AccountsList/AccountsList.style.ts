import styled from '@emotion/styled';

export const PageContainer = styled('div')`
    padding: 16px 32px;
    width: 100%;
    @media(max-width: 769px) {
        padding: 15px;
    }
`;

export const PageContainerTitle = styled('h1')`
    font-weight: bold;
    margin: 0;
    color: #242424;
`;

export const PageContentWrapper = styled('div')`
    margin-top: 20px;
    @media(max-width: 769px) {
        margin-top: 15px;
        overflow-x: auto;
    }

    > div:first-of-type {
        @media(max-width: 769px) {
            overflow-x: auto;
            width: 1000px;
        }
    }
`;