import { observer } from '../../../utils/mobx-react';
import { PageContainer, PageContainerTitle, PageContentWrapper } from './AccountsList.style';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { Default as Example } from './ListV2';
import { FontSizes } from '@fluentui/theme';

export const AccountsListPage = observer('AccountsListPage',() => {
    return (
        <PageContainer>
            <PageContainerTitle
                style={{ fontSize: FontSizes.size18 }}
            >
                Użytkownicy
            </PageContainerTitle>

                <PageContentWrapper>
                    <FluentProvider theme={webLightTheme}>
                        <Example />
                    </FluentProvider>
                </PageContentWrapper>
        </PageContainer>
    );
});
