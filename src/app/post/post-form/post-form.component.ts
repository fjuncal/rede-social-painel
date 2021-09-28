import { Observable } from 'rxjs';
import { Post } from './../models/post';
import { PostsService } from './../../servicos/posts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  post: Post;
  editando: boolean = false;

  constructor(private postService: PostsService,private router: Router,  private activatedRoute: ActivatedRoute) {
    this.post = new Post();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.post.id = urlParams['id'];
      if(this.post.id){
        this.postService.getById(this.post.id).subscribe(response => {
          this.post = response;
        })
        this.editando = true;
      }
    })
  }

  cadastrar(){
    this.postService.salvar(this.post).subscribe(response => {
      this.post = response;
      this.router.navigate([`/post/lista`])
    })
    console.log(this.post);
  }

  editar(){
    this.postService.editar(this.post.id, this.post).subscribe(response => {
      this.post = response;
      this.router.navigate([`/post/lista`])
    })
  }

}
