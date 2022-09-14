import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselPaginationService {

  constructor() { }

  next<T>(mainIndex: number, list: T[])
  {

    if(this.isLastItem(mainIndex, list))
    {
      return 0;
    }

    return mainIndex + 1;
  }

  prev<T>(mainIndex: number, list: T[])
  {

    if(this.isFirstItem(mainIndex))
    {
      return list.length - 1;
    }

    return mainIndex - 1;
  }

  isItemActive<T>(mainIndex: number, itemIndex: number)
  {
    return mainIndex == itemIndex;
  }

  isItemNext<T>(mainIndex: number, itemIndex: number, list: T[])
  {
    if(this.isFirstItem(itemIndex) && this.isLastItem(mainIndex, list) )
      return true;

    return (mainIndex + 1 == itemIndex)
  }

  isItemPrevious<T>(mainIndex: number, itemIndex: number, list: T[])
  {

    if(this.isLastItem(itemIndex, list) && this.isFirstItem(mainIndex))
      return true;

    return (mainIndex - 1) == itemIndex;
  }

  isItemHidden<T>(mainIndex: number, itemIndex: number, list: T[])
  {
    return ! this.isItemActive(mainIndex, itemIndex)
        &&
      ! this.isItemNext(mainIndex, itemIndex, list)
      &&
      ! this.isItemPrevious(mainIndex, itemIndex, list)
  }

  isLastItem<T>(itemIndex: number, list: T[])
  {
    return itemIndex == list.length - 1;
  }

  isFirstItem<T>(itemIndex: number)
  {
    return itemIndex == 0;
  }

}
