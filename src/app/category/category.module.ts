import { CarouselSliderComponent } from './pages/home-page/components/carousel-slider/carousel-slider.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoryPreviewCardComponent } from './pages/home-page/components/category-preview-card/category-preview-card.component';
import { ProductsRoutingModule } from './category.routing.module';
import {CarouselModule} from 'primeng/carousel';


@NgModule({
  declarations: [
                  HomePageComponent,
                  CategoryPreviewCardComponent,
                  CarouselSliderComponent
                ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
    CarouselModule
  ]
})
export class CategoryModule { }
