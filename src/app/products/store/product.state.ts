import { defaultPagination, defaultProductsFilter } from './../product.constants';
import { IPaginatedData, IPagination } from './../../shared/shared.type';
import { filter, tap } from 'rxjs';
import { ProductService } from './../services/product.service';
import { UpdateFilter, GetCategoryProducts, ResetCategoryProducts, ResetCategoryProductsFilter, UpdateProductPagination } from './product.action';
import { IProductFilter } from './../product.type';
import { IProduct } from '../product.type';


    import { State, Selector, Action, StateContext } from '@ngxs/store';
    // import { AddProduct, UpdateProduct, DeleteProduct, SetSelectedProduct } from '../actions/user.action';
    import { Injectable } from '@angular/core';
import {products } from '../product.constants';

    export class ProductStateModel {

        Products!: IPaginatedData<IProduct>;
        Filter!: IProductFilter;
        Pagination!: IPagination

    }

    @State<ProductStateModel>({
        name: 'products',
        defaults: {
            Products: products,
            Filter: {
              ...defaultProductsFilter
            },
            Pagination: defaultPagination
        }
    })


    @Injectable()
    export class ProductState {

        constructor(private productService: ProductService) {}

        @Selector()
        static getProductList(state: ProductStateModel) {
            return state.Products;
        }

        @Selector()
        static getFilter(state: ProductStateModel) {
          return state.Filter;
        }

        @Selector()
        static getPagination(state: ProductStateModel) {
          return state.Pagination;
        }

        @Action(UpdateFilter)
        updateFilter<T extends keyof IProductFilter>({getState, setState}: StateContext<ProductStateModel>, {payload : {filter, filterValue}} : UpdateFilter<T>) {

            const state = getState();
            console.log("filter2", filter)

            console.log("filter 2 value", filterValue)

            setState({
                ...state,
                Filter: {...state.Filter, [filter]: filterValue, pagination: {...defaultPagination} }
            });

            console.log("state", getState())

            return;

        }

        @Action(UpdateProductPagination)
        updateProductPagination<T extends keyof IProductFilter>({getState, setState}: StateContext<ProductStateModel>, { payload }: UpdateProductPagination) {

            const state = getState();

            setState({
                ...state,
                Filter: {...state.Filter, pagination: {...state.Pagination, pageNumber: payload} }
            });

            return;

        }


        @Action(GetCategoryProducts)
        getCategoryProducts({getState, patchState}: StateContext<ProductStateModel>, { payload, filter }: GetCategoryProducts)
        {

          return this.productService.getCategoryProducts(payload, filter)
                                    .pipe(
                                      tap(data => {

                                        const state = getState();

                                        patchState({
                                          ...state, Products: {...data, data: [...data.data]},
                                        })
                                      })
                                    )

        }

        @Action(ResetCategoryProducts)
        resetCategoryProducts({getState, patchState}: StateContext<ProductStateModel>)
        {

          const state = getState();

          patchState({...state, Products: {...products} })

        }

        @Action(ResetCategoryProductsFilter)
        resetCategoryProductsFilter({getState, patchState}: StateContext<ProductStateModel>)
        {
          const state = getState();

          patchState({...state, Filter: {...defaultProductsFilter} })

        }


        // @Action(GetCategoryProducts)
        // getCategoryProductsFilterdByPrice({getState, patchState}: StateContext<ProductStateModel>, { payload, pagination, filter }: GetCategoryProductsFilterdByPrice)
        // {
        //   return this.productService.getCategoryProducts(payload, pagination, filter)
        //                      .pipe(
        //                       tap(data => {

        //                         const state = getState();
        //                         console.log("state", state)
        //                         patchState({
        //                           ...state, Products: {...data}, Filter: {...filter, price: {...filter}}
        //                         })
        //                       })
        //                      )
        // }


    }
