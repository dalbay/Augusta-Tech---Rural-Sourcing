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
//import { CounterComponent } from './counter/counter.component';
//import { FetchDataComponent } from './fetch-data/fetch-data.component';
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
        EmployeesComponent
        //FetchDataComponent,
        //CounterComponent
  ],
  imports: [
      BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
      Ng2SmartTableModule,
      HttpClientModule,
      FormsModule,
      routing
      ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}
