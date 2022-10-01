import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsReviewStatsComponent } from './product-details-review-stats.component';

describe('ProductDetailsReviewStatsComponent', () => {
  let component: ProductDetailsReviewStatsComponent;
  let fixture: ComponentFixture<ProductDetailsReviewStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsReviewStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsReviewStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
