import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPrimePaginatorComponent } from './custom-prime-paginator.component';

describe('CustomPrimePaginatorComponent', () => {
  let component: CustomPrimePaginatorComponent;
  let fixture: ComponentFixture<CustomPrimePaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPrimePaginatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomPrimePaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
