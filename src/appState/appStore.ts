import { makeAutoObservable } from 'mobx';

export class AppStore {
    public test: boolean = true; // add something if necessary
    public constructor () {
        makeAutoObservable(this);
    }
}
