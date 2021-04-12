import { Component, OnInit } from '@angular/core';
import { Article } from '../../model/Article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.scss']
})
export class ListArticleComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.list().subscribe((data) => {
      this.articles = data;
    })
  }

}
