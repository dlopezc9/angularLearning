import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'https://localhost:7267';

  constructor(private http : HttpClient) 
  { 

  }

  getBooks(): Observable<Book[]>
  {
    return this.http.get<Book[]>(this.apiUrl);
  }
}
