import React from 'react';
import ReactDOM from 'react-dom';
import { AppState } from './appState/appState';
import { Provider } from './appState/context';
import { RouterProvider } from 'react-router-dom';
import { GlobalWrapper } from './config/GlobalWrapper';
import { Global } from '@emotion/react';
import { emotionReset } from './config/reset.style';
import { router } from './routes/routes';

const appState = new AppState();

const vdom = (
    <React.StrictMode>
        <Provider value={appState}>
            <GlobalWrapper />
            <Global styles={emotionReset}/> 
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);

ReactDOM.render(vdom, document.getElementById('root'));
