import { IProduct } from '../../../../product.type';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {


  @Input() product!: IProduct;
  @Output() NavigationLinkClicked: EventEmitter<number> = new EventEmitter<number>();
  @Output() ProductLinkClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }


  isProductBestsSeller(isBestSeller: boolean)
  {
    return isBestSeller == true;
  }


  showBestSellerLabel(isBestSeller: boolean): string {

    const bestSellerLabel = this.isProductBestsSeller(isBestSeller) ? "Best Seller" : "";

    return bestSellerLabel;

  }

  linkClicked(id: number)
  {
    this.NavigationLinkClicked.emit(id);
  }

  onProductLinkClicked()
  {
    this.ProductLinkClicked.emit(true);
  }

}
