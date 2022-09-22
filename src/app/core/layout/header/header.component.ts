import { LogOutUser } from './../../../authentication/store/authentication.action';
import { AuthState } from './../../../authentication/store/authentication.state';
import { Router } from '@angular/router';
import { ICategoryItem } from './../../../category/category.type';
import { IProductItem } from './../../../product/product.type';
import { SharedState } from './../../../shared/store/shared.state';
import { GlobalSearch, SetSearchBarActive, SetSearchBarInActive, ResetSearchList, GlobalSearchInputChanged, OpenMobileSideBar, CloseMobileSideBar } from './../../../shared/store/shared.action';
import { Actions, ofActionDispatched, Select, Store } from '@ngxs/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, debounceTime, takeUntil, Subscription, Subject } from 'rxjs';
import { query } from '@angular/animations';
import { IToken } from 'src/app/authentication/types/auth.model';

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
  @Select(SharedState.getIsMobileSideBarOpen) isMobileSideBarOpen$!: Observable<boolean>;

  @Select(AuthState.getLoggedInUser) loggedUser$!: Observable<IToken>;



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


  onLogOutClicked() {
    this.store.dispatch(new LogOutUser())
  }

  openMobileSideBar()
  {
    this.store.dispatch(new OpenMobileSideBar());
  }

  closeMobileSideBar()
  {
    this.store.dispatch(new CloseMobileSideBar());
  }

}
