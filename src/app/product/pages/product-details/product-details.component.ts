import { ProductPricingService } from './../../services/product-pricing.service';
import { GetProductReviewStats } from './../../store/product.action';
import { Meta, Title } from '@angular/platform-browser';
import { IProductInvoiceDetails, IProductReviewStats } from './../../product.type';
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
  @Select(ProductState.getProductReviewsDetails) productReviewDetails$!: Observable<IProductReviewStats>;

  product!: IProduct
  isReviewRatingListActive: boolean = false;

  productQuantity: number = 1;

  id!: number;

  constructor(public route: ActivatedRoute,
               private store: Store,
               private titleService: Title,
               private metaService: Meta,
               private productPricingService: ProductPricingService

             ) { }

  ngOnInit(): void {

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

  getReviewStats(id: number)
  {
    this.store.dispatch(new GetProductReviewStats(this.id))
  }

  handleItemHovered(event: boolean)
  {

    this.isReviewRatingListActive = event;

    if(event)
    {
      this.getReviewStats(this.id)
    }

    console.log("Event", event);
  }

  isProductDiscounted(product: IProduct): boolean
  {
    return this.productPricingService.isProductDiscounted(product);
  }

  calculateProductDiscount(product: IProduct): number
  {
    return this.productPricingService.calculateActualProductPrice(product);
  }

  public getProductSavingPercent(product: IProduct): number
  {
    return this.productPricingService.getProductSavingPercent(product);
  }

  ngOnDestroy(): void {
      this.store.dispatch(new ResetProduct());
  }

}
