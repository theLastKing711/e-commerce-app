import { products } from './../product.constants';
import { defaultPagination, defaultProduct, defaultProductsFilter } from '../product.constants';
import { IPaginatedData, IPagination } from '../../shared/shared.type';
import {  tap } from 'rxjs';
import { ProductService } from '../services/product.service';
import { UpdateFilter, GetCategoryProducts, ResetCategoryProducts, ResetCategoryProductsFilter, UpdateProductPagination, GetProductById, ResetProduct } from './product.action';
import { IProductFilter } from '../product.type';
import { IProduct } from '../product.type';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';

    export class ProductStateModel {

        Products!: IPaginatedData<IProduct>;
        Filter!: IProductFilter;
        Pagination!: IPagination;
        Product!: IProduct;
    }

    @State<ProductStateModel>({
        name: 'products',
        defaults: {
            Products: products,
            Filter: {
              ...defaultProductsFilter
            },
            Pagination: {...defaultPagination},
            Product: {...defaultProduct},
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

        @Selector()
        static getProductDetails(state: ProductStateModel) {
          return state.Product
        }


        @Action(UpdateFilter)
        updateFilter<T extends keyof IProductFilter>({getState, setState}: StateContext<ProductStateModel>, {payload : {filter, filterValue}} : UpdateFilter<T>) {

            const state = getState();

            setState({
                ...state,
                Filter: {...state.Filter, [filter]: filterValue, pagination: {...defaultPagination} }
            });


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


        @Action(GetProductById)
        getProductById({getState, patchState}: StateContext<ProductStateModel>,  { id } : GetProductById)
        {
          const state = getState();

          return this.productService.getProductById(id)
                                    .pipe(
                                      tap(data => {

                                        console.log("data", data)

                                        patchState({...state, Product: {...data}})

                                      })
                                    )

        }

        @Action(ResetProduct)
        resetProduct({getState, patchState}: StateContext<ProductStateModel>)
        {
          const state = getState();

          patchState({...state, Product: {...defaultProduct} })

          const newState = getState();

          console.log("new State", newState)

        }


    }
