import React from 'react';
import { MainContentWrapper, UiContainer } from './LayoutSkeleton.style';
import { Footer } from '../components/Footer/Footer';
import { observer } from '../../utils/mobx-react';

interface PropsType {
    children: React.ReactChild,
}

export const LayoutSkeleton = observer('LayoutSkeleton ',(props: PropsType) => {
    const { children } = props;

    return (
        <UiContainer>
            <MainContentWrapper>
                { children }
            </MainContentWrapper>
            <Footer/>
        </UiContainer>
    );
});
