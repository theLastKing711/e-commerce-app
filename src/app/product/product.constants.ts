import { query } from '@angular/animations';
import { IPaginatedData, IPagination } from '../shared/shared.type';
import { IProduct, IProductPrice, IProductPriceFilter, SortType, IProductInvoice } from './product.type';
export const products: IPaginatedData<IProduct> = {
  pageNumber: 1,
  pageSize: 5,
  totalCount: 0,
  data:
      [
        // {
        //   id: 1,
        //   price: 200,
        //   isBestSeller: true,
        //   rating: 3,
        //   image:  "https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL320_.jpg",
        //   name: "alskdfj klasdfklasjdflk jasldkfj laskdjflkasdjfl alskdfj klasdfklasjdflk jasldkfj laskdjflkasdjfl"
        // },
        // {
        //   id: 2,
        //   price: 250,
        //   isBestSeller: true,
        //   rating: 4,
        //   image:  "https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL320_.jpg",
        //   name: "aslkdjf laskdjf lkasdfk jasdklfj alskdfj klasdfklasjdflk jasldkfj laskdjflkasdjfl"
        // },
        // {
        //   id: 3,
        //   price: 100,
        //   isBestSeller: false,
        //   rating: 4,
        //   image:  "https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL320_.jpg",
        //   name: "alsd laksdjf laskdjf lasjdflk jasdlkfj asldjf laskdjf lkasjdfl kasjdlkfj aslkdfj laksdjf lkasdfjl kasjdf"
        // },
        // {
        //   id: 4,
        //   price: 100,
        //   isBestSeller: false,
        //   rating: 1,
        //   image:  "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71Llge105IL._AC_UL320_.jpg",
        //   name: "alsd laksdjf laskdjf lasjdflk jasdlkfj asldjf laskdjf lkasjdfl kasjdlkfj aslkdfj laksdjf lkasdfjl kasjdf"
        // },
        // {
        //   id: 5,
        //   price: 100,
        //   isBestSeller: false,
        //   rating: 3,
        //   image:  "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71AGOX9MORL._AC_UL320_.jpg",
        //   name: "alsd laksdjf laskdjf lasjdflk jasdlkfj asldjf laskdjf lkasjdfl kasjdlkfj aslkdfj laksdjf lkasdfjl kasjdf"
        // },
        // {
        //   id: 6,
        //   price: 15,
        //   isBestSeller: false,
        //   rating: 5,
        //   image:  "https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL320_.jpg",
        //   name: "alsd laksdjf laskdjf lasjdflk jasdlkfj asldjf laskdjf lkasjdfl kasjdlkfj aslkdfj laksdjf lkasdfjl kasjdf"
        // },
        // {
        //   id: 7,
        //   price: 75,
        //   isBestSeller: false,
        //   rating: 1,
        //   image:  "https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL320_.jpg",
        //   name: "alsd laksdjf laskdjf lasjdflk jasdlkfj asldjf laskdjf lkasjdfl kasjdlkfj aslkdfj laksdjf lkasdfjl kasjdf"
        // },
        // {
        //   id: 8,
        //   price: 400,
        //   isBestSeller: false,
        //   rating: 2,
        //   image:  "https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL320_.jpg",
        //   name: "alsd laksdjf laskdjf lasjdflk jasdlkfj asldjf laskdjf lkasjdfl kasjdlkfj aslkdfj laksdjf lkasdfjl kasjdf"
        // },
        // {
        //   id: 9,
        //   price: 25,
        //   isBestSeller: true,
        //   rating: 2,
        //   image:  "https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL320_.jpg",
        //   name: "alsd laksdjf laskdjf lasjdflk jasdlkfj asldjf laskdjf lkasjdfl kasjdlkfj aslkdfj laksdjf lkasdfjl kasjdf"
        // },
      ]

}


export const starsFilterOptions: number[] = [1, 2, 3, 4, 5]

export const priceFilterOptions: IProductPrice[] = [
  {
    price: {id: 1, startValue: 0, endValue: 25, sortType: SortType.LessThan} ,
    text: "Under $25"
  },
  {
    price: {id: 2, startValue:25 , endValue: 50, sortType: SortType.Range},
    text: "$25 to $50"
  },
  {
    price: {id: 3,startValue:50, endValue: 100, sortType: SortType.Range},
    text: "$50 to $100"
  },
  {
    price: {id: 4, startValue:100 , endValue: 200, sortType: SortType.Range},
    text: "$100 to $200"
  },
  {
    price: {id: 5, startValue:200 , endValue:  99999, sortType: SortType.EqualOrGreaterThan},
    text: "$200 & Above"
  }
];



export const defaultPagination: IPagination = {
  pageNumber: 1,
  pageSize: 5
}


export const defaultProductsFilter = {
  pagination: {
    pageNumber: 1,
    pageSize: 5
  },
  price: {
    id: -1,
    startValue: 1,
    endValue: 1000000,
    sortType: SortType.All
  },
  stars: -1,
  query: ""
}


export const defaultProduct: IProduct = {

  id: 0,
  categoryId: 0,
  name: "",
  isBestSeller: false,
  path: '',
  price: 0,
  totalReviews: 0,
  rating: 0,
  details: [],
  thumbImagePath: "",
  fullImagePath: "",
  discountValue: 0,
  priceAfterDiscount: 0

}

export const defaultProductsCart: IProductInvoice = {
  appUserId: -1,
  productInvoiceDetails: []
}
