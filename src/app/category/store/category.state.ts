import { GetCategories } from './product.action';
import { CategoryService } from './../services/category.service';
import { ICategory } from './../category.type';
    import { tap } from 'rxjs';
    import { State, Selector, Action, StateContext } from '@ngxs/store';
    import { Injectable } from '@angular/core';

    export class CategoryStateModel {
        Categories!: ICategory[]

    }

    @State<CategoryStateModel>({
        name: 'categories',
        defaults: {
          Categories: []
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

        @Action(GetCategories)
        GetCategories({getState, patchState}: StateContext<CategoryStateModel>)
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

    }
