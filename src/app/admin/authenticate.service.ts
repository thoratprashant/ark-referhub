import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map'

interface LoginResponse {
  token: string
}

export interface LoginPayload {
  email: string
  password: string
}

export interface ResetPasswordPayload {
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private token: string;

  constructor(private http: HttpClient) { }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('adminToken')
    }
    return this.token
  }

  private saveToken(token: string): void {
    localStorage.setItem('adminToken', token);
    this.token = token;
  }

  private request(method: 'post'|'get', type: string, params?: any): Observable<any> {
    let base

    if (method === 'post') {
      base = this.http.post(`http://localhost:3000/${type}`, params)
    } else {
      base = this.http.get(`/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }})
    }

    const request = base.pipe(
      map((data: LoginResponse) => {
        if (data.token) {
          this.saveToken(data.token)
        }
        return data
      })
    )

    return request;
  }

  public login(params: LoginPayload): Observable<any> {
    return this.request('post', 'auth/signIn', params)
  }

  public resetPassword(params: ResetPasswordPayload): Observable<any> {
    return this.request('post', 'auth/resetPassword', params)
  }
}
