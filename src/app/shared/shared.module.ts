import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchHeightDirective } from './directives/match-height.directive';
import { HttpClientModule } from '@angular/common/http';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    MatchHeightDirective,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CardModule,
    ButtonModule
  ],
  exports: [
    MatchHeightDirective,
    HttpClientModule,
    CardModule,
  ]
})
export class SharedModule { }
