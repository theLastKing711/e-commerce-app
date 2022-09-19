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

  constructor(public products: IProductInvoiceDetails) {}

}

