import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ILogin } from '../Component/Shared_Interfces/ILogin';
import { IRegister } from '../Component/Shared_Interfces/IRegister';

@Injectable({
  providedIn: 'root'
})
export class SginUpService {

  constructor(private http : HttpClient) { }

  SignUp(newUser: IRegister): Observable<IRegister> {
    console.log("enter", newUser)
    return this.http.post<IRegister>(`${environment.API_URL_Register}/Register`,newUser).pipe(catchError((error)=>{

    return throwError(error.message ||"Invaled Registration" )}))
  }

  SignIn(User: ILogin): Observable<ILogin> {
    console.log("entered")
    return this.http.post<ILogin>(`${environment.API_URL_Register}/Login`, User).pipe(catchError((err)=>{
      
    return throwError(err.message || "Invaled Email or Password")
  }))
  }

  getUserById(id: string): Observable<ILogin> {
    let url = `${environment.API_URL_Register}/account/${id}`;
    return this.http.get<ILogin>(url).pipe(catchError((err) => {
      return throwError(err.message || "Internal Server error contact site adminstarator");
    }));
  }

  getCurrentUser(): Observable<ILogin> {
    let url = `${environment.API_URL_Register}/account/current`;
    return this.http.get<ILogin>(url).pipe(catchError((err) => {
      return throwError(err.message || "Internal Server error contact site adminstarator");
    }));
  }
}
