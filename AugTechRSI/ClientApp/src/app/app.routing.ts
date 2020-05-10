
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { SkillComponent } from './skill/skill.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';

const appRoutes: Routes = [
    //Admin Routes:
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'skills', component: SkillComponent },
            { path: 'category', component: CategoryComponent },
            { path: 'employee', component: EmployeeComponent },
            { path: 'employees', component: EmployeesComponent}
        ]
    },
    //No Layout Routes:
    { path: 'login', component: LoginComponent },
    { path: 'user', component: UserComponent},
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);

