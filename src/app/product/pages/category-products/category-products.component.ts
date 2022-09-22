import { Title, Meta } from '@angular/platform-browser';
import { IPaginatedData, IPagination } from './../../../shared/shared.type';
import { UpdateFilter, GetCategoryProducts, ResetCategoryProducts, ResetCategoryProductsFilter, UpdateProductPagination } from './../../store/product.action';
import { combineLatest, Observable, map, Subscription, filter } from 'rxjs';
import { ProductState } from '../../store/product.state';
import { IProduct, IProductFilter, IProductPrice, SortType, IProductPriceFilter } from './../../product.type';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { priceFilterOptions, starsFilterOptions } from '../../product.constants';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor( private store: Store, private route: ActivatedRoute, private router: Router, private titleService: Title,private  metaService: Meta) {}


  ngOnInit(): void {


    this.titleService.setTitle(`Product Categories of E-commerce Site`)

    this.metaService.addTag({name: "description", content: `list of Products Of Selected Product select on to check out it's details and/or purchase it`})

    this.routerSubscription = this.route.params.subscribe(params => {
      this.id = params['id']

      this.productsSubscription = combineLatest([ this.productFilters$]).pipe(

        map(([filter]) => {

          console.log("third")

          this.store.dispatch(new GetCategoryProducts(
            this.id,
            filter
          ))

        })
      ).subscribe(res => {

      })

    })

  }

  updateProductFilter<T extends keyof IProductFilter>(filter: T, filterValue: IProductFilter[T])
  {
    this.store.dispatch(new UpdateFilter({filter, filterValue}))
  }

  updateProductPaginationPage(pageNumber: number)
  {
    this.store.dispatch(new UpdateProductPagination(pageNumber))
  }

  onProductsPageChange(event: number): void
  {
    const pageNumber = event + 1;

    this.updateProductPaginationPage(pageNumber)

  }

  onNavigationLinkClicked(event: number)
  {
    this.router.navigate(['categories', event])
  }

  trackByProductFn(index: number, product: IProduct)
  {
    return product.id;
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
