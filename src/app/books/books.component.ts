import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {TemplateRef, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {Books} from '../books';
import { HttpService} from '../http.service';
import { LibraryService} from '../library.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['../buttons/buttons.component.css']
})
export class BooksComponent implements OnInit {
    title = 'Books';
    booksItems: Books[]=[];
    @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
    @ViewChild('editTemplate') editTemplate: TemplateRef<any>;
    editedBook: Books;
    books: Array<Books>;
    isNewRecord: boolean;
    statusMessage: string;

      constructor(private libraryService: LibraryService) { }

      ngOnInit() {
           this.getBooks();
      }
      getBooks(): void {
   this.libraryService.getBooks()
   .subscribe(booksItems => this.booksItems = booksItems);
 }
 loadTemplate(book: Books) {
     if (this.editedBook && this.editedBook.id == book.id) {
       return this.editTemplate;
    } else {
         return this.readOnlyTemplate;
     }
  }
  addBook() {
    this.editedBook = new Books();
     this.booksItems.push(this.editedBook);
      this.isNewRecord = true;
 }
 saveBook() {
       if (this.isNewRecord) {
           this.libraryService.createData(this.editedBook).subscribe(data => {
               this.statusMessage = 'Дані успішно добавлені',
               this.getBooks();
           });
           this.isNewRecord = false;
           this.editedBook = null;
       } else {
           this.libraryService.updateData(this.editedBook.id, this.editedBook).subscribe(data => {
               this.statusMessage = 'Дані удачно обновились',
               this.getBooks();
           });
           this.editedBook = null;
       }
   }
   cancel() {
        if (this.isNewRecord) {
            this.booksItems.pop();
            this.isNewRecord = false;
        }
        this.editedBook = null;
    }
   editBook(book: Books) {
this.editedBook = new Books();
this.editedBook.bookName=book.bookName;
this.editedBook.id=book.id;
this.editedBook.firstName=book.firstName;
this.editedBook.lastName=book.lastName;
this.editedBook.number=book.number;
this.editedBook.year=book.year;
this.editedBook.genre=book.genre;
  }
  deleteBook(book: Books): void {
    this.booksItems = this.booksItems.filter(b => b !== book);
    this.libraryService.deleteBook(book).subscribe();
  }
  authors(book: Books)
  {
     return  book.firstName+" "+book.lastName;
  }
}
