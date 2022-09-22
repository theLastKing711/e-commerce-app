import { IProduct } from '../../../../../product/product.type';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-carousel',
  templateUrl: './category-carousel.component.html',
  styleUrls: ['./category-carousel.component.scss']
})
export class CategoryCarouselComponent implements OnInit {

  @Input() products!: IProduct[];
  @Input() categoryTitle!: string;

  responsiveOptions: any;

  constructor() {

    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 4,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 3,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];

  }

  ngOnInit(): void {
  }

  getProductPageLink(categoryId: number, productId: number)
  {
    return `/categories/${categoryId}/products/${productId}`;
  }

}
