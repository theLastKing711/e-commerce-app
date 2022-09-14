import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../category.type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryApiUrl = `${environment.base_url}AppUserCategories`

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<ICategory[]> {

    return this.httpClient.get<ICategory[]>(this.categoryApiUrl);

  }


}
