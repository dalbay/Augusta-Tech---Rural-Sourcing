import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    constructor(private router: Router) { }

    public onLoginClick() {
        this.router.navigate(['/', 'skills']);
    }

    ngOnInit() {}
}



