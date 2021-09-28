import { Post } from './../models/post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostsService } from './../../servicos/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  post: Post;

  constructor(private postService: PostsService, private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient) {
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
      }
    })
  }

  teste(){
    console.log(this.post);

  }

}
