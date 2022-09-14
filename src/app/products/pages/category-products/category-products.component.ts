import { IPaginatedData, IPagination } from './../../../shared/shared.type';
import { UpdateFilter, GetCategoryProducts, ResetCategoryProducts, ResetCategoryProductsFilter } from './../../store/product.action';
import { combineLatest, Observable, map, Subscription } from 'rxjs';
import { ProductState } from '../../store/product.state';
import { IProduct, IProductFilter, IProductPrice, SortType, IProductPriceFilter } from './../../product.type';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { priceFilterOptions, starsFilterOptions } from '../../product.constants';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.scss']
})
export class CategoryProductsComponent implements OnInit, OnDestroy{

  routerSubscription!: Subscription;
  productsSubscription!: Subscription;

  id!: number;

  starsFilterOptions: number[] = starsFilterOptions;
  priceFilterOptions: IProductPrice[] = priceFilterOptions;

  productsList!: Observable<IPaginatedData<IProduct>>;


  @Select(ProductState.getProductList) productsList$!: Observable<IPaginatedData<IProduct>>;
  @Select(ProductState.getFilter) productFilters$!: Observable<IProductFilter>;
  @Select(ProductState.getPagination) pagination$!: Observable<IPagination>;

  constructor( private store: Store, private route: ActivatedRoute) {



   }


  ngOnInit(): void {

    console.log("alsdjlj")

    this.routerSubscription = this.route.params.subscribe(params => {
      this.id = params['id']

      this.productsSubscription = combineLatest([this.pagination$, this.productFilters$]).pipe(

        map(([pagination, filter]) => {



          this.store.dispatch(new GetCategoryProducts(
            this.id,
            pagination,
            filter
          ))


        })
      ).subscribe(res => {

      })

    })

  }

  UpdateProductFilter<T extends keyof IProductFilter>(filter: T, filterValue: IProductFilter[T])
  {
    this.store.dispatch(new UpdateFilter({filter, filterValue}))
  }

  ngOnDestroy(): void {
      if(this.routerSubscription)
      {
        this.routerSubscription.unsubscribe();
      }

      if(this.productsSubscription)
      {
        this.productsSubscription.unsubscribe();
      }

    this.store.dispatch(new ResetCategoryProducts())
    this.store.dispatch(new ResetCategoryProductsFilter())

  }

}
