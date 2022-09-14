interface IProductBase {
  id: number;
  price: number;
  name: string;
  isBestSeller: boolean;
}

export interface IProduct extends IProductBase {

  path: string;
  rating: number;
  price: number;

}

export interface IProductFilter {

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
