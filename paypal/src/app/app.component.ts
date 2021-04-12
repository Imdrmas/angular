import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  products: Product[] = [];

constructor(private productService: ProductService) {

}
  ngOnInit(): void {
   this.productService.findProducts().subscribe((data) => {
     this.products = data;
   })
  }
}
