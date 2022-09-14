import { IPagination } from './../../shared/shared.type';
import { IProductFilter } from './../product.type';


    export class UpdateFilter<T extends keyof IProductFilter> {
      static readonly type = '[Product] Update Filter'

      constructor(public payload: {filter: T, filterValue: IProductFilter[T] }){}
    }

    export class GetCategoryProducts {
      static readonly type = '[Product Get category products filtered by stars]';

      constructor(public payload: number, public pagination: IPagination, public filter: IProductFilter){}
    }

    export class ResetCategoryProducts {
      static readonly type = '[Product Reset Products List]';

      constructor(){}
    }

    export class ResetCategoryProductsFilter {
      static readonly type = '[Product Reset Products Filter]';

      constructor(){}
    }

    // export class GetCategoryProductsFilterdByPrice {
    //   static readonly type = '[Product Get category products filtered by price]';

    //   constructor(public payload: number){}
    // }

