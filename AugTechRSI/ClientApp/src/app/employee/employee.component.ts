import { Component, Inject } from "@angular/core";
import { LocalDataSource } from 'ng2-smart-table';
import { from } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})

export class EmployeeComponent {
    //add a source property for the table
    source: LocalDataSource;

    //Properties to hold the data for the dropdowns
    public employeeInfos: EmployeeInfo[];
    public supervisors: Supervisor[];
    public departments: Department[];
    public locations: Location[];
    public sows: SOW[];
    public skills: Skill[];

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/EmployeeInfo').subscribe(result => {
            this.employeeInfos = result as EmployeeInfo[];
            this.supervisors = this.employeeInfos[0].supervisors;
            this.departments = this.employeeInfos[0].departments;
            this.locations = this.employeeInfos[0].locations;
            this.sows = this.employeeInfos[0].sows;
            console.log(this.employeeInfos[0]);
            //fill source for table
            this.source = new LocalDataSource(this.employeeInfos[0].skills)
        }, error => console.error(error));
    };

    //Setting for the table:
    settings = {
        selectMode: 'multi',
        columns: {
            skillName: { title: 'Skill Name', editable: false },
            categoryName: { title: 'Category', editable: false },
        },
        actions: { add: false, delete: false, edit: false }

    };
    // UserRowSelected Event handler
    //onRowSelect(event) {
    //    this.selectedRows = event.selected;
    //}

}
interface Skill {
    skillId: number;
    skillName: string;
    categoryName: string;
}
interface SOW {
    sowId: number;
    clientName: string;
}
interface Location {
    locationId: number;
    locationName: string;
}
interface Department {
    departmentId: number;
    departmentName: string;
}
interface Supervisor {
    supFirstName: string;
    supLastName: string;
}
interface EmployeeInfo {
    supervisors: [];
    departments: [];
    locations: [];
    sows: [];
    skills: [];
}


