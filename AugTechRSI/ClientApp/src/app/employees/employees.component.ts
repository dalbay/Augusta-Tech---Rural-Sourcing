import { Component, Inject } from "@angular/core";
import { LocalDataSource } from 'ng2-smart-table';
import { from } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})

export class EmployeesComponent {

    //add a property to the component to use ng2-smart-table
    source: LocalDataSource;
    public employees: AllEmployees[] = [];

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/Employees').subscribe(result => {
            this.employees = result as AllEmployees[];
            this.source = new LocalDataSource(this.employees);

            console.log(this.employees);
            //console.log(this.skills);
            //for (var i = 0; i < this.skills.length; i++) {
            //    this.categories.push(this.skills[i].typeName);
            //}
            //console.log(this.categories);
            //this.distCategories = this.categories.filter((n, i) => this.categories.indexOf(n) === i);

        }, error => console.error(error));
    };


    //Setting for the table:
    settings = {
        columns: {
            userID: { title: 'Employee ID' },
            employeeName: { title: 'EmployeeName'},
            position: { title: 'Level' },
            managerName: { title: 'Supervisor' },
            departmentName: { title: 'Department' },
            locationName: { title: 'Location' },
            sow: { title: 'SOW'}
        },
        actions: { add: false, delete: false, },
    };
}


//create Interface for the data retreived from sp
interface AllEmployees {
        UserID: number;
        EmployeeName: string;
        Position: string;
        ManagerName: string;
        DepartmentName: string;
        LocationName: string;
        SOW: string;
}

