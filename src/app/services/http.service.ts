import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public baseUrl: string = environment.baseUrl;

  public postRequestWithBody(url, requestBody): Observable<{}> {
    const finalUrl = this.baseUrl + url;
    return this.http.post<any>(finalUrl, requestBody);
  }

  public postRequestWithFormData(url, requestBody): Observable<{}> {
    const finalUrl = this.baseUrl + url;
    return this.http.post<any>(finalUrl, requestBody);
  }
}
