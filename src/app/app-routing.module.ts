import { ProductsModule } from './products/products.module';
import { HomePageComponent } from './category/pages/home-page/home-page.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/sign-up',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadChildren: () => import("./category/category.module").then(m => m.CategoryModule)
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'categories',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
  }
  // {
  //   path: 'users',
  //   loadChildren: () => import('./app-user/app-user.module').then(m => m.AppUserModule),
  //   canActivate: [AuthGuard]
  // },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
