import React from 'react';
import { GlobalWrapper } from './config/GlobalWrapper';
import { Ui } from './ui/ui';

export const App = (): JSX.Element => {
    return (
        <>
            <GlobalWrapper />
            <Ui />
        </>
    );
};
