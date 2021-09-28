import { Comentario } from './../post/models/comentario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  apiUrl: string = "https://localhost:44334/api/comentario";


  constructor(private http: HttpClient) { }

  salvar(comentario: Comentario): Observable<Comentario>{
    return this.http.post<Comentario>(this.apiUrl, comentario);
  }

  getAll(): Observable<Comentario[]>{
    return this.http.get<Comentario[]>(this.apiUrl);
  }

  remover(id: number): Observable<Comentario>{
    return this.http.delete<Comentario>(`${this.apiUrl}/${id}`);
  }

}
