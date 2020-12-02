import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WORDS } from './mock-words';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})


export class WordService {

  private wordsUrl = 'http://127.0.0.1:8000/api/words';  // URL to web api
  private wordListsUrl = 'http://127.0.0.1:8000/api/word_list';  // URL to web api
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient) { }

  /** GET words from the server */
  getWords(): Observable<string[]> {
    return this.http.get<string[]>(this.wordsUrl);
  }

  updateWordList(word_list: string[]): Observable<any> {
    return this.http.put(this.wordListsUrl, {"word_list": word_list}, this.httpOptions);
  }
}

