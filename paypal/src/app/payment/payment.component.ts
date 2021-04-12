import { Component, OnInit } from '@angular/core';
import { Order } from './Order';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  order: Order = {} as Order;
  product: Product = {} as Product;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => {
        this.productService.findProduct(this.route.snapshot.params.id).subscribe((product) => {
          this.product = product;
          this.order.price = this.product.price;
          this.order.description = this.product.description;

        })
      }
    )
  }

  ngOnInit(): void {
  }

  pay() {
    console.log(this.order);
    this.productService.pay(this.order).subscribe((order) => {
   //   this.order = order;

    })
  }
}
