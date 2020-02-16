import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';


@Component({
    selector: 'category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})

export class CategoryComponent {

    public categories: Category[] = [];


    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/Category').subscribe(result => {
            this.categories = result.json() as Category[];
        }, error => console.error(error));


    }
}

interface Category {
    typeId: number;
    typeName: string;
    typeDescription: string;
}