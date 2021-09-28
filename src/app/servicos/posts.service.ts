import { Post } from './../post/models/post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  apiUrl: string = "https://localhost:44334/api/post";


  constructor(private http: HttpClient) { }

  getAll(): Observable<Post[]>{
    return this.http.get<Post[]>(this.apiUrl);
  }

  getById(id: number): Observable<Post>{
    return this.http.get<any>(`${this.apiUrl}/${id}`)
  }
  salvar(post: Post): Observable<Post>{
    return this.http.post<Post>(this.apiUrl, post);
  }

  remover(id: number): Observable<Post>{
    return this.http.delete<Post>(`${this.apiUrl}/${id}`);
  }

  editar(id: number, post: Post): Observable<Post>{
    return this.http.put<Post>(`${this.apiUrl}/${id}`, post);
  }
}
