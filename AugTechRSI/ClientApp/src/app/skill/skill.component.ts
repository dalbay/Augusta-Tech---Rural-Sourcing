import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalDataSource } from 'ng2-smart-table';
import { NgFormSelectorWarning } from '@angular/forms';

@Component({
    selector: 'app-skill',
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

    source: LocalDataSource;
    //base url
    appUrl: string = "";
    //http
    http: HttpClient;
    // all skills
    public allSkills: AllSkill[] = [];
    // new skill
    newSkill: Skill;
    // updated skill;
    updatedRecord: Skill;
    // category properties
    public allCategories: AllCategories[] =[];

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.http = http;
        this.appUrl = baseUrl;
        // initialize a new skill
        this.newSkill = new Skill();
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
        edit: {
            confirmSave: true,
        },
        columns: {
            skillTitle: { title: 'Skill Name' },
            skillDescription: { title: 'Description' },
            typeName: { title: 'Category', editable: false, },
            totalSkilledEmployees: { title: 'Employees with Skill', filter: false, editable: false, },
            totalAvailableEmployees: { title: 'Available Employees', filter: false, editable: false, },
        },
        actions: { add: false, delete: false,},
    };

    updateRecord(event) {
        // define category list
        var categoryList = new Array();
        categoryList.push(this.allCategories);

        // initialize new skill
        this.updatedRecord = new Skill();
        this.updatedRecord.SkillID = event.newData.skillId;
        this.updatedRecord.SkillTitle = event.newData.skillTitle;
        this.updatedRecord.SkillDescription = event.newData.skillDescription;

        // get updated skill's category id
        for (var i = 0; i < (categoryList[0]).length; i++) {
            if (event.newData.typeName === (categoryList[0])[i].typeName) {
                this.updatedRecord.TypeId = (categoryList[0])[i].typeId;
            }
        }
        console.log(this.updatedRecord);
        return new Promise((resolve, reject) => {
            console.log('updating changes');
            this.http.put(this.appUrl + 'api/Skills/' + event.newData.skillId, this.updatedRecord).subscribe(data => {
                location.reload();
                //this.modalCategory.typeId = savedSkill.SkillId;
            }, error => console.error(error));
        })
    }


    ngOnInit() { }

    catHasError = true;
    getCategory(value) {
        if (value === undefined) {
            this.catHasError = true;
        } else {
            this.catHasError = false;
        }
    }

    saveSkill(value) {
        this.newSkill.SkillTitle = value.skillName;
        this.newSkill.SkillDescription = value.skillDesc;
        this.newSkill.TypeId = value.categoryId;

        return new Promise((resolve, reject) => {
            this.http.post(this.appUrl + 'api/Skills', this.newSkill).subscribe(data => {

                console.log(this.newSkill);
                //this.modalCategory.typeId = savedSkill.SkillId;
                var url = this.appUrl;

                resolve(url);

            }, error => console.error(error));
        })
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
    SkillID: number;
    SkillTitle: string;
    SkillDescription: string;
    TypeId: number;
    constructor() { };
}

interface AllCategories {
    TypeId: number;
    TypeName: string;
    TypeDescription: string;
}

class Category {
    TypeID: number;
    TypeName: string;
    TypeDescription: string;
}



