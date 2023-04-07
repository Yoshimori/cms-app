import { MainContentWrapper, UiContainer } from './LayoutSkeleton.style';
import { observer } from '../../utils/mobx-react';
import { NavBar } from '../components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';

export const LayoutSkeleton = observer('LayoutSkeleton ',() => {

    return (
        <UiContainer>
            <NavBar />

            <MainContentWrapper>
                <Header />
                
                <Outlet />
            </MainContentWrapper>
        </UiContainer>
    );
});
