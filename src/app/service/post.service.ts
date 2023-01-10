import { Post } from './../model/Post';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'http://localhost:3000/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getPosts() {
    return this.http.get('http://localhost:3000/posts');
  }

  postPosts(post: Post): Observable<Post> {
    return this.http.post<Post>(url, JSON.stringify(post) , this.httpOptions);
  }

  postDelete(id: number): Observable<Post> {
    return this.http.delete<Post>(`${url}/${id}`, this.httpOptions);
  }
}
