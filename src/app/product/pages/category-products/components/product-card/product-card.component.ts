import { IProduct } from '../../../../product.type';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductPricingService } from 'src/app/product/services/product-pricing.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {


  @Input() product!: IProduct;
  @Output() NavigationLinkClicked: EventEmitter<number> = new EventEmitter<number>();
  @Output() ProductLinkClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public productPricingService: ProductPricingService) { }

  ngOnInit(): void {
  }


  isProductBestsSeller(isBestSeller: boolean)
  {
    return isBestSeller == true;
  }

  isProductDiscounted(product: IProduct)
  {
    return this.productPricingService.isProductDiscounted(product);
  }

  calculateActualProductPrice(product: IProduct)
  {
    return this.productPricingService.calculateActualProductPrice(product);
  }

  showBestSellerLabel(isBestSeller: boolean): string {

    const bestSellerLabel = this.isProductBestsSeller(isBestSeller) ? "Best Seller" : "";

    return bestSellerLabel;

  }

  isProductAvailableAndLowOnStock(product: IProduct): boolean
  {
    return this.isProductAvailable(product) && this.isProductLowOnStock(product);
  }

  isProductAvailable(product: IProduct): boolean
  {
    return product.inventoryCurrentAmount > 0;
  }

  isProductLowOnStock(product: IProduct): boolean
  {
    return product.inventoryCurrentAmount <= 10;
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
