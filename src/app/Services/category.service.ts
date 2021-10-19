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


}
