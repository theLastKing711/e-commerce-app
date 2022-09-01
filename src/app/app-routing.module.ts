import { HomePageComponent } from './pages/home-page/home-page.component';
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
    component: HomePageComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
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
