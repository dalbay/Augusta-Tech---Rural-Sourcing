import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
    selector: 'listskills',
    templateUrl: './listskills.component.html',
    styleUrls: ['./listskills.component.css']
})

export class ListSkillsComponent {

    public skills: AllSkill[] = [];
    public categories: string[] = [];
    public distCategories: string[] = [];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/Skills').subscribe(result => {
            this.skills = result.json() as AllSkill[];

            for (var i = 0; i < this.skills.length; i++) {
                this.categories.push(this.skills[i].typeName);
            }

            this.distCategories = this.categories.filter((n, i) => this.categories.indexOf(n) === i);

        }, error => console.error(error));
    };
}

interface Category {
    categoryName: string;
}

interface AllSkill {
    skillId: number;
    skillTitle: string;
    skillDescription: string;
    typeName: string;
    totalSkilledEmployees: number;
    totalAvailableEmployees: number;
}




