import React from 'react';
import { MainLogo, MenuButton, MenuButtonContainer, NavBarContainer, NavBarNav, NavLinkNew, Testlabel } from './NavBar.style';
import Logo  from '../../../assets/logo.svg';
import { Home24Regular, PeopleTeam24Regular, Settings24Regular
} from "@fluentui/react-icons";
import { useLocation } from 'react-router-dom';
import { NavBarState } from './NavBar.state';
import { observer } from '../../../utils/mobx-react';

export const NavBar = observer('NavBar', () => {
    const [state] = React.useState(() => new NavBarState());
    const location = useLocation();
    const isActive = (to: string) => location.pathname === to;

    const onClick = () => {
        state.onToggle();
    }

    return (
        <NavBarContainer
            isOpen={state.isOpen}
        >
            <MainLogo>
                <img src={Logo} alt="Main logo" />
                <h1>
                    CHATPORTER APP
                </h1>
                
                <MenuButtonContainer
                    isOpen={state.isOpen}
                >
                    <MenuButton 
                        id="menu_button"
                    >
                        <Testlabel 
                            id="menu_label"
                            onClick={state.onToggle}
                            isOpen={state.isOpen}
                        >
                            <span id="menu_text_bar"></span>
                        </Testlabel>
                    </MenuButton>
                </MenuButtonContainer>
            </MainLogo>

            <NavBarNav>
                <ul>
                    <li
                    >
                        <NavLinkNew
                            to="/" 
                            isActive={isActive('/')}
                            onClick={onClick}
                        >
                            <Home24Regular />
                            <span>
                                Dashboard         
                            </span>
                        </NavLinkNew>
                    </li>
                    <li
                    >
                        <NavLinkNew 
                            to="/accounts-list" 
                            isActive={isActive('/accounts-list')}
                            onClick={onClick}
                        >
                            <PeopleTeam24Regular />
                            <span>
                                Użytkownicy         
                            </span>
                        </NavLinkNew>
                    </li>

                    <li>
                        <NavLinkNew 
                            to="/settings" 
                            isActive={isActive('/settings')}
                            onClick={onClick}
                        >
                            <Settings24Regular />
                            <span>           
                                Ustawienia
                            </span>
                        </NavLinkNew>
                    </li>

                    <li>
                        <NavLinkNew 
                            to="/login" 
                            isActive={isActive('/login')}
                            onClick={onClick}
                        >
                            <Settings24Regular />
                            <span>
                                Logowanie
                            </span>
                        </NavLinkNew>
                    </li>
                </ul>
            </NavBarNav>
        </NavBarContainer>
    )
});
