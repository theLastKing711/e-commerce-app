import { IProduct } from './../../../../product.type';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {


  @Input() product!: IProduct;


  constructor() { }

  ngOnInit(): void {
  }


  testNumber: number = 3;

  isProductBestsSeller(isBestSeller: boolean)
  {
    return isBestSeller == true;
  }


  showBestSellerLabel(isBestSeller: boolean): string {

    const bestSellerLabel = this.isProductBestsSeller(isBestSeller) ? "Best Seller" : "";

    return bestSellerLabel;

  }

}
