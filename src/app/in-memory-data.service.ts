import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Books } from './books';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
    createDb() {
        const booksDB = [
          { id: 1, bookName:'bookName1', firstName: 'Mr. Nice',lastName:'lastName1',year:'1111',number:'0000',genre:'genre' },
          { id: 2, bookName:'bookName2', firstName: 'Narco',lastName:'lastName2',year:'1111',number:'0000',genre:'genre' },
          { id: 3, bookName:'bookName3', firstName: 'Bombasto',lastName:'lastName3',year:'1111',number:'0000',genre:'genre' },
          { id: 4, bookName:'bookName4', firstName: 'Celeritas',lastName:'lastName4',year:'1111',number:'0000',genre:'genre' },
          { id: 5, bookName:'bookName5', firstName: 'Magneta',lastName:'lastName5',year:'1111',number:'0000',genre:'genre' },
          { id: 6,bookName:'bookName6', firstName: 'RubberMan',lastName:'lastName6',year:'1111',number:'0000',genre:'genre' },
          { id: 7,bookName:'bookName7', firstName: 'Dynama',lastName:'lastName7',year:'1111',number:'0000',genre:'genre' },
          { id: 8,bookName:'bookName8', firstName: 'Dr IQ',lastName:'lastName8',year:'1111',number:'0000',genre:'genre' },
          { id: 9,bookName:'bookName9', firstName: 'Magma',lastName:'lastName9',year:'1111',number:'0000',genre:'genre' },
          { id: 10,bookName:'bookName10', firstName: 'Tornado',lastName:'lastName10',year:'1111',number:'0000',genre:'genre' },
          { id: 11, bookName:'bookName2', firstName: 'Mr. Nice',lastName:'lastName1',year:'1111',number:'0000',genre:'genre' }
        ];
        return {booksDB};
      }
      genId(booksDB: Books[]): number
      {
        return booksDB.length > 0 ? Math.max(...booksDB.map(books => books.id)) + 1 : 11;
      }
}
