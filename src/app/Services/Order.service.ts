import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IOrder } from '../Component/Shared_Interfces/iorder';
import { IProduct } from '../Component/Shared_Interfces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class
OrderService {
  constructor(private http: HttpClient) { }
  getAllOrder(): Observable<IOrder[]>{
    return this.http.get<IOrder[]>(`${environment.API_URL}/Order`).pipe();
  }
  getOrderByID(OrdID: number): Observable<IOrder[]>{
    return this.http.get<IOrder[]>(`${environment.API_URL}/Order/{OrdID}`).pipe();
  }
  updateOrder(order: IOrder): Observable<IOrder[]>{
    return this.http.get<IOrder[]>(`${environment.API_URL}/Order`).pipe();
  }
  removeOrder(id: number): Observable<IOrder[]>{
    return this.http.get<IOrder[]>(`${environment.API_URL}/Order/{id}`).pipe();
  }
}