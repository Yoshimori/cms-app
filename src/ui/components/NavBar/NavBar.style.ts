import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

interface NavBarTypes  {
    isOpen: boolean;
}

export const NavBarContainer = styled('div')<NavBarTypes>`
    display: flex;
    flex-direction: column;
    height: 100%;

    background: #ebebeb;
    width: 100%;
    max-width: 68px;
    color: #fff;
    flex: 1 0 auto;
    position: relative;
    @media(max-width: 769px) {
        transition: .2s ease-in-out;
        position: fixed;
        z-index: 9;
        left: ${(props):string => props.isOpen === true ? '0px' : "-68px" };
    }

    &:before {
        background: linear-gradient(to right,transparent,#aaa);
        content: "";
        height: 100%;
        opacity: .2;
        pointer-events: none;
        position: absolute;
        right: 0;
        width: 0.8rem;
        z-index: 2;
    }
`;

export const NavBarNav = styled('nav')`
    /* padding: 10px 0; */
    height: 100%;
    @media(max-width: 769px) {
        height: auto;
    }
    ul {
        height: 100%;
        margin: 0;
        /* padding: 10px; */
        display: flex;
        flex-direction: column;
        li {
            list-style-type: none;
            &:last-of-type {
                margin-top: auto;
            }
            a {
                color: #616161;
                text-decoration: none;
                display: flex;
                align-items: center;
            }

            span {
                display: block;
            }
        }
    }
`;

interface PropsTypes  {
    isActive: boolean;
}

export const NavLinkNew = styled(NavLink)<PropsTypes>`
    height: 56px;
    background: transparent;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
        color: ${(props):string => props.isActive === true ? '#5b5fc7' : "#616161" };
        font-size: 10px;
    }
    svg {
        color: ${(props):string => props.isActive === true ? '#5b5fc7' : "#616161" };
    }

    &:before {
        content: ${(props):string => props.isActive === true ? '""' : "none" };
        font-size: 15px;
        border-left: solid 0.2rem #5b5fc7;
        border-radius: 0.4rem;
        background: #5b5fc7;
        height: 4.8rem;
        left: 0.2rem;
        position: absolute;
        top: 0.4rem;
    }

    &:hover {
        background: #f5f5f5;

        span, svg {
            color: #5b5fc7;
        }
    }
`;



export const MenuButtonContainer = styled('div')<NavBarTypes>`
    padding: 11px 11px 1px 15px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;

    display: none;
    position: fixed;
    top: 4px;
    left: 0;
    transition: .2s ease;

    @media(max-width: 769px) {
        display: block;
        top: 4px;
        left: 3px;
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