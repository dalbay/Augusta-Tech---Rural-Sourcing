
import { RouterModule, Routes } from '@angular/router';


import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { PlainLayoutComponent } from './layout/plain-layout/plain-layout.component';

import { SkillComponent } from './skill/skill.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { EmployeeComponent } from './employee/employee.component';

const appRoutes: Routes = [
    //Admin Routes:
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'skills', component: SkillComponent },
            { path: 'category', component: CategoryComponent },
            {path: 'employees', component: EmployeeComponent}
        ]
    },
    //No Layout Routes:
    //{ path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'user', component: UserComponent},
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);

