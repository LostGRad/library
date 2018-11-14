import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Books} from './books';
@Injectable()
export class HttpService{
  //   private url : string;
  //   constructor(private http: HttpClient){
  //   this.url='http://localhost:4200/books.json';}
  //   // getBooks() : Observable<Books[]> {
  //   //        return this.http.get('books.json').pipe(map(data=>{
  //   //            let booksList = data["list"];
  //   //            return koosList.map(function(book:any) {
  //   //                return {bookName: book.bookName,firstName: book.firstName, lastName: book.lastName};
  //   //              });
  //   //        }));
  //   //    }
  //   getData(){
  //        return this.http.get('books.json');
  //   }
  //   createData(book: Books){
  //     return this.http.post(this.url, book);
  // }
  // updateData(id: number, book: Books) {
  //      const urlParams = new HttpParams().set("id", id.toString());
  //      return this.http.put(this.url, book, { params: urlParams});
  //  }
  //  deleteData(id: number){
  //       const urlParams = new HttpParams().set("id", id.toString());
  //       return this.http.delete(this.url, { params: urlParams});
  //   }
}
