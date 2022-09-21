import { IProductCartItem, IProductInvoiceDetails } from './../../../../product.type';
import { IProduct } from 'src/app/product/product.type';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-cart-card',
  templateUrl: './product-cart-card.component.html',
  styleUrls: ['./product-cart-card.component.scss']
})
export class ProductCartCardComponent implements OnInit {

  @Input() product!: IProductInvoiceDetails;

  @Output()  deleteButtonClicked: EventEmitter<number> = new EventEmitter<number>();
  @Output()  updateButtonClicked: EventEmitter<IProductInvoiceDetails> = new EventEmitter<IProductInvoiceDetails>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteButtonClicked(id: number)
  {
    this.deleteButtonClicked.emit(id)
  }

  onUpdateButtonClicked(product: IProductInvoiceDetails, quantityInput: HTMLInputElement)
  {

    const newProduct: IProductInvoiceDetails= {...product, productQuantity: +quantityInput.value}

    this.updateButtonClicked.emit(newProduct)
  }

}
