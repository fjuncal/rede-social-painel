import { ComentarioService } from './../../servicos/comentario.service';
import { Post } from './../models/post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostsService } from './../../servicos/posts.service';
import { Component, OnInit } from '@angular/core';
import { Comentario } from '../models/comentario';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  post: Post;
  comentario: Comentario;
  autor: string;
  texto: string;
  todosComentarios: Comentario[] = [];

  constructor(private postService: PostsService, private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient, private comentarioService: ComentarioService) {
    this.post = new Post();
    this.comentario = new Comentario();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.post.id = urlParams['id'];
      if(this.post.id){
        this.postService.getById(this.post.id).subscribe(response => {
          this.post = response;
        })
      }
    })
    this.comentarioService.getAll().subscribe(response => {
      this.todosComentarios = response;
    })
  }

  cadastrarComentario(){
    this.comentarioService.salvar(this.comentario).subscribe(response => {
    })
    this.router.navigate([`/post/lista`])

  }

  remover(id: number){
    this.comentarioService.remover(id).subscribe(response => {

    });
    window.location.reload();

  }

}
