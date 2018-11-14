import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import {Books} from './books';
import { MessageService } from './message.service';
//import { InMemoryDataService } from './in-memory-data.service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class LibraryService{
    private booksUrl = 'api/booksDB';
    constructor(
                private http: HttpClient,
                private messageService: MessageService) { }

  getBooks (): Observable<Books[]> {
      return this.http.get<Books[]>(this.booksUrl)
}
createData(book: Books){
    return this.http.post(this.booksUrl, book);

 }
 updateData(id: number, book: Books) {
    return this.http.post<Books>(this.booksUrl, book, httpOptions)
  }
  deleteBook (book: Books | number): Observable<Books> {
     const id = typeof book === 'number' ? book : book.id;
     const url = `${this.booksUrl}/${id}`;

     return this.http.delete<Books>(url, httpOptions);
}
}
