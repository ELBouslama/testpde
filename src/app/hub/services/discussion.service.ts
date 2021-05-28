import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from 'src/app/components/baseURL';

const API = baseURL + 'discussion/';

@Injectable({
  providedIn: 'root'
})
export class DiscussionService {

  constructor(private http: HttpClient) { }

  getDiscussionByID(id): Observable<any> {
    return this.http.get<any>(API + id);
  }

}
