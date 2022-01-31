import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Record } from './record';
import { RECORDS } from './mock-records';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  // private recordsUrl = 'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=10';  // URL to web api

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  constructor(
    // private http: HttpClient
    ) { }

  getRecords(): Observable<Record[]> {
    // return this.http.get<Record[]>(this.recordsUrl);
    const records = of(RECORDS);
    return records;
  }
}
