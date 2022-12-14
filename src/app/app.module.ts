import { AuthState } from './authentication/store/authentication.state';
import { SharedState } from './shared/store/shared.state';
import { CoreModule } from './core/core.module';
import { CategoryState } from './category/store/category.state';
import {  ProductState } from './product/store/product.state';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { LoginComponent } from './authentication/login/login.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import {FileUploadModule} from 'primeng/fileupload';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { TokenInterceptor } from './Interceptors/TokenInterceptor';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    ReactiveFormsModule,
    FileUploadModule,
    SharedModule,
    CoreModule,
    NgxsModule.forRoot([ProductState, CategoryState, SharedState, AuthState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      key: [
          'shared.ProductsCart.productInvoiceDetails',
          'authentication.user'
      ]
    })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
