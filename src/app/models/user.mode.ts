import { AbstractControl, FormGroup } from "@angular/forms";

export interface IUser {
    name: string;
    email: string;
    password: string;
}

export interface IUserFormGroup extends FormGroup {
    value: IUser;
    controls: {
        name: AbstractControl;
        email: AbstractControl;
        password: AbstractControl;
    };
}