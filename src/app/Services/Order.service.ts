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
  getOrderByClientID(clientID: string): Observable<IOrder[]>{
    const x = this.http.get<IOrder[]>(`${environment.API_URL}/Order/OrdersByClientId?clientId=${clientID}`).pipe();
    console.log("tessssssssst",x,clientID);
    return x;
  }
  AddNewOrder(Order: IOrder): Observable<IOrder>{
    return this.http.post<IOrder>(`${environment.API_URL}/Order`, Order).pipe();
  }
  updateOrder(id:number, order: IOrder): Observable<IOrder>{
    console.log("orderUUUU",order);
    return this.http.put<IOrder>(`${environment.API_URL}/Order/${id}`,order).pipe();
  }
  removeOrder(id: number): Observable<IOrder[]>{
    return this.http.get<IOrder[]>(`${environment.API_URL}/Order/{id}`).pipe();
  }
}
