import { makeAutoObservable } from 'mobx';
import { NavBarState } from '../ui/components/NavBar/NavBar.state';
import { AppStore } from './appStore';

export class AppState {
    public readonly appStore: AppStore;
    public readonly navBarState: NavBarState;

    public constructor () {
        this.appStore = new AppStore();
        this.navBarState = new NavBarState();

        makeAutoObservable(this);
    }
}
