import React from 'react';
import { observer } from '../../../utils/mobx-react';
import { PageContainer, PageContainerTitle } from '../AccountsList/AccountsList.style';
import { FontSizes } from '@fluentui/theme';

export const DashboardPage = observer('DashboardPage', () => {
    return (
        <PageContainer>
            <PageContainerTitle
                style={{ fontSize: FontSizes.size18 }}
            >
                Dashboard
            </PageContainerTitle>
        </PageContainer>
    );
});
