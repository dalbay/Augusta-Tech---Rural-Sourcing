import { Component, Inject } from "@angular/core";
import { LocalDataSource } from 'ng2-smart-table';
import { from } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { forEach } from "@angular/router/src/utils/collection";
import { publish } from "rxjs/operators";

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})



export class EmployeesComponent {

    //base url
    appUrl: string = "";

    //http
    http: HttpClient;

    //new employee
    employee: Employee;

    //selected employee's skills
    employeeSkills: string[];


    //add properties to the component to use ng2-smart-table
    source: LocalDataSource;
    public employees: AllEmployees[] = [];

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.http = http;
        this.appUrl = baseUrl;
        this.employeeSkills = [];
        // initialize an employee
        this.employee = new Employee();
        http.get(baseUrl + 'api/Employees').subscribe(result => {

            this.employees = result as AllEmployees[];
            this.source = new LocalDataSource(this.employees);
        }, error => console.error(error));
    };

    // Edit List for SOW
    public sowList = [
        { value: "Metatech LLC", title: "Metatech LLC" }]
    // Edit List for Location
    public locationList = [
        { value: "Albuquerque", title: "Albuquerque" },
        { value: "Augusta", title: "Augusta" },
        { value: "Atlanta", title: "Atlanta" },
        { value: "Fort Wayne", title: "Fort Wayne" },
        { value: "Jonesboro", title: "Jonesboro" },
        { value: "Mobile", title: "Mobile" },
        { value: "Oklahoma City", title: "Oklahoma City" }];
    // Edit List for Department
    public departmentList = [
        { value: "Software Development", title: "Software Development" },
        { value: "Business Analyst", title: "Business Analyst" },
        { value: "Database", title: "Database" },
        { value: "Java", title: "Java" },
        { value: ".NET", title: ".NET" },
        { value: "Project Management", title: "Project Management" },
        { value: "Quality Assurance", title: "Quality Assurance" }];
    // Edit List for Supervisor
    public supervisorList = [
        { value: 'Allan Wingate', title: "Allan Wingate" },
        { value: 'Christoper Smith', title: "Christoper Smith" },
        { value: 'Robert Mack', title: "Robert Mack" },
        { value: 'Thomas Gibbs', title: "Thomas Gibbs" }];
    // Edit List for Level
    public levelList = [
        { value: "Junior Associate", title: "Junior Associate" },
        { value: "Associate", title: "Associate" },
        { value: "Analyst I", title: "Analyst I" },
        { value: "Analyst II", title: "Analyst II" },
        { value: "Senior I", title: "Senior I" },
        { value: "Senior II", title: "Senior II" },
        { value: "Principal", title: "Principal" } ];


    //Settings for the ng2-table:
    settings = {
        edit: {
            confirmSave: true,
        },
        columns: {
            userID: { title: 'Employee ID', editable: false, },
            employeeName: { title: 'EmployeeName', editable: false,},
            position: {
                title: 'Level',
                type: 'html',
                editor: {
                    type: 'list',
                    config: {
                        list: this.levelList,
                    }
                }
            },
            managerName: {
                title: 'Supervisor',
                type: 'number',
                editor: {
                    type: 'list',
                    config: {
                        list: this.supervisorList,
                    }
                }
            },
            departmentName: {
                title: 'Department',
                editor: {
                    type: 'list',
                    config: {
                        list: this.departmentList,
                    }
                }
            },
            locationName: {
                title: 'Location',
                type: 'html',
                editor: {
                    type: 'list',
                    config: {
                        list: this.locationList,
                    }
                }
            },
            sow: {
                title: 'SOW',
                type: 'html',
                editor: {
                    type: 'list',
                    config: {
                        list: this.sowList,
                    }
                }
            },
        },
        actions: { add: false, delete: false, },
    };

    updateRecord(event) {
        this.clearUpdateScreen();

        var answer = window.confirm('Are you sure you want to save?')
        if (answer) {
            return new Promise((resolve, reject) => {
                console.log('updating changes');

                this.employee.UserId = event.newData.userID;
                this.employee.FirstName = event.newData.employeeName.substring(0, event.newData.employeeName.indexOf(" "));
                this.employee.LastName = event.newData.employeeName.substring(event.newData.employeeName.indexOf(" ") + 1);
                this.employee.Position = event.newData.position;
                this.employee.DepartmentId = this.getDepartmentID(event.newData.departmentName);
                this.employee.LocationId = this.getLocationID(event.newData.locationName);
                this.employee.SupFirstName = event.newData.managerName.substring(0, event.newData.managerName.indexOf(" "));
                this.employee.SupLastName = event.newData.managerName.substring(event.newData.managerName.indexOf(" ") + 1);

                if (event.newData.sow === "Metatech LLC") {
                    this.employee.SowID = 1;
                } else
                    this.employee.SowID = null;


                (document.getElementById('lblSkills') as HTMLElement).innerText = "";

                //get the employees skills from the database
                this.http.get(this.appUrl + 'api/Employees/' + event.newData.userID).subscribe(result => {
                    this.employeeSkills = result as Array<string>;
                    this.employeeSkills.forEach(function (value) {
                        (document.getElementById('lblSkills') as HTMLElement).innerText += (value["skillTitle"]);
                        (document.getElementById('lblSkills') as HTMLElement).innerText += " / ";

                    });
                }, error => console.error(error));


                //update the database
                this.http.put(this.appUrl + 'api/Employees/' + event.newData.userID, this.employee).subscribe(data => {
                    location.reload();
                }, error => console.error(error));
                console.log(this.employee);


                this.displayEmployee(event.newData.userID, event.newData.employeeName, event.newData.position, event.newData.managerName, event.newData.departmentName, event.newData.locationName, event.newData.sow)
                console.log('update complete');

                event.confirm.resolve(event.newData);
            })
        }
        else {
            event.confirm.reject();
        }
    }

    // get the location id
    getLocationID(location) {
        var locationID;
        switch (location) {
            case "Albuquerque" : {
                locationID = 1;
                break;
            }
            case "Augusta": {
                locationID = 2;
                break;
            }
            case "Atlanta": {
                locationID = 3;
                break;
            }
            case "Fort Wayne": {
                locationID = 4;
                break;
            }
            case "Jonesboro" : {
                locationID = 5;
                break;
            }
            case "Mobile" : {
                locationID = 6;
                break;
            }
            case "Oklahoma City": {
                locationID = 7;
                break;
            }
            default: {
                //statements;
                break;
            }
        }
        return locationID;
    }
    //get the department id
    getDepartmentID(department) {
        var departmentID;
        switch (department) {
            case "Software Development": {
                departmentID = 1;
                break;
            }
            case "Business Analyst": {
                departmentID = 2;
                break;
            }
            case "Database": {
                departmentID = 3;
                break;
            }
            case "Java": {
                departmentID = 4;
                break;
            }
            case ".NET": {
                departmentID = 5;
                break;
            }
            case "Project Management": {
                departmentID = 6;
                break;
            }
            case "Quality Assurance": {
                departmentID = 7;
                break;
            }
            default: {
                //statements;
                break;
            }
        }
        return departmentID;
    }
    // List input values to labels
    displayEmployee(id: number, name: string, level:string, supervisor:string, department:string, location:string, sow:string) {
        (document.getElementById('lblId') as HTMLElement).innerText = id.toString();
        (document.getElementById('lblName') as HTMLElement).innerText = name;

        (document.getElementById('lblLevel') as HTMLElement).innerText = level;
        (document.getElementById('lblSupervisor') as HTMLElement).innerText = supervisor;
        (document.getElementById('lblDepartment') as HTMLElement).innerText = department;

        (document.getElementById('lblLocation') as HTMLElement).innerText = location;
        (document.getElementById('lblSow') as HTMLElement).innerText = sow;

        (document.getElementById('updateComplete') as HTMLElement).innerText = "Record has been successfully updated!";
    }
    // Clear the Updated Record screen
    clearUpdateScreen() {
        (document.getElementById('lblId') as HTMLElement).innerText = "-";
        (document.getElementById('lblName') as HTMLElement).innerText = "-";
        (document.getElementById('lblSkills') as HTMLElement).innerText = "-";
        (document.getElementById('lblLevel') as HTMLElement).innerText = "-";
        (document.getElementById('lblSupervisor') as HTMLElement).innerText = "-";
        (document.getElementById('lblDepartment') as HTMLElement).innerText = "-";
        (document.getElementById('lblSupervisor') as HTMLElement).innerText = "-";
        (document.getElementById('lblLocation') as HTMLElement).innerText = "-";
        (document.getElementById('lblSow') as HTMLElement).innerText = "-";
        (document.getElementById('lblSkills') as HTMLElement).innerText = "-";
        (document.getElementById('updateComplete') as HTMLElement).innerText = "";
    }
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
class Employee {

    UserId: number;
    FirstName: string;
    LastName: string;
    Position: string;
    DepartmentId: number;
    LocationId: number;
    SowID: number;
    SupFirstName: string;
    SupLastName: string;
    constructor() { };
}


