import React from 'react';
import { useAppStateContext } from '../appState/context';
import { assertNever } from '../utils/assertNever';
import { observer } from '../utils/mobx-react';
import { LayoutSkeleton } from './layout/LayoutSkeleton';
import { AccountsListPage } from './pages/AccountsList/AccountsList';
import { LoginPage } from './pages/LoginPage/LoginPage';

const RenderContent = observer('RenderContent',() => {
    const appState = useAppStateContext();
    const view = appState.router.view;

    if (view.type === 'login') {
        return (
            <LayoutSkeleton >
                <LoginPage/>
            </LayoutSkeleton>
        );
    }

    if (view.type === 'accounts-list') {
        return (
            <LayoutSkeleton >
                <AccountsListPage/>
            </LayoutSkeleton>
        );
    }

    return assertNever('RenderContent view', view);
});

export const Ui = observer('Ui',() => {
    return <RenderContent />;
});
