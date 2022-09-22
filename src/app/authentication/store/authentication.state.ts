import { AlertifyService } from './../../shared/services/alertify.service';
import { IToken } from './../types/auth.model';
import { tap } from 'rxjs';
import { AuthService } from './../services/auth.service';
import { IProductInvoice, IProductItem } from './../../product/product.type';
import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { defaultProductsCart } from 'src/app/product/product.constants';
import { LogInUser, LogOutUser } from './authentication.action';
import { defaultUser } from '../authentication.constants';


    export class AuthStateModel {
      user!: IToken | null
    }

    @State<AuthStateModel>({
        name: 'authentication',
        defaults: {
          user: null
        }
    })


    @Injectable()
    export class AuthState {

        constructor(private authService: AuthService,private alertifyService: AlertifyService) {}

        @Selector()
        static getLoggedInUser(state: AuthStateModel) {
            return state.user;
        }

        @Action(LogInUser)
        logInUser({getState, setState}: StateContext<AuthStateModel>, { user }: LogInUser) {

          const state = getState();

          return this.authService.login(user)
                          .pipe(
                            tap(data => {

                              this.alertifyService.success("User logged In successfully")
                              setState({...state, user: {...data}})

                            })
                          )

        }

        @Action(LogOutUser)
        logOutUser({getState, setState}: StateContext<AuthStateModel>) {

          const state = getState();

          setState({...state, user: null})

        }



    }
