import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  ErrorMessage: Subject<string> = new Subject<string>();


  constructor() { }


  updateErrorMessage(message: string)
  {
    this.ErrorMessage.next(message);
  }


  handleError(error: ErrorEvent) {
    console.log("this", this)
    this.updateErrorMessage(error.error.message);

  }


}
