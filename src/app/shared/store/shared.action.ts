import { IProductCartItem } from './../../product/product.type';
import { IProductInvoiceDetails } from "src/app/product/product.type";

export class GlobalSearchInputChanged {
  static readonly type = '[Search Input Changed]';

  constructor(public query: string) {}

}

export class GlobalSearch {

  static readonly type = '[Api Search Items]';

  constructor(public query: string) {}

}

export class ResetSearchList {

  static readonly type = '[Header Rest Search List]';

  constructor() {}

}



export class SetSearchBarActive {

  static readonly type = '[SearchBar Set Active]';

  constructor() {}

}

export class SetSearchBarInActive {

  static readonly type = '[SearchBar Set InActive]';

  constructor() {}

}

export class AddToProductsCart {

  static readonly type = '[Product Add To Cart]';

  constructor(public product: IProductInvoiceDetails) {}

}

 export class GetCartProductsFromApi {

  static readonly type = '[Api Get Products Using Cart Ids]';

  constructor() {}

}


export class RemoveProductFromCart {

  static readonly type = '[Shopping-Cart Remove Product From Cart]';

  constructor(public id: number) {}

}

export class UpdateProductInCart {

  static readonly type = '[Shopping-Cart Update Product In Cart]';

  constructor(public product: IProductInvoiceDetails) {}

}

export class OpenMobileSideBar {

  static readonly type = '[Header Open Mobile Sidebar]';

  constructor() {}

}


export class CloseMobileSideBar {

  static readonly type = '[Header Close Mobile Sidebar]';

  constructor() {}

}
