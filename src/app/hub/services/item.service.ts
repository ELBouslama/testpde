import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from 'src/app/components/baseURL';
import { Item } from 'src/app/components/classes/item';

const API = baseURL + 'discussion/'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getItemsBySubjectID(subjectID: string): Observable<any> {
    return this.http.get<any>(API + "subject/" + subjectID);
  }
}
