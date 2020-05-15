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
  type: string
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

export interface UpdateStatusPayload {
  _id: string,
  status: string
}

@Injectable({
  providedIn: 'root'
})
export class AdminActionsService {
  private token: string;

  constructor(private http: HttpClient) { }

  public getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('adminToken')
    }
    return this.token
  }

  private saveToken(token: string): void {
    localStorage.setItem('adminToken', token);
    this.token = token;
  }

  private request(method: 'post'|'get'|'patch', type: string, params?: any, toBeAuthorized?: boolean): Observable<any> {
    let base;
    let requestHeader = {};
    if (toBeAuthorized) {
      requestHeader = {
        headers: { 
          Authorization: `Bearer ${this.getToken()}` 
        }
      }
    }
    if (method === 'post') {
      base = this.http.post(`http://localhost:3000/${type}`, params, requestHeader);
    } else if (method === 'patch') {
      base = this.http.patch(`http://localhost:3000/${type}`, params, requestHeader);
    } else {
        let requestParameters:any = {
          params: params
        };
        if (toBeAuthorized) {
          requestParameters.headers = requestHeader;
        }
        base = this.http.get(`http://localhost:3000/${type}`, requestParameters);
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
    return this.request('post', 'auth/signIn', params, false);
  }

  public forgotPassword(params: ForgotPasswordPayload): Observable<any> {
    return this.request('post', 'auth/forgotPassword', params, false);
  }

  public getUserBySession(params: SessionPayload): Observable<any> {
    let parameters = new HttpParams().set('session', params.session);
    return this.request('get', 'user/getUserBySession', parameters, true);
  }

  public resetPassword(params: ResetPasswordPayload): Observable<any> {
    return this.request('patch', 'user/resetPassword', params, true);
  }

  public getUsersList(params): Observable<any> {
    return this.request('post', 'admin/usersList', params, true);
  }

  public updateUserStatus(params: UpdateStatusPayload): Observable<any> {
    return this.request('patch', 'admin/updateStatus', params, true);
  }

}
