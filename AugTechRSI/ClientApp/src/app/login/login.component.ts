import { Component } from '@angular/core';

import { LoginService } from "./login.service";
import { from } from 'rxjs';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    constructor(public authService: LoginService) { }

    //public onLoginClick() {
    //    this.router.navigate(['/', 'skills']);
    //}
    showError: boolean = false;

    login() {
        this.showError = false;
        this.authService.login().subscribe(result => {
            this.showError = !result;
        });
    }
}



