import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../Component/Shared_Interfces/ICategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<ICategory[]>
  {
    console.log('in');
    return this.http.get<ICategory[]>(`${environment.API_URL}/Category`).pipe();
  }

  getCategoryById(catId: number): Observable<ICategory>{
    return this.http.get<ICategory>(`${environment.API_URL}/Category/${catId}`).pipe();
  }

  addNewCategory(category: ICategory): Observable<ICategory>{
    return this.http.post<ICategory>(`${environment.API_URL}/Category`,category).pipe();
  }

  removeCategory(id: number): Observable<ICategory>{
    return this.http.delete<ICategory>(`${environment.API_URL}/Category/${id}`).pipe();
  }

  updateCategory(id:number,category:ICategory): Observable<ICategory>{
    console.log("updat",id,category)
    return this.http.put<ICategory>(`${environment.API_URL}/Category/${id}`,category).pipe();
  }
}
