import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {

    public categories: Category[] = [];

    //new cateogry
    category: any;

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/Category').subscribe(result => {
            this.categories = result as Category[];
        }, error => console.error(error));

        this.category = new NewCategory();
    }
    ngOnInit() { }
}

interface Category {
    typeId: number;
    typeName: string;
    typeDescription: string;
}

class NewCategory {
            typeId: number;
        typeName: string;
    typeDescription: string;
    constructor( ) { }
}