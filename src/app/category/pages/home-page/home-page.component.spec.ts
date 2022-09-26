import { SharedModule } from './../../../shared/shared.module';
import { IProduct } from 'src/app/product/product.type';
import { ICategory } from './../../category.type';
import { GetCategories } from './../../store/category.action';
import { FakeCategoryService } from './../../fakeServcies/fake-category.service';
import { CategoryService } from './../../services/category.service';
import { CategoryState } from './../../store/category.state';
import { NgxsModule, Store } from '@ngxs/store';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestingHelpersService } from 'src/app/shared/services/testing-helpers.service';


describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;


  // @Component({selector: 'app-carousel-slider', template: ''})
  // class CarouselSliderStub {}

  // @Component({selector: 'app-category-preview-card', template: ''})
  // class CategoryPreviewCardStub { }

  // @Component({selector: 'app-category-carousel', template: ''})
  // class CategoryCarouselStub {}
  let testingService: TestingHelpersService;
  let store: Store;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        // HttpClientTestingModule,
        SharedModule,
        NgxsModule.forRoot([CategoryState])
      ],
      declarations: [ HomePageComponent],
      providers: [{ provide: CategoryService, useClass: FakeCategoryService }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testingService = TestBed.inject(TestingHelpersService)
    store = TestBed.inject(Store);

  });

  it('should create home page', () => {

    expect(component).toBeTruthy();
  });

  it('categories List should have items on startup', async () => {


    // const mainCategories = store.selectSnapshot(CategoryState.getCategoriesList);

    let categoriesList: ICategory[] = [];

    component.categoriesList$.subscribe(x => {
      categoriesList = [...x]
    })


    expect(categoriesList.length).toBe(3);

  })

  it("top selleing products list should have items on startup", async () => {

    // const topSellingProduct = store.selectSnapshot(CategoryState.getTopSellerCategoryProducts);

    let topSellingProducts: IProduct[] = [];

    component.topSellerCategoryProducts$.subscribe(x =>
      {
        topSellingProducts = [...x];
      }
    )

    expect(topSellingProducts.length).toBe(3);


  })

});
