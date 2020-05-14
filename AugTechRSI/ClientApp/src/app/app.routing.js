"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const admin_layout_component_1 = require("./layout/admin-layout/admin-layout.component");
const skill_component_1 = require("./skill/skill.component");
const login_component_1 = require("./login/login.component");
const category_component_1 = require("./category/category.component");
const home_component_1 = require("./home/home.component");
const user_component_1 = require("./user/user.component");
const employee_component_1 = require("./employee/employee.component");
const employees_component_1 = require("./employees/employees.component");
//import { LoginModule } from './login/login.module';
//import { LoginGuard } from './login/login.guard';
const appRoutes = [
    //Admin Routes:
    {
        path: '',
        component: admin_layout_component_1.AdminLayoutComponent,
        children: [
            { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' },
            { path: 'skills', component: skill_component_1.SkillComponent },
            { path: 'category', component: category_component_1.CategoryComponent },
            { path: 'employee', component: employee_component_1.EmployeeComponent },
            { path: 'employees', component: employees_component_1.EmployeesComponent }
        ]
    },
    //No Layout Routes:
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map