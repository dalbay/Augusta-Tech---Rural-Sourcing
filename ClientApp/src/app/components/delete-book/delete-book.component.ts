import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BookService } from "src/app/services/book.service";

@Component({
  selector: "app-delete-book",
  templateUrl: "./delete-book.component.html",
  styleUrls: ["./delete-book.component.css"]
})
export class DeleteBookComponent implements OnInit {
  book: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: BookService
  ) {}

  ngOnInit() {
    this.service.getBookById(this.route.snapshot.params.id).subscribe(data => {
      this.book = data;
    });
  }

  deleteBook(id: number) {
    this.service.deleteBook(id).subscribe(data => {
      this.router.navigate(["/books"]);
    });
  }
}
