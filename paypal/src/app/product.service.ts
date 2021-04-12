import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './payment/Order';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  findProducts(): Observable<any[]> {
    return this.http.get<any[]>(
      `http://localhost:8080/api/findProducts`,
    );
  }
  findProduct(id:number): Observable<any> {
    return this.http.get<any>(
      `http://localhost:8080/api/findProduct/${id}`,
    );
  }
  pay(order: Order): Observable<any> {
    return this.http.post<any>(
      `http://localhost:8080/api/pay`, order
    );
  }

  cancel(): Observable<any> {
    return this.http.get<any>(
      `http://localhost:8080/api/pay/cancel`,
    );
  }

  success(idPayment: number, idPayer: number): Observable<any> {
    return this.http.get<any>(
      `http://localhost:8080/api/pay/success/${idPayment}/${idPayer}`,
    );
  }
}
