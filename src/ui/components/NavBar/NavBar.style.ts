import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

interface NavBarTypes  {
    isOpen: boolean;
}

export const NavBarContainer = styled('div')<NavBarTypes>`
    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: #071d53;
    width: 100%;
    max-width: 260px;
    color: #fff;
    flex: 1 0 auto;
    @media(max-width: 769px) {
        transition: .2s ease;
        position: fixed;
        z-index: 9;
        left: ${(props):string => props.isOpen === true ? '0px' : "-260px" };
    }
`;

export const NavBarNav = styled('nav')`
    padding: 10px 0;
    height: 100%;
    ul {
        height: 100%;
        margin: 0;
        padding: 10px;
        display: flex;
        flex-direction: column;
        li {
            list-style-type: none;
            &:last-of-type {
                margin-top: auto;
            }
            a {
                color: #a9aaad;
                text-decoration: none;
                display: flex;
                align-items: center;
            }

            span {
                display: block;
                margin-left: 10px;
            }
        }
    }
`;

export const MainLogo = styled('div')`
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #063777;
    height: 71px;
    
    img {
        width: 50px;
        height: 50px;
    }

    h1 {
        font-size: 18px;
        margin-left: 15px;
        font-weight: bold;
    }
`;

interface PropsTypes  {
    isActive: boolean;
}

export const NavLinkNew = styled(NavLink)<PropsTypes>`
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: ${(props):string => props.isActive === true ? '#063777' : "transparent" };

    span {
        color: ${(props):string => props.isActive === true ? '#fff' : "#a9aaad" };
        font-size: 15px;
    }
    svg {
        color: ${(props):string => props.isActive === true ? '#fff' : "#a9aaad" };
    }
`;

export const MenuButtonContainer = styled('div')<NavBarTypes>`
    padding: 11px 11px 1px 9px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;

    background-color: #063777;
    display: none;
    position: fixed;
    top: 15px;
    left: 0;
    transition: .2s ease;

    @media(max-width: 769px) {
        display: block;
        top: 13px;
        left: ${(props):string => props.isOpen === true ? '259px' : "0px" };
    }
`;

export const MenuButton = styled('div')`
    width: 29px;
    overflow: hidden;
`;

export const Testlabel = styled('label')<NavBarTypes>`
    position: relative;
    display: block;
    height: 29px;
    cursor: pointer;

    &:before, &:after, #menu_text_bar {
        position: absolute;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: #fff;
    }

    &:before, &:after {
        content: '';
        transition: 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) left;
    }

    &:before {
        top: 0;
        left: ${(props):string => props.isOpen === true ? '-39px' : "0" };
    }

    &:after {
        top: 8px;
        left: ${(props):string => props.isOpen === true ? '39px' : "0" };
    }

    #menu_text_bar {
        top: 16px;

        &:before {
            content: 'MENU';
            position: absolute;
            top: 15px;
            right: 0;
            left: 0;
            color: #fff;
            font-size: 8px;
            font-weight: bold;
            font-family: 'Montserrat', Arial, Helvetica, sans-serif;
            text-align: center;
        }
    }
    
    #menu_text_bar:before
    {
        animation: ${(props):string => props.isOpen === true ? 'moveUpThenDown 0.8s ease 0.2s forwards, shakeWhileMovingUp 0.8s ease 0.2s forwards, shakeWhileMovingDown 0.2s ease 0.8s forwards' : 'none'};
    }

    @keyframes moveUpThenDown
    {
        0%{ top:0; }
        50%{ top:-17px;}
        100%{ top:-14px; }
    }

    @keyframes shakeWhileMovingUp
    {
        0%{ transform: rotateZ(0); }
        25%{ transform:rotateZ(-10deg); }
        50%{ transform:rotateZ(0deg); }
        75%{ transform:rotateZ(10deg); }
        100%{ transform:rotateZ(0); }
    }

    @keyframes shakeWhileMovingDown
    {
        0%{ transform:rotateZ(0); }
        80%{ transform:rotateZ(3deg); }
        90%{ transform:rotateZ(-3deg); }
        100%{ transform:rotateZ(0); }
    }
`