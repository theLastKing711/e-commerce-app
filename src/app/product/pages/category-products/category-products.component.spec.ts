import { IProduct } from 'src/app/product/product.type';
import { IPaginatedData } from 'src/app/shared/shared.type';
import { FakeProductServiceService } from './../../fake-services/fake-product-service.service';
import { ProductService } from './../../services/product.service';
import { ProductState } from './../../store/product.state';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';

import { CategoryProductsComponent } from './category-products.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CategoryProductsComponent', () => {
  let component: CategoryProductsComponent;
  let fixture: ComponentFixture<CategoryProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
      NgxsModule.forRoot([ProductState]),
      // HttpClientTestingModule,
      // RouterTestingModule
    ],
      declarations: [ CategoryProductsComponent, ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({
              id: 1,
            }),
          },
        },
        {
          provide: ProductService,
          useClass: FakeProductServiceService
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('category products list should have items on startup', () => {

    let productsList: IPaginatedData<IProduct>;

    // fixture.detectChanges();

    component.productsList$.subscribe(x => {
      productsList = {...x}

      console.log("new x", x)

      expect(x.data.length).toBe(6)
    })

  })

  it('category products list should be filterd using Price Filter', () => {

    let productsList: IPaginatedData<IProduct>;

    component.updateProductFilter("price", {id: 1, startValue: 1, endValue: 20000, sortType: 0})

    fixture.detectChanges();

    component.productsList$.subscribe(x => {
      productsList = {...x}
      expect(productsList.data.length).toBe(6)
    })

  })

});
