import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from 'src/app/components/baseURL';
import { Post } from 'src/app/components/classes/post';

const API = baseURL + 'post/';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPostsByDiscussionID(discussion_id: string): Observable<Post[]> {
    return this.http.get<Post[]>(API + discussion_id);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(API, post);
  }

  editPost(id: string): Observable<Post> {
      return this.http.put<Post>(API,id)
  }

}
