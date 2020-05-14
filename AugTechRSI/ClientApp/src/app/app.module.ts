import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { PlainLayoutComponent } from './layout/plain-layout/plain-layout.component';
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';
import { SkillComponent } from './skill/skill.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { UserComponent } from './user/user.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';


import { routing } from './app.routing';

import { HomeComponent } from './home/home.component';

//import { LoginModule } from './login/login.module'
//import { RouterModule, Routes } from '@angular/router';
//import { CommonModule } from '@angular/common';
//import { LoginGuard } from './login/login.guard';


import { from } from 'rxjs';


@NgModule({
  declarations: [
        AppComponent,
        AdminLayoutComponent,
        PlainLayoutComponent,
        NavMenuComponent,
        SkillComponent,
        LoginComponent,
        CategoryComponent,
        HomeComponent,
        UserComponent,
        EmployeeComponent,
        EmployeesComponent,
  ],
  imports: [
      BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
      Ng2SmartTableModule,
      HttpClientModule,
      FormsModule,
      routing
     // RouterModule, CommonModule, LoginModule,


      ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}
