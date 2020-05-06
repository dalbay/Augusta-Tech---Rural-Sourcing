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
        //this.currentRow = event.data;
        //this.source = event.source;
        //this.childModal.show();
        console.log(event.newData);
    }

    //update()
    //update(element: any, values: any): Promise<any> {

    //   // return new Promise((resolve, reject) => {
    //      //  this.find(element).then((found) => {
    //          ////  found = deepExtend(found, values);
    //           // super.update(found, values).then(resolve).catch(reject);
    //       // }).catch(reject);
    // //   });
    //}

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
        //console.log(value);

        //insert into Skill
        //var newSkill = new Skill();
        this.newSkill.SkillTitle = value.skillName;
        this.newSkill.SkillDescription = value.skillDesc;
        this.newSkill.TypeId = value.categoryId;
        console.log(this.newSkill);
        return new Promise((resolve, reject) => {
            this.http.post(this.appUrl + 'api/Skills', this.newSkill).subscribe(data => {
                //var savedSkill = data as AllSkill;
                //this.newSkill = data as Skill;
                console.log("saving new skill");
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



