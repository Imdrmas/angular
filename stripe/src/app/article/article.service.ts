import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentIntentDto } from '../model/PaymentIntentDto';
import { Article } from '../model/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  stripeURL = 'http://localhost:8888/article/';

  constructor(private httpClient: HttpClient) {}

  public list(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.stripeURL + 'lists');
  }

  public details(id: number): Observable<any> {
    return this.httpClient.get<any>(this.stripeURL + `details/${id}`);
  }
}
