import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

const host = 'https://0162-89-232-116-78.ngrok-free.app';

@Injectable({
  providedIn: 'root',
})
export class LessonService {
  constructor(private httpClient: HttpClient) {}

  score = 0;
  length = 0;

  getAll(): Observable<any[]> {
    return this.httpClient.post<any[]>(`${host}/course`, {});
  }
}
