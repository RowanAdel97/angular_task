import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  private recordsUrl = 'https://meowfacts.herokuapp.com/';  // URL to web api

  constructor(
    private http: HttpClient
    ) { }

  getRecords(): Observable<any> {
    return this.http.get(this.recordsUrl);
  }
}
