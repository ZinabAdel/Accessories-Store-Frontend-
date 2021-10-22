import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../Component/Shared_Interfces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  getAllProduct(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${environment.API_URL}/Product`).pipe();
  }
  getProductById(prodId: number): Observable<IProduct>{
    return this.http.get<IProduct>(`${environment.API_URL}/Product/${prodId}`).pipe();
  }
  getProductsBySubCategory(subCategoryId: number): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${environment.API_URL}/Product/ProductBySubCategory/${subCategoryId}`).pipe();
  }
  getProductsByCategory(CategoryId: number): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${environment.API_URL}/Product/ProductByCategory/${CategoryId}`).pipe();
  }
  
  AddNewProduct(product: IProduct): Observable<IProduct>{
    return this.http.post<IProduct>(`${environment.API_URL}/Product`,product).pipe();
  }

  updateProduct(id:number,product:IProduct): Observable<IProduct>{
    return this.http.put<IProduct>(`${environment.API_URL}/Product/${id}`,product).pipe();
  }
  
  removeProduct(id: number): Observable<IProduct>{
    return this.http.delete<IProduct>(`${environment.API_URL}/Product/${id}`).pipe();
  }


}
