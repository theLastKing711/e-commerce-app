import { IProductPrice, IProductPriceFilter, SortType } from './../../../../product.type';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-products-side-bar',
  templateUrl: './products-side-bar.component.html',
  styleUrls: ['./products-side-bar.component.scss']
})
export class ProductsSideBarComponent implements OnInit {


  @Input() starsFilterOptions!: number[];

  @Input() selectedStarFilter!: number;

  @Input() priceFilterOptions!: IProductPrice[];

  @Input() selectedPriceFilter!: IProductPriceFilter;


  @Output() updateStarsFilter: EventEmitter<number> = new EventEmitter<number>()

  @Output() updatePriceFilter: EventEmitter<IProductPriceFilter> = new EventEmitter<IProductPriceFilter>()


  constructor() { }

  ngOnInit(): void {
  }

  updateProductStarsFilter(stars: number): void
  {
    this.updateStarsFilter.emit(stars)
  }

  updateProductPriceFilter(productPriceFilter: IProductPriceFilter): void
  {
    this.updatePriceFilter.emit(productPriceFilter)
  }


  isFilterSelected(value: number)
  {
    return value != -1;
  }

  isStarFilterActive(star: number, starFilterValue: number)
  {
    return star == starFilterValue
  }

  isPriceFilterActive(priceId: number, priceFilterId: number)
  {
    return priceId == priceFilterId
  }


}
