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

  addNewSubCategory(subCategory: ISubCategory): Observable<ISubCategory>{
    return this.http.post<ISubCategory>(`${environment.API_URL}/SubCategory`,subCategory).pipe();
  }

  removeSubCategory(id: number): Observable<ISubCategory>{
    return this.http.delete<ISubCategory>(`${environment.API_URL}/SubCAtegory/${id}`).pipe();
  }

  updateSubCategory(id:number,subCategory:ISubCategory): Observable<ISubCategory>{
    return this.http.put<ISubCategory>(`${environment.API_URL}/SubCategory/${id}`,subCategory).pipe();
  }
}
