import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map'

interface LoginResponse {
  token: string
}

export interface LoginPayload {
  email: string
  password: string
}

export interface SessionPayload {
  session: string
}

export interface ForgotPasswordPayload {
  email: string
}

export interface ResetPasswordPayload {
  password: string,
  confirmPassword: string
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

  private request(method: 'post'|'get'|'patch', type: string, params?: any): Observable<any> {
    let base;
    
    if (method === 'post') {
      base = this.http.post(`http://localhost:3000/${type}`, params)
    } else if (method === 'patch') {
      base = this.http.patch(`http://localhost:3000/${type}`, params, { headers: { Authorization: `Bearer ${this.getToken()}` }})
    } else {
      if (type === 'user/getUserBySession') {
        base = this.http.get(`http://localhost:3000/${type}`, { params });
      } else {
        base = this.http.get(`http://localhost:3000/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }})
      }
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

  public forgotPassword(params: ForgotPasswordPayload): Observable<any> {
    return this.request('post', 'auth/forgotPassword', params)
  }

  public getUserBySession(params: SessionPayload): Observable<any> {
    let parameters = new HttpParams().set('session', params.session);
    return this.request('get', 'user/getUserBySession', parameters);
  }

  public resetPassword(params: ResetPasswordPayload): Observable<any> {
    return this.request('patch', 'user/resetPassword', params);
  }


}
