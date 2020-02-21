import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
    selector: 'app-skill',
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

    public skills: AllSkill[] = [];
    public categories: string[] = [];
    public distCategories: string[] = ['Choose a Category...'];

    //add a property to the component
    source: LocalDataSource;


    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

        http.get(baseUrl + 'api/Skills').subscribe(result => {
            this.skills = result as AllSkill[];
            this.source = new LocalDataSource(this.skills);
            //this.categories.push(result[0] as AllSkill);
            //Get a distinct category names
            //this.categories.push()
            console.log(this.skills);
            for (var i = 0; i < this.skills.length; i++) {
                this.categories.push(this.skills[i].typeName);
            }
            console.log(this.categories);
            this.distCategories = this.categories.filter((n, i) => this.categories.indexOf(n) === i);

        }, error => console.error(error));
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


interface Category {
    categoryName: string;
}
interface AllSkill {
    SkillId: number;
    SkillTitle: string;
    SkillDescription: string;
    typeName: string;
    totalSkilledEmployees: number;
    totalAvailableEmployees: number;
}


