

    export class GetCategories {
      static readonly type = '[Api Get All Categories]';

      constructor(){}
    }

    export class GetCategoryTopSellersProducts {
      static readonly type = '[Api Get All Top Seller Prodcuts In Category]';

      constructor(public id: number){}
    }

