import { useFormik } from 'formik';
import { observer } from '../../../utils/mobx-react';
import { HeaderContainer, HeaderSearch, HeaderUser } from './Header.style';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { initializeIcons, SearchBox } from '@fluentui/react';

export const Header = observer('Header ',() => {
    initializeIcons();
    const searchForm = useFormik({
        initialValues: {
          search: '',
        },
        onSubmit: values => {
            const { search } = values;
            console.log(search)
        },
    });


    return (
        <HeaderContainer>
            <HeaderSearch>
                <form onSubmit={searchForm.handleSubmit}>
                    <SearchBox placeholder="Search" onSearch={newValue => console.log('value is ' + newValue)} />

                    <PrimaryButton text="Szukaj" type="submit"/>
                </form>
            </HeaderSearch>

            <HeaderUser>
                
            </HeaderUser>

        </HeaderContainer>
    );
});
