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
    category: NewCategory;
    //base url
    appUrl: string = "";
    //http
    http: HttpClient;
    //new category's id
    categoryId: number;
    //modal display category
    modalCategory: NewCategory;


    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.http = http;
        this.appUrl = baseUrl;
        http.get(baseUrl + 'api/Category').subscribe(result => {
            this.categories = result as Category[];
        }, error => console.error(error));

        this.category = new NewCategory();
        this.modalCategory = new NewCategory();
    }
    //Initialize new Employee status and call insert to db method
    saveCategory(value) {
        this.category.typeName = value.categoryName;
        this.modalCategory.typeName = value.categoryName
        this.category.typeDescription = value.categoryDescription;
        this.modalCategory.typeDescription = value.categoryDescription;
        //insert into Categories
        return new Promise((resolve, reject) => {
            this.http.post(this.appUrl + 'api/Category', this.category).subscribe(data => {
                var savedCategory = data as Category;
                this.modalCategory.typeId = savedCategory.typeId;
                var url = this.appUrl;

                resolve(url);

            },error => console.error(error));
        })
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