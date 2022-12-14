import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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

    console.log("testing")

    return this.httpClient.get<ICategory[]>(this.categoryApiUrl);

  }

  getCategoryTopSellersProducts(id: number): Observable<IProduct[]> {

    console.log("testing")

    const topSellerProductsInCategory = `${this.categoryApiUrl}/${id}/products/bestSeller`

    return this.httpClient.get<IProduct[]>(topSellerProductsInCategory);
  }


}
