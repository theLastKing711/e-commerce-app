import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchResultBarComponent } from './product-search-result-bar.component';

describe('ProductSearchResultBarComponent', () => {
  let component: ProductSearchResultBarComponent;
  let fixture: ComponentFixture<ProductSearchResultBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSearchResultBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSearchResultBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
