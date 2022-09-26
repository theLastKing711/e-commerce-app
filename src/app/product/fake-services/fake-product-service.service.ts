import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPaginatedData } from 'src/app/shared/shared.type';
import { IProduct, IProductFilter } from '../product.type';



@Injectable({
  providedIn: 'root'
})


export class FakeProductServiceService {

  fakePaginatedProducts: IPaginatedData<IProduct> = {
    pageNumber: 1,
    pageSize: 5,
    totalCount: 6,
    data: [
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
      {
        id: 4,
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
        id: 5,
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
        id: 6,
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
  }

  fakeProduct: IProduct =
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
  }


  constructor() { }

  public getCategoryProducts(categoryId: number,
    filter: IProductFilter
    ): Observable<IPaginatedData<IProduct>>
  {

    console.log("alksjd", this.fakePaginatedProducts)

    return of(this.fakePaginatedProducts);
  }

  public getProductById(id: number): Observable<IProduct>
  {
    console.log("alksjb")
    return of(this.fakeProduct)
  }

}

