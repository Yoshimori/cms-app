import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { AppState } from './appState/appState';
import { Provider } from './appState/context';
import { Router } from './appState/routerState';

const getCurrentUrl = (): string => window.location.pathname + window.location.search;
const startingUrl = getCurrentUrl();
const [routerPlugin, router] = Router.create(startingUrl);

window.addEventListener('popstate', () => {
    routerPlugin.setUrl(getCurrentUrl());
});

routerPlugin.startAutorun((url: string) => {
    window.history.pushState(null, '', url);
});

const appState = new AppState(router);

const vdom = (
    <React.StrictMode>
        <Provider value={appState}>
            <App />
        </Provider>
    </React.StrictMode>
);

ReactDOM.render(vdom, document.getElementById('root'));
