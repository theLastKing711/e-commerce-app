import { IProduct, IProductPriceFilter } from './../product.type';


export interface IProductPriceSortStrategy
{
  sort(product: IProduct, productPriceFilter: IProductPriceFilter): boolean
}

export class AllPriceFilter implements IProductPriceSortStrategy
{
    sort(product: IProduct, productPriceFilter: IProductPriceFilter): boolean {
        return true;
    }
}

export class LessThanPriceFilter implements IProductPriceSortStrategy
{
    sort(product: IProduct, productPriceFilter: IProductPriceFilter): boolean {
        return product.price < productPriceFilter.endValue
    }
}


export class RangePriceFilter implements IProductPriceSortStrategy
{
    sort(product: IProduct, productPriceFilter: IProductPriceFilter): boolean {
        return product.price >= productPriceFilter.startValue
              &&
              product.price <= productPriceFilter.endValue
    }
}


export class GreaterThanOrEqualPriceFilter implements IProductPriceSortStrategy
{
    sort(product: IProduct, productPriceFilter: IProductPriceFilter): boolean {
        return product.price >= productPriceFilter.startValue
    }
}
