import { IProduct } from '../../../product/product.type';
import { GetCategoryTopSellersProducts } from './../../store/category.action';
import { ICategory } from './../../category.type';
import { Observable } from 'rxjs';
import { CategoryState } from './../../store/category.state';
import { GetCategories } from '../../store/category.action';
import { AfterContentChecked, Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { categoryPhotos } from '../../category.constants';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

  mainCarouselPhotos: string[] = categoryPhotos;

  @Select(CategoryState.getCategoriesList) categoriesList$!: Observable<ICategory[]>;
  @Select(CategoryState.getTopSellerCategoryProducts) topSellerCategoryProducts$!: Observable<IProduct[]>;


  constructor(private store: Store, private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {

    this.titleService.setTitle("E-commerce.com Your Home Your Base.");
    this.metaService.addTag({name: 'description', content: 'Free shipping on millions of items. Get the best of Shopping and Entertainment with Prime. Enjoy low prices and great deals on the largest selection of ...'})

    this.store.dispatch(new GetCategories()).subscribe(result => {
      console.log("result", result)
    })

    this.store.dispatch(new GetCategoryTopSellersProducts(1))

  }


  trackByFn(index: number, item: ICategory) {
    return item.id
  }

  isNotEmpty(value: number)
  {
    return value  > 0;
  }

}
