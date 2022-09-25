import { ICategoryService } from './../category.type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from 'src/app/product/product.type';
import { ICategory } from '../category.type';



const fakeCategories: ICategory[] = [
  {
    id: 1,
    name: "first category",
    path: "alskdalkd"
  },
  {
    id: 2,
    name: "second category",
    path: "alskdalkd"
  },
  {
    id: 3,
    name: "third category",
    path: "alskdalkd"
  }
]

const fakeProductts: IProduct[] = [
  {
    id: 1,
    categoryId: 1,
    details: [],
    fullImagePath: "lakds",
    isBestSeller:true,
    name: "first product",
    path: "alksdl",
    price: 200,
    rating: 100,
    thumbImagePath: "123",
    totalReviews: 10
  },
  {
    id: 2,
    categoryId: 1,
    details: [],
    fullImagePath: "lakds",
    isBestSeller:true,
    name: "first product",
    path: "alksdl",
    price: 200,
    rating: 100,
    thumbImagePath: "123",
    totalReviews: 10
  },
  {
    id: 3,
    categoryId: 1,
    details: [],
    fullImagePath: "lakds",
    isBestSeller:true,
    name: "first product",
    path: "alksdl",
    price: 200,
    rating: 100,
    thumbImagePath: "123",
    totalReviews: 10
  },
]

@Injectable({
  providedIn: 'root'
})
export class FakeCategoryService implements ICategoryService {


  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<ICategory[]> {

    return of(fakeCategories);

  }

  getCategoryTopSellersProducts(id: number): Observable<IProduct[]> {


    return of(fakeProductts);
  }

}
