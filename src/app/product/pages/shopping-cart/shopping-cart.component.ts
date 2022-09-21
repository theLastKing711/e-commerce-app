import { IProductInvoiceDetails } from 'src/app/product/product.type';
import { RemoveProductFromCart, UpdateProductInCart } from './../../../shared/store/shared.action';
import { Observable } from 'rxjs';
import { SharedState } from './../../../shared/store/shared.state';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { IProduct, IProductCartItem } from '../../product.type';
import { GetCartProductsFromApi } from 'src/app/shared/store/shared.action';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  @Select(SharedState.getProducts) cartProducts!: Observable<IProductInvoiceDetails[]>;
  @Select(SharedState.getCartItemsTotalPrice) cartTotalPrice!: Observable<number>;
  @Select(SharedState.getCartItemsCount) cartItemsCount!: Observable<number>;


  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetCartProductsFromApi());
  }

  onProductItemDeleteClicked(event: number)
  {

    const productId = event;

    this.store.dispatch(new RemoveProductFromCart(productId));

  }

  onProductItemUpdateClicked($event: IProductInvoiceDetails)
  {

    const product = {...$event}

    console.log("product", product)

    this.store.dispatch(new UpdateProductInCart(product));
  }


}
