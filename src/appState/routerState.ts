import { makeAutoObservable, autorun } from 'mobx';
import { assertNever } from '../utils/assertNever';

export type PageType = {
        readonly type: 'login';
    } | {
        readonly type: 'accounts-list';
    };

interface RouterBrowserPlugin {
    setUrl: (url: string) => void;
    startAutorun: (callback: (url: string) => void) => void;
}

export class Router {
    public view: PageType;

    private constructor(view: PageType) { //startingUrl: string) {
        this.view = view;
        makeAutoObservable(this);
    }

    public static create(startingUrl: string): [RouterBrowserPlugin, Router] {
        const router = Router.fromUrlString(startingUrl);
        let update: boolean = false;

        const plugin = {
            setUrl: (url: string): void => {
                const newState = Router.fromUrlString(url);

                if (newState.toUrlString() !== router.toUrlString()) {
                    update = true;
                    router.setView(newState.view);
                    update = false;
                }
            },

            startAutorun: (callback: (url: string) => void): void => {
                autorun(() => {
                    const url = router.toUrlString();

                    if (update === false) {
                        callback(url);
                    }
                });
            }
        };

        return [plugin, router];
    }

    private setView = (view: PageType): void => {
        this.view = view;
    }

    public redirectToLogin = (): void => {
        this.view = {
            type: 'login'
        };
    };

    public toUrlString(): string {
        const page = this.view;

        if (page.type === 'login') {
            return '/login';
        }
    
        if (page.type === 'accounts-list') {
            return '/accounts-list';
        }
    
        return assertNever('exportPageStateToString', page);
    }

    public static fromUrlString(url: string): Router {
        if (url.startsWith('/') === false) {
            return new Router({
                type: 'accounts-list',
            });
        }
    
        //    /fff/eee ---> ["fff", "eee"]
        const chunks: Array<string> = url.slice(1).split('/');
    
        if (chunks[0] === 'login') {
            return new Router({
                type: 'login'
            });
        }
    
        if (chunks[0] === 'accounts-list') {
            return new Router({
                type: 'accounts-list'
            });
        }
    
        return new Router({
            type: 'accounts-list',
        });
    }
}
