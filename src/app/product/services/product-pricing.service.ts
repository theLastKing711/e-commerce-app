import { Injectable } from '@angular/core';
import { IProduct } from '../product.type';

@Injectable({
  providedIn: 'root'
})
export class ProductPricingService {

  constructor() { }


  isProductDiscounted(product: IProduct): boolean
  {
    return product.discountValue != 0;
  }

  calculateActualProductPrice(product: IProduct): number
  {
    if(this.isProductDiscounted(product))
    {
      return product.priceAfterDiscount;
    }
    else
    {
      return  product.price;
    }
  }

  public getProductSavingPercent(product: IProduct): number
  {
    return product.price - product.priceAfterDiscount;
  }

}
