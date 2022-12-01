import { AlertifyService } from './../services/alertify.service';

import { IProductInvoice, IProductItem, IProductInvoiceDetails, IProductCartItem } from './../../product/product.type';
import { tap, debounceTime } from 'rxjs';
import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { SharedService } from "../services/shared.service";
import { AddToProductsCart, GlobalSearch, SetSearchBarActive, SetSearchBarInActive, ResetSearchList, UpdateProductInCart, OpenMobileSideBar, CloseMobileSideBar, RemoveProductFromCart, GetCartProductsFromApi, PurchaseItems, ResetProductsCart } from './shared.action';
import { defaultProductsCart } from 'src/app/product/product.constants';


    export class SharedStateModel {
      SearchList!: IProductItem[]
      IsSearchBarActive!: boolean;
      ProductsCart!: IProductInvoice;
      isMobileSideBarOpen!: boolean;
    }

    @State<SharedStateModel>({
        name: 'shared',
        defaults: {
          SearchList: [],
          IsSearchBarActive: false,
          ProductsCart: {...defaultProductsCart},
          isMobileSideBarOpen: false
        }
    })


    @Injectable()
    export class SharedState {

        constructor(private sharedService: SharedService,
                    private alertifyService: AlertifyService
                    ) {}

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

        @Selector()
        static getCartItemsTotalPrice(state: SharedStateModel) {
          return state.ProductsCart.productInvoiceDetails.reduce((prev, curr) => {
              return prev + (curr.productQuantity * curr.price)
          }, 0)
        }

        @Selector()
        static getProducts(state: SharedStateModel) {
          return state.ProductsCart.productInvoiceDetails;
        }

        @Selector()
        static getIsMobileSideBarOpen(state: SharedStateModel) {
          return state.isMobileSideBarOpen;
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
        addToProductCart({getState, patchState}: StateContext<SharedStateModel>,  { product } : AddToProductsCart)
        {

          const state = getState()

          const ProductAlreadyExist = state.ProductsCart.productInvoiceDetails.find(x => x.id == product.id);


          if(ProductAlreadyExist)
          {
            const newProductsCart = state.ProductsCart.productInvoiceDetails.map(
              x => x.id == product.id ? {...x, productQuantity: x.productQuantity + product.productQuantity} : {...x})

              patchState({
                ...state,
                  ProductsCart: {...state.ProductsCart, productInvoiceDetails: newProductsCart},
              })

          }
          else
          {
            const newProductsCart = [...state.ProductsCart.productInvoiceDetails , product ];

            patchState({
              ...state,
                ProductsCart: {...state.ProductsCart, productInvoiceDetails: newProductsCart},
            })
          }



          const newState = getState();

          console.log("new state", newState)

          return;
        }

        @Action(GetCartProductsFromApi)
        getCartProductsFromApi({getState, patchState}: StateContext<SharedStateModel>)
        {

          const state = getState()

          const productIds = state.ProductsCart
                                  .productInvoiceDetails
                                  .map(x => x.id);

          return this.sharedService.getProductsUsingIds(productIds)
                                   .pipe(
                                    tap(products => {

                                      patchState({...state, ProductsCart: {...state.ProductsCart, productInvoiceDetails:
                                        products.map(product => {
                                          const productQuantity = state.ProductsCart.productInvoiceDetails.find(x => x.id == product.id)?.productQuantity!;
                                          return {...product as IProductCartItem, productQuantity: productQuantity }
                                        })
                                       }

                                      })

                                    })
                                   )
        }

        @Action(RemoveProductFromCart)
        removeProductFromCart({getState, patchState}: StateContext<SharedStateModel>, { id }: RemoveProductFromCart)
        {

          const state = getState()

          const ProductCartList = state.ProductsCart.productInvoiceDetails.filter(x => x.id != id)

          patchState({...state,

                       ProductsCart: {...state.ProductsCart, productInvoiceDetails: ProductCartList}
                    })

        }

        @Action(UpdateProductInCart)
        updateProductCartItem({getState, patchState}: StateContext<SharedStateModel>, { product }: UpdateProductInCart)
        {

          const state = getState()

          const newProductsList: IProductInvoiceDetails[] = state.ProductsCart
                                                                 .productInvoiceDetails
                                                                 .map(x =>
                                                                    x.id == product.id ?
                                                                             {...x, productQuantity: product.productQuantity}
                                                                             :
                                                                             {...x}
                                                                  )

          patchState({...state,
                       ProductsCart: {...state.ProductsCart, productInvoiceDetails: newProductsList}
                    })

        }

        @Action(PurchaseItems)
        pruchaseProducts({getState, patchState, dispatch}: StateContext<SharedStateModel>, { cartItems } : PurchaseItems)
        {

          const state = getState();

          return this.sharedService.purchaseProducts(cartItems)
                                   .pipe(tap(x =>
                                    {
                                      dispatch(new ResetProductsCart());
                                      this.alertifyService.success("Items purchased successfully")
                                    }
                                    ))

        }

        @Action(ResetProductsCart)
        ResetProductList({getState, patchState}: StateContext<SharedStateModel>)
        {
          const state = getState();

          patchState({...state, ProductsCart: defaultProductsCart})


        }

        @Action(OpenMobileSideBar)
        openMobileSideBar({getState, setState}: StateContext<SharedStateModel>) {

            const state = getState();

            setState({...state,isMobileSideBarOpen: true})

        }

        @Action(CloseMobileSideBar)
        closeMobileSideBar({getState, setState}: StateContext<SharedStateModel>) {

            const state = getState();

            setState({...state,isMobileSideBarOpen: false})

        }

    }
