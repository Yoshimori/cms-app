import { makeAutoObservable } from 'mobx';
import { AppStore } from './appStore';
import { Router } from './routerState';

export class AppState {
    public readonly router: Router;
    public readonly appStore: AppStore;

    public constructor (router: Router) {
        this.router = router;
        this.appStore = new AppStore();
        makeAutoObservable(this);
    }
}
