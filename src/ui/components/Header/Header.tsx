import { observer } from '../../../utils/mobx-react';
import { HeaderContainer, HeaderSearch, HeaderUser, SearchInput, HeaderUserContainer } from './Header.style';
import { initializeIcons, Persona, PersonaPresence, PersonaSize } from '@fluentui/react';
import { MenuButton, MenuButtonContainer, Testlabel } from '../NavBar/NavBar.style';
import { useAppStateContext } from '../../../appState/context';

export const Header = observer('Header ',() => {
    const appState = useAppStateContext();
    const { navBarState } = appState;

    // TODO MOVE IT TO ANOTHER FILE, GLOBAL??
    initializeIcons();

    return (
        <HeaderContainer>
            <div>
                <MenuButtonContainer
                    isOpen={navBarState.isOpen}
                >
                    <MenuButton 
                        id="menu_button"
                    >
                        <Testlabel 
                            id="menu_label"
                            onClick={navBarState.onToggle}
                            isOpen={navBarState.isOpen}
                        >
                            <span id="menu_text_bar"></span>
                        </Testlabel>
                    </MenuButton>
                </MenuButtonContainer>
            </div>
            <HeaderSearch>
                <SearchInput 
                    placeholder="Wyszukiwanie" 
                    onSearch={newValue => console.log('value is ' + newValue)} 
                />
            </HeaderSearch>

            <HeaderUserContainer>
                <HeaderUser>
                    <Persona
                        size={PersonaSize.size32}
                        presence={PersonaPresence.online}
                        imageAlt="Jan Kowalski, status is online"
                    />
                </HeaderUser>
            </HeaderUserContainer>

        </HeaderContainer>
    );
});
