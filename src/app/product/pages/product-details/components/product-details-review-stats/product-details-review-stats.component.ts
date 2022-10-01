import { IProduct, IProductReviewStats } from 'src/app/product/product.type';
import { products } from './../../../../product.constants';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details-review-stats',
  templateUrl: './product-details-review-stats.component.html',
  styleUrls: ['./product-details-review-stats.component.scss']
})
export class ProductDetailsReviewStatsComponent implements OnInit {

  @Input() productReviewStats!: IProductReviewStats;
  @Input() isViewActive: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  isActive(state: boolean)
  {
    return state == true;
  }

}
