import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../category.type';
import { environment } from 'src/environments/environment';
import { IProduct } from 'src/app/product/product.type';

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements CategoryService {

  categoryApiUrl = `${environment.base_url}AppUserCategories`

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<ICategory[]> {

    const params = new HttpParams().set('pageNumber', 1)
                                   .set('pageSize', 10)
                                   .set('query', '-1')
                                   .set('active', '-1')
                                   .set('direction', 'asc');

    return this.httpClient.get<ICategory[]>(this.categoryApiUrl, {params});

  }

  getCategoryTopSellersProducts(id: number): Observable<IProduct[]> {

    console.log("testing")

    const topSellerProductsInCategory = `${this.categoryApiUrl}/${id}/products/bestSeller`

    return this.httpClient.get<IProduct[]>(topSellerProductsInCategory);
  }


}
