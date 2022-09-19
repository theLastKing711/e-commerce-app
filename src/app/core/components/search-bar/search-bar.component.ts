import { debounceTime, fromEvent } from 'rxjs';
import { IProductItem } from './../../../product/product.type';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() isSearchBarActive!: boolean;
  @Input() searchList!: IProductItem[];

  @Output() searchInputFocuesed: EventEmitter<boolean> = new EventEmitter();
  @Output() searchInputBlurred: EventEmitter<boolean> = new EventEmitter();
  @Output() searchTermChanged: EventEmitter<string> = new EventEmitter();
  @Output() ItemLinkClicked:  EventEmitter<[number, number]> = new EventEmitter();

  isInputFocused: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log("searchList", this.searchList)
  }

  onInputFocused()
  {

    this.isInputFocused = true;
  }

  onInputBlured()
  {
    this.isInputFocused = false;

    setTimeout(() => {
      this.searchInputBlurred.emit(true)

    }, 100)

  }

  onSearchInputChanged(event: any)
  {
     const query = event.target.value;

     this.searchTermChanged.emit(query)
  }

  onSearchInputFocused(event: any)
  {
     const query = event.target.value;

    this.searchInputFocuesed.emit(query)
  }

  onProductLinkClicked(categoryId:number, productId:number) {

    this.ItemLinkClicked.emit([categoryId, productId]);
  }

}
