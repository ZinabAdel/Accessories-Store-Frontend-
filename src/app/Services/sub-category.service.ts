import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISubCategory } from '../Component/Shared_Interfces/ISubCategory';
@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor(private http: HttpClient) { }

  getSubCategories(): Observable<ISubCategory[]>
  {
    console.log('insub');
    return this.http.get<ISubCategory[]>(`${environment.API_URL}/SubCategory`).pipe();
  }

}
