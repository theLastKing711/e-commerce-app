import { IProduct } from './../../../products/product.type';
import { GetCategoryTopSellersProducts } from './../../store/category.action';
import { ICategory } from './../../category.type';
import { Observable } from 'rxjs';
import { CategoryState } from './../../store/category.state';
import { GetCategories } from '../../store/category.action';
import { AfterContentChecked, Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { categoryPhotos } from '../../category.constants';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

  mainCarouselPhotos: string[] = categoryPhotos;

  @Select(CategoryState.getCategoriesList) categoriesList$!: Observable<ICategory[]>;
  @Select(CategoryState.getTopSellerCategoryProducts) topSellerCategoryProducts$!: Observable<IProduct[]>;


  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetCategories()).subscribe(result => {
      console.log("result", result)
    })

    this.store.dispatch(new GetCategoryTopSellersProducts(1))

  }


}
