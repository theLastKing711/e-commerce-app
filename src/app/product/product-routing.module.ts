import { ProductSearchResultComponent } from './pages/product-search-result/product-search-result.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { CategoryProductsComponent } from './pages/category-products/category-products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

const routes: Routes = [
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent
  },
  {
    path: 'products/search-result',
    component:  ProductSearchResultComponent
  },
  {
    path: ':id',
    component: CategoryProductsComponent
  },
  {
    path: ':id/products/:productId',
    component: ProductDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
