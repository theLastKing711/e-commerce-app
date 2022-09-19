import { Router } from '@angular/router';
import { ICategoryItem } from './../../../category/category.type';
import { IProductItem } from './../../../product/product.type';
import { SharedState } from './../../../shared/store/shared.state';
import { GlobalSearch, SetSearchBarActive, SetSearchBarInActive, ResetSearchList, GlobalSearchInputChanged } from './../../../shared/store/shared.action';
import { Actions, ofActionDispatched, Select, Store } from '@ngxs/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, debounceTime, takeUntil, Subscription, Subject } from 'rxjs';
import { query } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  destroy$ = new Subject<void>();

  @Select(SharedState.getIsSearchBarActive) isSearchBarActive$!: Observable<boolean>;
  @Select(SharedState.getSearchList) searchList$!: Observable<IProductItem[]>;
  @Select(SharedState.getCartItemsCount) cartItemsCount$!: Observable<number>;

  onSearchTermChanged(event: string) {

    this.store.dispatch(new GlobalSearchInputChanged(event))

  }

  onSearchInputFocused(event: boolean) {
    this.store.dispatch(new SetSearchBarActive());
  }


  onSearchInputBlurred(event: any) {

    this.store.dispatch(new SetSearchBarInActive())
    this.store.dispatch(new ResetSearchList());

  }

  onSearchLinkClicked(event: [number, number])
  {
    const newRoute = `/categories/${event[0]}/products/${event[1]}`;

    this.router.navigate([newRoute])

  }

  constructor(private store: Store, private actions$: Actions, private router: Router) {
    actions$
      .pipe(
        ofActionDispatched(GlobalSearchInputChanged),
        debounceTime(500),
     )
     .subscribe(payload =>
      {
        this.store.dispatch(new GlobalSearch(payload.query.toLowerCase()))
      }
      )
  }

  ngOnInit(): void {
  }



}
