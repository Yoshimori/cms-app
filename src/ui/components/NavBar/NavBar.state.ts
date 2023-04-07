import React from 'react';
import { makeAutoObservable } from 'mobx';

export class NavBarState {
    public isOpen: boolean = false;

    public constructor () {
        makeAutoObservable(this);
    }

    public onToggle = ():void => {
        this.isOpen = !this.isOpen;
    };
}
