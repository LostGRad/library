import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AUTHORSComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
    { path: '', component: AUTHORSComponent},
    { path: 'authors', component: AUTHORSComponent},
    { path: 'books', component:  BooksComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
