import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';


@Component({
  selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {

    constructor(private router: Router) { }

    public onLoginClick() {
        this.router.navigate(['/', 'skills']);
    }
}
