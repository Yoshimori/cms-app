import { NavBarContainer, NavBarNav, NavLinkNew, Testlabel } from './NavBar.style';
import { Home24Regular, PeopleTeam24Regular, Settings24Regular
} from "@fluentui/react-icons";
import { useLocation } from 'react-router-dom';
import { observer } from '../../../utils/mobx-react';
import { useAppStateContext } from '../../../appState/context';

export const NavBar = observer('NavBar', () => {
    const location = useLocation();
    const isActive = (to: string) => location.pathname === to;
    
    const appState = useAppStateContext();
    const { navBarState } = appState;

    const onClick = () => {
        navBarState.onToggle();
    }

    return (
        <NavBarContainer
            isOpen={navBarState.isOpen}
        >

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
                </ul>
            </NavBarNav>
        </NavBarContainer>
    )
});
