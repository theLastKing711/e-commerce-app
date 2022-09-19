import { IPagination } from './../shared/shared.type';
interface IProductBase {
  id: number;
  price: number;
  name: string;
  isBestSeller: boolean;
}

export interface IProduct extends IProductBase {
  categoryId: number;
  path: string;
  rating: number;
  price: number;
  totalReviews: number;
  details: IDetails[];
}

export interface IDetails {
  id: number;
  productId: number;
  text: string;
}

export interface IProductFilter {

  pagination: IPagination;
  price: IProductPriceFilter;
  stars: number;

}

export interface IProductPrice
{
  text: string;
  price: IProductPriceFilter
}

export interface IProductPriceFilter {
    id: number;
    startValue: number;
    endValue: number;
    sortType: SortType;
}


export enum SortType {
  All,
  LessThan,
  Range,
  EqualOrGreaterThan
}


export interface IProductInvoice {

  appUserId: number;
  productInvoiceDetails: IProductInvoiceDetails[];

}

export interface IProductInvoiceDetails {

  id: number;
  categoryId: number;
  productQuantity: number;
  price: number;
  path: string;

}


export interface IProductItem {

  id: number;
  categoryId: number;
  name: string;

}
