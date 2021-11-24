import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/IProduct';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.scss']
})
export class ProductCardsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.getProducts(data);
    })
  }

  getProducts(data: any):void {
    this.products = data;
  }

}
