import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { LoginService } from "./login.service";
import { LoginComponent } from "./login.component";
import { LoginGuard } from "./login.guard";

@NgModule({
    imports: [RouterModule, FormsModule,  CommonModule],
    declarations: [LoginComponent],
    providers: [LoginService, LoginGuard],
    exports: [LoginComponent]
})
export class LoginModule { }