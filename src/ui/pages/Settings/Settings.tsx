import React from 'react';
import { observer } from '../../../utils/mobx-react';
import { PageContainer, PageContainerTitle } from '../AccountsList/AccountsList.style';

export const SettingsPage = observer('SettingsPage',() => {
    return (
        <PageContainer>
            <PageContainerTitle>
                Settings
            </PageContainerTitle>
        </PageContainer>
    );
});
