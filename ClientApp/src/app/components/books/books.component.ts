import { Component, OnInit } from "@angular/core";
import { BookService } from "src/app/services/book.service";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"]
})
export class BooksComponent implements OnInit {
  public books: Book[];

  constructor(private service: BookService) {}

  ngOnInit() {
    // get all books when initialized
    this.service.getAllBooks().subscribe(data => {
      this.books = data;
    });
  }
}
