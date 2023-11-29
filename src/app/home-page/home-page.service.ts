import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const host = 'https://0162-89-232-116-78.ngrok-free.app';

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  constructor(private httpClient: HttpClient, private router: Router) {}
  errLogi: boolean = false;

  login(name: string, password: string): Observable<any> {
    let x = this.httpClient
      .post<any>(`${host}/user/login`, { email: name, password: password })
      .subscribe(
        (result) => {
          this.errLogi = false;
          console.log(result);
          this.router.navigate(['/lesson']);
          localStorage.setItem('login', 'true');
          return result;
        },
        (error) => {
          console.log(error.error);
          this.errLogi = true;
          localStorage.setItem('login', 'false');

          return error;
        }
      );
    return this.httpClient.post<any>(`${host}/user/login`, { name, password });
  }
}
