import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchBarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
