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

/*----------------------PROPERTIES---------------------------------*/

    //Source property for the table
    source: LocalDataSource;

    //Selected check-boxes array
    selectedRows: any = [];

    //Properties that hold the data for the dropdowns
    public employeeInfos: EmployeeInfo[];
    public supervisors: Supervisor[];
    public departments: Department[];
    public locations: Location[];
    public sows: SOW[];
    public skills: Skill[];

    //Property array that holds the selected skills
    public static skillsList = [];
    public static skillsIdList = [ 0 ];

    //base url
    appUrl: string = "";

    //http
    http: HttpClient;

    //new employee
    employee: Employee;

    //New inserted employee id
    userid: any;
/*----------------------------------------------------------------*/

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.http = http;
        this.appUrl = baseUrl;
        http.get(baseUrl + 'api/EmployeeInfo').subscribe(result => {
            this.employeeInfos = result as EmployeeInfo[];
            this.supervisors = this.employeeInfos[0].supervisors;
            this.departments = this.employeeInfos[0].departments;
            this.locations = this.employeeInfos[0].locations;
            this.sows = this.employeeInfos[0].sows;
            //fill source for table
            this.source = new LocalDataSource(this.employeeInfos[0].skills)
        }, error => console.error(error));
        // initialize an employee
        this.employee = new Employee();
    };

    //Insert into db api call
    public insertEmployee(http, employee) {
         http.post(this.appUrl + 'api/EmployeeInfo', employee).subscribe(data => {
            this.userid = data.userId as number;
            console.log(this.userid);
        })
    };

    //Initialize new Employee status and call insert to db method
    saveEmployee(emp) {
        //this.employee.FirstName = emp.fname;
        //this.employee.LastName = emp.lname;
        //this.employee.Position = emp.position;
        //this.employee.DepartmentId = emp.department;
        //this.employee.LocationId = emp.location;
        //this.employee.SowID = emp.sow;
        //this.employee.SupFirstName = emp.supervisor.substring(0, emp.supervisor.indexOf(" "));
        //this.employee.SupLastName = emp.supervisor.substring(emp.supervisor.indexOf(" ")+2);
        //insert into db
        //this.insertEmployee(this.http,this.employee);
        console.log(EmployeeComponent.skillsList);
    }


    submitted = false;

    onSubmit() { this.submitted = true; }

    /* ***ng2-smart-table*** ------------------------------------*/

    //Setting for ng2-smart-table:
    settings = {
        selectMode: 'multi',
        columns: {
            skillId: { title: 'ID', editable: false },
            skillName: { title: 'Skill Name', editable: false },
            categoryName: { title: 'Category', editable: false },
        },
        actions: { add: false, delete: false, edit: false }
    };


    // UserRowSelected Event handler for ng2-smart-table
    onRowSelect(event) {
        var selectedSkillsTextArea = (document.getElementById('skillsTextArea') as HTMLTextAreaElement);
        this.selectedRows = event.selected;
        if (event.isSelected) {
            var selected = 0;
            EmployeeComponent.skillsIdList.forEach(function (value) {
                if (value == event.data.skillId) {
                    selected++;
                }
            });

            if (selected == 0) {
                console.log(event.data.skillId + ' does not exist, saved!');
                EmployeeComponent.skillsIdList.push(event.data.skillId);
                EmployeeComponent.skillsList.push(event.data.skillId + '-' + event.data.skillName);
            } else {
                console.log(event.data.skillId + ' already exists!');
            }
        }
        else {
            var name = event.data.skillId + '-' + event.data.skillName;
            console.log(name);
            var x = EmployeeComponent.skillsList.splice(EmployeeComponent.skillsList.indexOf(name),1);
            console.log('deleted: ' + x);
            var z = EmployeeComponent.skillsIdList.splice(EmployeeComponent.skillsIdList.indexOf(event.data.skillId), 1);
            console.log('deleted: ' +z);
        }

        console.log(EmployeeComponent.skillsIdList);
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

class Employee {
    FirstName: string;
    LastName: string;
    Position: string;
    DepartmentId: number;
    LocationId: number;
    SowID: number;
    SupFirstName: string;
    SupLastName: string;

    constructor() { };
    //constructor(fn,ln,po,dep,loc,sow,supfn,supln) {
    //    this.FirstName = fn;
    //    this.LastName = ln;
    //    this.Position = po;
    //    this.DepartmentId = dep;
    //    this.LocationId = loc;
    //    this.SowID = sow;
    //    this.SupFirstName = supfn;
    //    this.SupLastName = supln;
    //}
}

