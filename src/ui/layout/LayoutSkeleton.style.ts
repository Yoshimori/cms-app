import styled from '@emotion/styled';

export const UiContainer = styled('div')`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const MainContentWrapper = styled('div')`
    display: flex;
    width: 100%;
    height: 100%;
    background: #f5f5f5;
`;

interface NavBarTypes  {
    isOpen: boolean;
}

export const OutletContainer = styled('div')<NavBarTypes>`
    position: relative;
    width: 100%;
    @media(max-width: 769px) {
        transition: .2s ease-in-out;
        left: ${(props):string => props.isOpen === true ? '68px' : "0" };
    }
`;