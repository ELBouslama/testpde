import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from 'src/app/components/baseURL';
import { Subject } from 'src/app/components/classes/subject';

const API = baseURL + 'subject/';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(API);
  }

  postSubject(subject: Subject): Observable<Subject> {
    return this.http.post<Subject>(API, subject);
  }

  deleteSubject(id: string): Observable<void> {
    return this.http.delete<void>(API + id);
  }
}
