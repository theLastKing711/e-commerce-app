import { Meta, Title } from '@angular/platform-browser';
import { IProductInvoiceDetails } from './../../product.type';
import { ProductState } from '../../store/product.state';

import { GetProductById, ResetProduct } from '../../store/product.action';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from 'src/app/product/product.type';
import { AddToProductsCart } from 'src/app/shared/store/shared.action';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  productSubscription!: Subscription;

  @Select(ProductState.getProductDetails) product$!: Observable<IProduct>;

  product!: IProduct

  productQuantity: number = 1;

  id!: number;

  constructor(public route: ActivatedRoute, private store: Store, private titleService: Title, private metaService: Meta ) { }

  ngOnInit(): void {



    console.log("alkdjsla")

    this.route.params
              .subscribe(param => {

                const productId  = param["productId"]

                console.log("productId", productId)


                this.id = productId

                this.store.dispatch(new GetProductById(productId))

                this.productSubscription = this.product$.subscribe(res => {
                  this.product = res

                  this.titleService.setTitle(`E-commerce.com details of product ${this.product.name.slice(10)}`)

                  this.metaService.addTag({name: "description", content: `this is details page of product ${this.product.name} you can purchase it or check it's list of photos`})

                })

              })
  }

  addProductToCart(product: IProduct, quantity: number)
  {

    const productInvoiceDetails :IProductInvoiceDetails = {
      id: product.id,
      categoryId: product.categoryId,
      productQuantity: quantity,
      name: product.name,
      path: product.path,
      price: product.price
    };

    this.store.dispatch( new AddToProductsCart(productInvoiceDetails))

  }

  ngOnDestroy(): void {
      this.store.dispatch(new ResetProduct());
  }

}
