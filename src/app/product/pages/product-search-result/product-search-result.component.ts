import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct, IProductFilter, IProductPrice } from '../../product.type';
import { priceFilterOptions, starsFilterOptions } from '../../product.constants';
import { GetCategoryProducts, ResetCategoryProductsFilter, UpdateFilter, UpdateProductPagination } from '../../store/product.action';
import { ProductState } from '../../store/product.state';
import { combineLatest, map, Observable, Subscription } from 'rxjs';
import { IPaginatedData } from 'src/app/shared/shared.type';

@Component({
  selector: 'app-product-search-result',
  templateUrl: './product-search-result.component.html',
  styleUrls: ['./product-search-result.component.scss']
})
export class ProductSearchResultComponent implements OnInit, OnDestroy {

  testSubscription!: Subscription;
  routeSubscription!: Subscription;

  starsFilterOptions: number[] = starsFilterOptions;
  priceFilterOptions: IProductPrice[] = priceFilterOptions;

  query!: string;


  @Select(ProductState.getFilter) productFilters$!: Observable<IProductFilter>;
  @Select(ProductState.getProductList) productsList$!: Observable<IPaginatedData<IProduct>>;

  constructor(private store: Store, private route: ActivatedRoute, private router: Router, private titleService: Title, private metaServcie: Meta) { }

  ngOnInit(): void {

    this.titleService.setTitle("E-commerce.com Products Search Result")
    this.metaServcie.addTag({name: "description", content: "E-commerce.com Products Search Result select a product to check it's details"})

    this.route.queryParams.subscribe(params => {

      console.log('query')

      const query = params["query"]

      this.query = query

      this.updateProductFilter("query", query)



    })


    this.testSubscription = combineLatest([ this.productFilters$]).pipe(
      map(([filter]) => {

        console.log("thirds")

        this.store.dispatch(new GetCategoryProducts(
          -1,
          filter
        ))

      })
    ).subscribe(res => {
      // this.testSubscription.unsubscribe();
    })

  }

  updateProductFilter<T extends keyof IProductFilter>(filter: T, filterValue: IProductFilter[T])
  {
    this.store.dispatch(new UpdateFilter({filter, filterValue}))
  }

  ngOnDestroy(): void {
    if(this.testSubscription)
      this.testSubscription.unsubscribe();

    this.store.dispatch(new ResetCategoryProductsFilter());

  }


  onNavigationLinkClicked(event: number)
  {
    this.router.navigate(['categories', event])
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

  trackByProductFn(index: number, product: IProduct)
  {
    return product.id;
  }

}
