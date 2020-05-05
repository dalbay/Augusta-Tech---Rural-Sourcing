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
    public allSkills: AllSkill[];

    // new skill
    skill: Skill;

    // category properties
    public allCategories: AllCategories[];
    //add a property to the component


    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

        // initialize Category array
        this.allCategories = new Array();
        //initialize a new Skill
        this.skill = new Skill();

        // retrieve skills
        http.get(baseUrl + 'api/Skills').subscribe(result => {
            this.allSkills = result as AllSkill[];
            this.source = new LocalDataSource(this.allSkills);

            //gets the categories from the skills table
            //for (var i = 0; i < this.allSkills.length; i++) {
            //    this.categories.push(this.allSkills[i].typeName);
            //}
            //console.log(this.categories);
            //this.distCategories = this.categories.filter((n, i) => this.categories.indexOf(n) === i);
            //---------------------------------------------

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

    ngOnInit() {}
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



