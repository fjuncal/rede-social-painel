import { Usuario } from './../login/models/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AutenticacaoService {
  apiUrl: string = "https://localhost:44334/api/Usuario";

  constructor(private http: HttpClient) { }

  salvar(usuario: Usuario): Observable<any>{
    return this.http.post<any>(this.apiUrl, usuario);
  }

  getById(id): Observable<any>{
    return this.http.get<any>(this.apiUrl + `/${id}`)
  }

  getAll(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.apiUrl);
  }
}
