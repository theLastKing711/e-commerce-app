import { StorageService } from './../services/storage.service';
import { ICategoryItem } from './../../category/category.type';
import { IProductInvoice, IProductItem, IProductInvoiceDetails } from './../../product/product.type';
import { tap, map, debounce, debounceTime } from 'rxjs';
import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { SharedService } from "../services/shared.service";
import { AddToProductsCart, GlobalSearch, SetSearchBarActive, SetSearchBarInActive, ResetSearchList } from './shared.action';
import { state } from '@angular/animations';
import { defaultProductsCart } from 'src/app/product/product.constants';


    export class SharedStateModel {
      SearchList!: IProductItem[]
      IsSearchBarActive!: boolean;
      ProductsCart!: IProductInvoice
    }

    @State<SharedStateModel>({
        name: 'shared',
        defaults: {
          SearchList: [],
          IsSearchBarActive: false,
          ProductsCart: {...defaultProductsCart}
        }
    })


    @Injectable()
    export class SharedState {

        constructor(private sharedService: SharedService, private storageService :StorageService) {}

        @Selector()
        static getSearchList(state: SharedStateModel) {
            return state.SearchList;
        }

        @Selector()
        static getIsSearchBarActive(state: SharedStateModel) {
            return state.IsSearchBarActive;
        }

        @Selector()
        static getProductCart(state: SharedStateModel) {
          return state.ProductsCart
        }

        @Selector()
        static getCartItemsCount(state: SharedStateModel) {
          return state.ProductsCart.productInvoiceDetails.reduce((prev, curr) => {
              return prev + curr.productQuantity
          }, 0)
        }

        @Action(SetSearchBarActive)
        setSearchBarActive({getState, setState}: StateContext<SharedStateModel>) {

          const state = getState();

          setState({...state, IsSearchBarActive: true})

          return
        }

        @Action(SetSearchBarInActive)
        setSearchBarInActive({getState, setState}: StateContext<SharedStateModel>) {

          const state = getState();

          setState({...state, IsSearchBarActive: false})

          return
        }

        @Action(GlobalSearch)
        globalSearch({getState, setState}: StateContext<SharedStateModel>,  { query } : GlobalSearch) {

            const state = getState();

            return this.sharedService.searchItems(query)
                                    .pipe(
                                      debounceTime(30000),
                                      tap(data => {

                                        console.log("data", data)

                                        setState({
                                          ...state,
                                          SearchList: [...data.productListDto]
                                      });

                                      })
                                    )

        }

        @Action(ResetSearchList)
        resetSearchList({getState, setState}: StateContext<SharedStateModel>) {

            const state = getState();

            setState({...state, SearchList: []})

        }


        @Action(AddToProductsCart)
        addToProductCart({getState, patchState}: StateContext<SharedStateModel>,  { products } : AddToProductsCart)
        {

          const state = getState()

          const newProductsCart = [...state.ProductsCart.productInvoiceDetails , products ];

          patchState({
            ...state,
              ProductsCart: {...state.ProductsCart, productInvoiceDetails: newProductsCart},
          })

          const newState = getState();

          console.log("new state", newState)

          return;
        }

    }
