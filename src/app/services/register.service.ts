import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  getList(): Observable<any> {
    // let headers = new HttpHeaders();
    // headers = headers.set('Authorization', `Bearer ${this.loginService.token}`);

    return this.httpClient.get(`${environment.API}/teams`, {
      // headers: headers
    });
  }

  getDetail(id: string): Observable<any> {
    // let headers = new HttpHeaders();
    // headers = headers.set('Authorization', `Bearer ${this.loginService.token}`);
    return this.httpClient.get(`${environment.API}/teams/${id}`, {
      // headers: headers
    });
  }

  createTeam(team: any) {
    // let headers = new HttpHeaders();
    // headers = headers.set('Authorization', `Bearer ${this.loginService.token}`);

    return this.httpClient.post(`${environment.API}/teams/`, team, {
      // headers: headers
    });
  }
}
