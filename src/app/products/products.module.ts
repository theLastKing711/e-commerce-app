import { SharedModule } from './../shared/shared.module';
import { RatingModule } from 'primeng/rating';
import { CardModule } from 'primeng/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CategoryProductsComponent } from './pages/category-products/category-products.component';
import { ProductCardComponent } from './pages/category-products/components/product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { ProductsSideBarComponent } from './pages/category-products/components/products-side-bar/products-side-bar.component';
import { ProductSearchResultBarComponent } from './pages/category-products/components/product-search-result-bar/product-search-result-bar.component';

@NgModule({
  declarations: [
    CategoryProductsComponent,
    ProductCardComponent,
    ProductsSideBarComponent,
    ProductSearchResultBarComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CardModule,
    RatingModule,
    FormsModule,
    SharedModule

  ]
})
export class ProductsModule { }
