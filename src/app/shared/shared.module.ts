import { PaginatorModule } from 'primeng/paginator';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchHeightDirective } from './directives/match-height.directive';
import { HttpClientModule } from '@angular/common/http';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { CustomPrimePaginatorComponent } from './components/custom-prime-paginator/custom-prime-paginator.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [
    MatchHeightDirective,
    CustomPrimePaginatorComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    PaginatorModule,
    NgxImageZoomModule,
    InputNumberModule
  ],
  exports: [
    MatchHeightDirective,
    HttpClientModule,
    CardModule,
    CustomPrimePaginatorComponent,
    NgxImageZoomModule,
    ButtonModule,
    InputNumberModule
  ]
})
export class SharedModule { }
