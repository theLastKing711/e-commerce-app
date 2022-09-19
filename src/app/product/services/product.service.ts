import { Observable } from 'rxjs';
import { IPagination, IPaginatedData } from '../../shared/shared.type';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IProductPriceSortStrategy, LessThanPriceFilter, RangePriceFilter, AllPriceFilter, GreaterThanOrEqualPriceFilter } from '../models/ProductPriceSortStrategy';
import { IProductPriceFilter, SortType, IProductFilter } from '../product.type';
import { Injectable } from '@angular/core';
import { IProduct } from '../product.type';

@Injectable({
  providedIn: 'root'
})


export class ProductService {

  private sortStrategy!: IProductPriceSortStrategy;

  constructor(private httpClient: HttpClient) { }

  public setSortStrategy(sortStrategy: IProductPriceSortStrategy)
  {
    this.sortStrategy = sortStrategy;
  }


  public filterProductByStars(product: IProduct, stars: number)
  {

    if(stars == -1)
    {
      return true;
    }

    return product.rating >= stars
  }

  private getFilterPriceStrategy(key: SortType): IProductPriceSortStrategy
  {
    let sortStratey: IProductPriceSortStrategy;

    switch(key)
    {
      case(SortType.All):
      sortStratey = new AllPriceFilter()
        break;
      case(SortType.LessThan):
        sortStratey = new LessThanPriceFilter()
        break;
      case(SortType.Range):
        sortStratey = new RangePriceFilter();
        break;
      case(SortType.EqualOrGreaterThan):
        sortStratey = new GreaterThanOrEqualPriceFilter();
        break;
    }

    return sortStratey;
  }

  public filterProductByPrice(product: IProduct, priceFilter: IProductPriceFilter)
  {

    this.sortStrategy = this.getFilterPriceStrategy(priceFilter.sortType);

    return this.sortStrategy.sort(product, priceFilter)

  }


  public getCategoryProducts(categoryId: number,
                            filter: IProductFilter
                            ): Observable<IPaginatedData<IProduct>>
  {

    const apiCategoriesUril = `${environment.base_url}AppUserCategories/${categoryId}/products`;

    let params = new HttpParams();

    params = params.set('pageNumber', filter.pagination.pageNumber)
                   .set('pageSize', filter.pagination.pageSize);



    params = params.set('price.startValue', filter.price.startValue)
                    .set('price.endValue', filter.price.endValue)
                    .set('price.sortType', filter.price.sortType)

      params = params.set('stars', filter.stars)


    return this.httpClient.get<IPaginatedData<IProduct>>(apiCategoriesUril, {params: params})


    }

    public getProductById(id: number): Observable<IProduct>
    {

    const apiCategoriesUril = `${environment.base_url}AppUserProducts/${id}`;

    return this.httpClient.get<IProduct>(apiCategoriesUril)


    }

}
