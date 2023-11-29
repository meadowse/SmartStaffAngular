import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const host = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class GuruService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get<any>(host);
  }
}
