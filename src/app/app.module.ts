import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
// (импорт веб-API в оперативной памяти)
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { MessagesComponent }    from './messages/messages.component';
import { AUTHORSComponent } from './authors/authors.component';
import { AppRoutingModule }     from './app-routing.module';
import { BooksComponent } from './books/books.component';
@NgModule({
  declarations: [
    AppComponent,
    AUTHORSComponent,
    BooksComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
