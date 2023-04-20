import { createBrowserRouter } from 'react-router-dom';
import { LayoutSkeleton } from '../ui/layout/LayoutSkeleton';
import { AccountsListPage } from '../ui/pages/AccountsList/AccountsList';
import { DashboardPage } from '../ui/pages/Dashboard/DashboardPage';
import { LoginPage } from '../ui/pages/LoginPage/LoginPage';
import { SettingsPage } from '../ui/pages/Settings/Settings';

export const router = createBrowserRouter([
    { path: '/', 
        element: <LayoutSkeleton />, 
        children: [
            { path: '/', element: <DashboardPage />},
            { path: '/settings', element: <SettingsPage />},
            { path: '/accounts-list', element: <AccountsListPage />},

        ]},
    // {
    //     path: '/login',
    //     element: <LoginPage />
    // }
]);