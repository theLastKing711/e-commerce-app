import { IPagination } from '../../../../../shared/shared.type';
import { Component, Input, OnInit } from '@angular/core';
import { max } from 'rxjs';

@Component({
  selector: 'app-product-search-result-bar',
  templateUrl: './product-search-result-bar.component.html',
  styleUrls: ['./product-search-result-bar.component.scss']
})
export class ProductSearchResultBarComponent implements OnInit {

  @Input() pagination!: IPagination;
  @Input() totalCount!: number;


  constructor() { }

  ngOnInit(): void {
  }

  calculatePageSize(pageNumber: number, pageSize: number)
  {
    return pageNumber * pageSize
  }

  calculatePageEnd(pageNumber: number, pageSize: number, totalCount: number): number
  {

    const pageEndSize = this.calculatePageSize(pageNumber, pageSize)

    return this.isGreaterThan(pageEndSize, totalCount) ? totalCount : pageEndSize;
  }

  calculateTotalCount(pageNumber: number, pageSize: number, totalCount: number): number
  {
    const pageEndSize = this.calculatePageSize(pageNumber, pageSize);

    return this.isGreaterThan(pageEndSize, totalCount) ? totalCount : pageEndSize;
  }

  private isGreaterThan(firstValue: number, secondValue: number): boolean
  {
    return firstValue > secondValue;
  }

}
