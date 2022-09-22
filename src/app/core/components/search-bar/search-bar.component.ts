import { Store } from '@ngxs/store';
import { query } from '@angular/animations';
import { Router } from '@angular/router';
import { debounceTime, fromEvent } from 'rxjs';
import { IProductFilter, IProductItem } from './../../../product/product.type';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UpdateFilter } from 'src/app/product/store/product.action';

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

  constructor(private router: Router, private store: Store) { }

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

  onSearchInputKeyPressed(event: KeyboardEvent, searchButton: HTMLInputElement)
  {

    if(event.key == "Enter")
    {
      searchButton.click();

      this.onInputBlured();
    }

  }

  onProductLinkClicked(categoryId: number, productId: number)
  {
    this.ItemLinkClicked.emit([categoryId, productId]);
  }

  getSearchProductsLink(inputText: HTMLInputElement)
  {

    const inputValue = inputText.value;

    const searchResultPage = `/categories/products/search-result`

    // this.updateProductFilter("query", inputValue);

    this.router.navigate(
      [searchResultPage],
      {queryParams: { query: inputValue}}
      );


  }

  updateProductFilter<T extends keyof IProductFilter>(filter: T, filterValue: IProductFilter[T])
  {
    this.store.dispatch(new UpdateFilter({filter, filterValue}))
  }

  TrackByProductFn(index: number, product: IProductItem)
  {
    return product.id;
  }

}
