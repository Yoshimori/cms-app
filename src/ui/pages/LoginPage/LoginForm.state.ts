import React from 'react';
import { makeAutoObservable } from 'mobx';

export class LoginFormState {
    public isLoading: boolean = false;

    public constructor () {
        makeAutoObservable(this);
    }

    public onSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();

        this.isLoading = true;
    };
}
