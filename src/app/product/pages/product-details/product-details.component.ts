import { IProductInvoiceDetails } from './../../product.type';
import { ProductState } from '../../store/product.state';

import { GetProductById } from '../../store/product.action';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/product/product.type';
import { AddToProductsCart } from 'src/app/shared/store/shared.action';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productSubscription!: Subscription;

  @Select(ProductState.getProductDetails) product$!: Observable<IProduct>;

  product!: IProduct

  productQuantity: number = 1;

  id!: number;

  constructor(public route: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {

    this.route.params
              .subscribe(param => {

                const productId  = param["productId"]

                this.id = productId

                this.store.dispatch(new GetProductById(productId))

                this.productSubscription = this.product$.subscribe(res => {
                  this.product = res
                })

              })
  }

  addProductToCart(product: IProduct, quantity: number)
  {

    const productInvoiceDetails :IProductInvoiceDetails = {
      id: product.id,
      categoryId: product.categoryId,
      productQuantity: quantity,
      path: product.path,
      price: product.price
    };

    this.store.dispatch( new AddToProductsCart(productInvoiceDetails))

  }

}
