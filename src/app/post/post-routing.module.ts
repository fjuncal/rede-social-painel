import { PostCardComponent } from './post-card/post-card.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  {path: 'post', component: LayoutComponent, children: [
    {path: "form", component: PostFormComponent},
    {path: "form/:id", component: PostFormComponent},
    {path: "unico", component: PostCardComponent},
    {path: "unico/:id", component: PostCardComponent},
    {path: "lista", component: PostListComponent},
    {path: '', redirectTo: "/clientes/lista", pathMatch: 'full'}
  ]},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
