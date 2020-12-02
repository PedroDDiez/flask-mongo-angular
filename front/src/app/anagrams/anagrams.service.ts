import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root',})
export class AnagramService {

  private anagramsUrl = 'http://127.0.0.1:8000/api/anagrams';  // URL to web api
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient) { }

  /** GET anagrams from the server */
  getAnagrams(seed: string): Observable<any> {
    return this.http.post(this.anagramsUrl, {"word": seed}, this.httpOptions);
  }

}

