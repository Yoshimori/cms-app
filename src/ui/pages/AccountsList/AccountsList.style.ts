import styled from '@emotion/styled';

export const PageContainer = styled('div')`
    padding: 24px 40px;
    @media(max-width: 769px) {
        padding: 15px;
    }
`;

export const PageContainerTitle = styled('h1')`
    font-size: 36px;
    font-weight: bold;
    margin: 0;
    @media(max-width: 769px) {
        font-size: 30px;
    }
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