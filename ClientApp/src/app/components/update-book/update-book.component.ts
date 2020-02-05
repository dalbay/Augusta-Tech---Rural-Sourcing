import { Component, OnInit } from "@angular/core";
import { BookService } from "src/app/services/book.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-update-book",
  templateUrl: "./update-book.component.html",
  styleUrls: ["./update-book.component.css"]
})
export class UpdateBookComponent implements OnInit {
  updateBookForm: FormGroup;
  book: any;

  constructor(
    private service: BookService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.service.getBookById(this.route.snapshot.params.id).subscribe(data => {
      this.book = data;

      // construct the formGroup
      this.updateBookForm = this.fb.group({
        id: [data.id],
        title: [data.title, Validators.required],
        author: [data.author, Validators.required],
        description: [
          data.description,
          Validators.compose([Validators.required, Validators.minLength(30)])
        ],
        data: [data.rate],
        dateStart: [data.dateStart],
        dateRead: [data.dateRead]
      });
    });
  }
}
