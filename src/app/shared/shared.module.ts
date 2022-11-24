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
import {ProgressBarModule} from 'primeng/progressbar';
import { HoverStateDirective } from '../hover-state.directive';
import { DelayRenderingDirective } from './directives/delay-rendering.directive';

@NgModule({
  declarations: [
    MatchHeightDirective,
    CustomPrimePaginatorComponent,
    HoverStateDirective,
    DelayRenderingDirective,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    PaginatorModule,
    NgxImageZoomModule,
    InputNumberModule,
    ProgressBarModule
  ],
  exports: [
    MatchHeightDirective,
    HttpClientModule,
    CardModule,
    CustomPrimePaginatorComponent,
    NgxImageZoomModule,
    ButtonModule,
    InputNumberModule,
    ProgressBarModule,
    HoverStateDirective,
    DelayRenderingDirective
  ]
})
export class SharedModule { }
