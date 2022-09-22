import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RatingModule } from 'primeng/rating';
import { CardModule } from 'primeng/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryProductsComponent } from './pages/category-products/category-products.component';
import { ProductCardComponent } from './pages/category-products/components/product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { ProductsSideBarComponent } from './pages/category-products/components/products-side-bar/products-side-bar.component';
import { ProductSearchResultBarComponent } from './pages/category-products/components/product-search-result-bar/product-search-result-bar.component';
import {PaginatorModule} from 'primeng/paginator';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { ProductCartCardComponent } from './pages/shopping-cart/components/product-cart-card/product-cart-card.component';
import { ProductSearchResultComponent } from './pages/product-search-result/product-search-result.component';

@NgModule({
  declarations: [
    CategoryProductsComponent,
    ProductCardComponent,
    ProductsSideBarComponent,
    ProductSearchResultBarComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    ProductCartCardComponent,
    ProductSearchResultComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    CardModule,
    RatingModule,
    FormsModule,
    SharedModule,
    PaginatorModule

  ]
})
export class ProductsModule { }
