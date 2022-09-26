import { IProduct } from 'src/app/product/product.type';
import { products, defaultProduct, defaultProductsFilter } from './../product.constants';
import { IPagination } from './../../shared/shared.type';
import { IProductPriceFilter, IProductFilter } from './../product.type';
import { FakeProductServiceService } from './../fake-services/fake-product-service.service';
import { ProductService } from './../services/product.service';
import { ProductState } from './product.state';
import { NgxsModule, Store } from '@ngxs/store';
import { TestBed } from '@angular/core/testing';
import { UpdateFilter, UpdateProductPagination, ResetCategoryProducts, ResetCategoryProductsFilter, GetProductById, ResetProduct, GetCategoryProducts } from './product.action';


describe('Product State', () => {

  let store: Store;
  let oldStoreFilter: IProductFilter;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([ProductState])] ,
      providers: [{provide: ProductService, useClass: FakeProductServiceService}]
    })
    .compileComponents();

    store = TestBed.inject(Store);

  });


  beforeEach( () => {
    oldStoreFilter = store.selectSnapshot(ProductState.getFilter)
  })

  it('should update product price Filter', () => {

    const priceFilter: IProductPriceFilter = {
      id: 1,
      startValue: 1,
      endValue: 30000,
      sortType: 0
    }



    store.dispatch(new UpdateFilter({filter: "price", filterValue: {...priceFilter} } ))

    const StoreFilter = store.selectSnapshot(ProductState.getFilter)

    expect(oldStoreFilter).not.toBe(StoreFilter);
    expect(StoreFilter.price).toEqual(priceFilter);

  })


  it('should update product query Filter', () => {

    const queryFilter: string = "test";



    store.dispatch(new UpdateFilter({filter: "query", filterValue: queryFilter} ))

    const StoreFilter = store.selectSnapshot(ProductState.getFilter)

    expect(oldStoreFilter).not.toBe(StoreFilter);
    expect(StoreFilter.query).toEqual(queryFilter);

  })

  it('should update product stars Filter', () => {

    const starsFilter: number = 4;;



    store.dispatch(new UpdateFilter({filter: "stars", filterValue: starsFilter} ))

    const StoreFilter = store.selectSnapshot(ProductState.getFilter)

    expect(oldStoreFilter).not.toBe(StoreFilter);
    expect(StoreFilter.stars).toEqual(starsFilter);

  })

  it('should update product pagination Filter', () => {

    const paginationFilter: IPagination = {
      pageNumber: 3,
      pageSize: oldStoreFilter.pagination.pageSize,
    }

    store.dispatch(new UpdateProductPagination(paginationFilter.pageNumber));

    const StoreFilter = store.selectSnapshot(ProductState.getFilter);

    expect(oldStoreFilter).not.toBe(StoreFilter);
    expect(StoreFilter.pagination).toEqual(paginationFilter);

  })

  it('should get category products list', () => {

    store.dispatch( new GetCategoryProducts(1, defaultProductsFilter) )



  })

  it('should reset products list', () => {


    const oldProductsState = store.selectSnapshot(ProductState.getProductList)


    store.dispatch(new ResetCategoryProducts());


    const newProductsState = store.selectSnapshot(ProductState.getProductList)

    expect(newProductsState).toEqual(products)

    expect(oldProductsState).not.toBe(newProductsState)


    // expect(oldStoreFilter).not.toBe()

  })

  it('should reset products filter', () => {


    store.dispatch(new ResetCategoryProductsFilter());

    const newFilterStore = store.selectSnapshot(ProductState.getFilter);

    const productFilter = store.selectSnapshot(ProductState.getFilter);

    expect(productFilter).toEqual(defaultProductsFilter)

    expect(oldStoreFilter).not.toBe(newFilterStore);

  });

  it('should get product by id', () => {

    store.dispatch(new GetProductById(1));

    const product: IProduct = store.selectSnapshot(ProductState.getProductDetails);

    expect(product).toBeTruthy();
    expect(product.id).toEqual(1);

  });

  it('should reset product', () => {

    store.dispatch(new ResetProduct());

    const product: IProduct = store.selectSnapshot(ProductState.getProductDetails);

    expect(product).toEqual(defaultProduct);

  });

});
