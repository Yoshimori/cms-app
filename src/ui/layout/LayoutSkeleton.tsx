import { MainContentWrapper, OutletContainer, UiContainer } from './LayoutSkeleton.style';
import { observer } from '../../utils/mobx-react';
import { NavBar } from '../components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { NavBarState } from '../components/NavBar/NavBar.state';
import React from 'react';
import { useAppStateContext } from '../../appState/context';

// TODO MOVE TO ANOTHER FOLDER
export const OutletWrapper = observer('OutletWrapper ',() => {
    const appState = useAppStateContext();
    const { navBarState } = appState;
    return (
        <OutletContainer 
            isOpen={navBarState.isOpen}
        >
            <Outlet />
        </OutletContainer>
    );
});


export const LayoutSkeleton = observer('LayoutSkeleton ',() => {
    const [state] = React.useState(() => new NavBarState());

    return (
        <UiContainer>
            <Header/>

            <MainContentWrapper>
                <NavBar/>

                <OutletWrapper/>
            </MainContentWrapper>
        </UiContainer>
    );
});
