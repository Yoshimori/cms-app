import React from 'react';
import { observer } from '../../../utils/mobx-react';
import { PageContainer, PageContainerTitle } from '../AccountsList/AccountsList.style';

export const DashboardPage = observer('DashboardPage', () => {
    return (
        <PageContainer>
            <PageContainerTitle>
                Dashboard
            </PageContainerTitle>
        </PageContainer>
    );
});
