import { IProduct } from './../../products/product.type';
import { GetCategories, GetCategoryTopSellersProducts } from './category.action';
import { CategoryService } from './../services/category.service';
import { ICategory } from './../category.type';
    import { tap } from 'rxjs';
    import { State, Selector, Action, StateContext } from '@ngxs/store';
    import { Injectable } from '@angular/core';

    export class CategoryStateModel {
        Categories!: ICategory[];
        TopSellerProducts!: IProduct[]

    }

    @State<CategoryStateModel>({
        name: 'categories',
        defaults: {
          Categories: [],
          TopSellerProducts: []
        }
    })


    @Injectable()
    export class CategoryState {

        constructor(private categoryService: CategoryService) {
        }

        @Selector()
        static getCategoriesList(state: CategoryStateModel) {
            return state.Categories;
        }

        @Selector()
        static getTopSellerCategoryProducts(state: CategoryStateModel) {
            return state.TopSellerProducts;
        }

        @Action(GetCategories)
        getCategories({getState, patchState}: StateContext<CategoryStateModel>)
        {

          return this.categoryService.getCategories()
                             .pipe(
                              tap(data => {

                                const state = getState();
                                console.log("state", state)
                                patchState({
                                  ...state, Categories: [...data]
                                })
                              })
                             )
        }

        @Action(GetCategoryTopSellersProducts)
        getCategoryTopSellersProducts({getState, patchState}: StateContext<CategoryStateModel>, { id } :GetCategoryTopSellersProducts)
        {

          return this.categoryService.getCategoryTopSellersProducts(id)
                             .pipe(
                              tap(data => {

                                console.log("data", data)

                                const state = getState();
                                console.log("state", state)
                                patchState({
                                  ...state, TopSellerProducts: [...data]
                                })
                                console.log("new state", state)
                              })
                             )
        }

    }
