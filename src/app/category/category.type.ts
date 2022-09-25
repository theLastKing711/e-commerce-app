import { Observable } from "rxjs";
import { IProduct } from "../product/product.type";

export interface ICategory {

  id: number;
  name: string;
  path: string;

}

export interface ICategoryItem {
  id: number;
  name: string;
}


export interface ICategoryService {

  getCategories(): Observable<ICategory[]>;

  getCategoryTopSellersProducts(id: number): Observable<IProduct[]>;
}
