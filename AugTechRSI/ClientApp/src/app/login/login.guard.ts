import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot }
    from "@angular/router";
import { LoginService } from "./login.service";

@Injectable()
export class LoginGuard  {

    constructor(private router: Router,
        private authService: LoginService) { }

    canActivateChild(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (this.authService.authenticated) {
            return true;
        } else {
            this.authService.callbackUrl = route.url.toString();
            this.router.navigateByUrl("/home");
            return false;
        }
    }
}