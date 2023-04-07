import { makeAutoObservable } from 'mobx';
import { AppStore } from './appStore';

export class AppState {
    public readonly appStore: AppStore;

    public constructor () {
        this.appStore = new AppStore();
        makeAutoObservable(this);
    }
}
