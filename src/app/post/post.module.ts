import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostFormComponent } from './post-form/post-form.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostCardComponent } from './post-card/post-card.component';


@NgModule({
  declarations: [
    PostFormComponent,
    PostListComponent,
    PostCardComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class PostModule { }
