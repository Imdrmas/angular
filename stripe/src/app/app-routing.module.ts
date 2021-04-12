import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListArticleComponent } from './article/list-article/list-article.component';
import { DetailsArticleComponent } from './article/details-article/details-article.component';

const routes: Routes = [
  {path: '', component: ListArticleComponent},
  {path: 'lists', component: ListArticleComponent},
  {path: 'details/:id', component: DetailsArticleComponent},
  {path: '**', redirectTo: 'lists', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
