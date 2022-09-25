import { FakeCategoryService } from './../../fakeServcies/fake-category.service';
import { CategoryService } from './../../services/category.service';
import { CategoryState } from './../../store/category.state';
import { NgxsModule, Store } from '@ngxs/store';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CategoryRoutingModule } from '../../category.routing.module';
import { SharedModule } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { CoreModule } from 'src/app/core/core.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;


  @Component({selector: 'app-carousel-slider', template: ''})
  class CarouselSliderStub {}

  @Component({selector: 'app-category-preview-card', template: ''})
  class CategoryPreviewCardStub { }

  @Component({selector: 'app-category-carousel', template: ''})
  class CategoryCarouselStub {}

  let store: Store;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        CommonModule,
        SharedModule,
        CategoryRoutingModule,
        CarouselModule,
        BrowserModule,
        AppRoutingModule,
        CardModule,
        ButtonModule,
        ReactiveFormsModule,
        FileUploadModule,
        SharedModule,
        CoreModule,
        AppRoutingModule,
      ],
      declarations: [ HomePageComponent, NgxsModule.forRoot([CategoryState]),
      CarouselSliderStub, CategoryCarouselStub, CategoryPreviewCardStub
    ],
      providers: [{CategoryService, useClass: FakeCategoryService}, ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // store = TestBed.inject(Store);

  });

  it('should create home page', () => {

    expect(component).toBeTruthy();
  });
});
