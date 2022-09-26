import { NgxsModule, Store } from '@ngxs/store';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([]) ] ,
      declarations: [ TestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // store = TestBed.inject(Store);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
