import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSideBarComponent } from './products-side-bar.component';

describe('ProductsSideBarComponent', () => {
  let component: ProductsSideBarComponent;
  let fixture: ComponentFixture<ProductsSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsSideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
