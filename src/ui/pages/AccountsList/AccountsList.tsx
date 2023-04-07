import { observer } from '../../../utils/mobx-react';
import { PageContainer, PageContainerTitle, PageContentWrapper } from './AccountsList.style';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { Default as Example } from './ListV2';

export const AccountsListPage = observer('AccountsListPage',() => {
    return (
        <PageContainer>
            <PageContainerTitle>
                Accounts List
            </PageContainerTitle>

                <PageContentWrapper>
                    <FluentProvider theme={webLightTheme}>
                        <Example />
                    </FluentProvider>
                </PageContentWrapper>
        </PageContainer>
    );
});
