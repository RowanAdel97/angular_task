import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { Record } from './record';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  private recordsUrl = 'https://dog-api.kinduff.com/api/facts?number=10';  // URL to web api
  result : any;
  facts : string[] = [];
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
    ) { }

  getRecords(): string[] {
    this.http.get(this.recordsUrl).subscribe(Response => {
      console.log(Response);
      // this.result = Response;
      // this.facts = this.result.facts;
    })
    console.log(this.facts);
    return this.facts;
  }
}
