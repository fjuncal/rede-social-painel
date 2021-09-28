import { PostsService } from './../../servicos/posts.service';
import { Post } from './../models/post';
import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Output() postEmitter: EventEmitter = new EventEmitter();

  posts: Post[] = [];
  post: Post;
  constructor(private postService: PostsService, private router: Router) { }

  ngOnInit(): void {
    this.postService.getAll().subscribe(response => {
      this.posts = response;
    })
  }

  expandir(id: number){
    this.postService.getById(id).subscribe(response => {
      this.post = response;
    })
    this.router.navigate([`/post/unico/${id}`])


  }

  remover(id: number){
    this.postService.remover(id).subscribe(response => {
    })
    window.location.reload();
  }

  editar(id: number){
    this.postService.getById(id).subscribe(response => {
      this.post = response;
    });
    this.router.navigate([`/post/form/${id}`])
  }

}
