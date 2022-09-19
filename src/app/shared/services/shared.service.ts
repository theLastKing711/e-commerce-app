import { ICategory } from './../../category/category.type';
import { IProduct } from 'src/app/product/product.type';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private apiStatsUrl: string = `${environment.base_url}stats`;

  constructor(private httpClient: HttpClient) { }

  searchItems(query: string): Observable<{productListDto: IProduct[]}>
  {

    const queryParams = new HttpParams().set("query", query);

    const searchApiUrl = `${this.apiStatsUrl}/SearchItems`;

    return this.httpClient.get<{productListDto: IProduct[]}>(searchApiUrl, {params: queryParams})

  }

}