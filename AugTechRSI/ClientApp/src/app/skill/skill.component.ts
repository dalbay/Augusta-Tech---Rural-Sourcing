import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
    selector: 'app-skill',
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

    source: LocalDataSource;

    // all skills
    public allSkills: AllSkill[] = [];

    // category properties
    public allCategories: AllCategories[] =[];


    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

        // retrieve skills
        http.get(baseUrl + 'api/Skills').subscribe(result => {
            this.allSkills = result as AllSkill[];
            this.source = new LocalDataSource(this.allSkills);
        }, error => console.error(error));

        // retrieve categories
        http.get(baseUrl + 'api/Category').subscribe(result => {
            this.allCategories = result as AllCategories[];
        }, error => console.log(error));
    };

    //Setting for the table:
    settings = {
        columns: {
            skillTitle: { title: 'Skill Name' },
            skillDescription: { title: 'Description' },
            typeName: { title: 'Category' },
            totalSkilledEmployees: { title: 'Employees with Skill', filter: false, editable: false, },
            totalAvailableEmployees: { title: 'Available Employees', filter: false, editable: false, },
        },
        actions: { add: false, delete: false,},
    };

    ngOnInit() { }

    catHasError = true;
    getCategory(value) {
        if (value === undefined) {
            this.catHasError = true;
        } else {
            this.catHasError = false;
        }
    }
}

interface AllSkill {
    SkillId: number;
    SkillTitle: string;
    SkillDescription: string;
    typeName: string;
    totalSkilledEmployees: number;
    totalAvailableEmployees: number;
}

class Skill {
    SkillTitle: string;
    SkillDescription: string;
    typeName: string;
    constructor() { };
}

interface AllCategories {
    TypeId: number;
    TypeName: string;
    TypeDescription: string;
}



