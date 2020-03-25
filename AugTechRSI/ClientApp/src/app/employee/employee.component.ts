import { Component, Inject } from "@angular/core";
import { LocalDataSource } from 'ng2-smart-table';
import { from } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { NgForm, NgModel } from '@angular/forms';
import { forEach } from "@angular/router/src/utils/collection";

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})

export class EmployeeComponent {
    //add a source property for the table
    source: LocalDataSource;
    // ad a property to store selected check-boxes
    selectedRows: any = [];

    //Properties to hold the data for the dropdowns
    public employeeInfos: EmployeeInfo[];
    public supervisors: Supervisor[];
    public departments: Department[];
    public locations: Location[];
    public sows: SOW[];
    public skills: Skill[];

    //Properties to hold data for Employee
    //work on the employee insert to db
    public FirstName: string;
    public LastName: string;
    public Position: string;
    public DepartmentId: number;
    public LocationId: number;


    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/EmployeeInfo').subscribe(result => {
            this.employeeInfos = result as EmployeeInfo[];
            this.supervisors = this.employeeInfos[0].supervisors;
            this.departments = this.employeeInfos[0].departments;
            this.locations = this.employeeInfos[0].locations;
            this.sows = this.employeeInfos[0].sows;
            //fill source for table
            this.source = new LocalDataSource(this.employeeInfos[0].skills)
        }, error => console.error(error));
    };


    saveEmployee(employeeForm: NgForm) {
        console.log(employeeForm.value);
    }

    /* ***ng2-smart-table*** ------------------------------------*/

    //Setting for ng2-smart-table:
    settings = {
        selectMode: 'multi',
        columns: {
            skillName: { title: 'Skill Name', editable: false },
            categoryName: { title: 'Category', editable: false },
        },
        actions: { add: false, delete: false, edit: false }

    };

    public static skillsList = [];

    // UserRowSelected Event handler for ng2-smart-table
    onRowSelect(event) {
        var selectedSkillsTextArea = (document.getElementById('skillsTextArea') as HTMLTextAreaElement);

        this.selectedRows = event.selected;
        if (event.isSelected) {
            EmployeeComponent.skillsList.push('SKILL: ' + event.data.skillName + '  ' + '\n');
        }
        else {
            EmployeeComponent.skillsList.splice(EmployeeComponent.skillsList.indexOf('SKILL: ' + event.data.skillName + '  ' + '\n'), 1);
        }
        console.log(EmployeeComponent.skillsList);

        selectedSkillsTextArea.value = EmployeeComponent.skillsList.toString();
    }

    /* ----------------------------------------------------*/
    /* ***List input values to labels***------------------ */
    getName() {
        var fname = (document.getElementById('inputFirstName') as HTMLInputElement).value;
        var lname = (document.getElementById('inputLastName') as HTMLInputElement).value;
        (document.getElementById('lblFirstName') as HTMLElement).innerText = fname;
        (document.getElementById('lblLastName') as HTMLElement).innerText = lname;
    }
    getPosition() {
        var positionSelect = (document.getElementById('selectPosition') as HTMLSelectElement);
        //console.log(positionSelect.options[positionSelect.selectedIndex].text);
        (document.getElementById('lblposition') as HTMLElement).innerText = positionSelect.options[positionSelect.selectedIndex].text;
    }
    getSupervisor() {
        var supervisorSelect = (document.getElementById('selectSupervisor') as HTMLSelectElement);
        (document.getElementById('lblsupervisor') as HTMLElement).innerText = supervisorSelect.options[supervisorSelect.selectedIndex].text;
    }
    getDepartment() {
        var departmentSelect = (document.getElementById('selectDepartment') as HTMLSelectElement);
        (document.getElementById('lbldepartment') as HTMLElement).innerText = departmentSelect.options[departmentSelect.selectedIndex].text;
    }
    getLocation() {
        var locationSelect = (document.getElementById('selectLocation') as HTMLSelectElement);
        (document.getElementById('lbllocation') as HTMLElement).innerText = locationSelect.options[locationSelect.selectedIndex].text;
    }
    getSOW() {
        var sowSelect = (document.getElementById('selectSOW') as HTMLSelectElement);
        (document.getElementById('lblsow') as HTMLElement).innerText = sowSelect.options[sowSelect.selectedIndex].text;
    }

/*-----------------------------------------------------------*/

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

//interface Employee {
//            public string FirstName { get; set; }
//        public string LastName { get; set; }
//        public string Position { get; set; }
//        public int DepartmentId { get; set; }
//        public int LocationId { get; set; }
//}


