import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ILogin } from '../Component/Shared_Interfces/ILogin';
import { IRegister } from '../Component/Shared_Interfces/IRegister';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  account: IRegister;
  stID: string;
urlUpdate:"http://localhost:9748/api/Account/updatePassword/"
  constructor(private http: HttpClient, private  token: AuthenticationService) { }

  getClientName(id: string): any{
    return this.http.get<ILogin>(`${environment.API_URL}/Account/${id}`).pipe(catchError((err) => {
      return throwError(err.message || 'error');
    }));
  }

  getClientInformation(id: string): Observable<IRegister>{
    return this.http.get<IRegister>(`${environment.API_URL}/Account/${id}`).pipe(catchError((err) => {
      return throwError(err.message || 'error');
    }));
  }

 UpdateClientInfo(account: IRegister): Observable<any>{
  this.stID = this.token.getUserId();
  console.log('acccccccccc', account);
  return this.http.put(`${environment.API_URL}/Account/UpdateUserInfo/` + this.stID, account ).pipe(catchError((err) => {

    return throwError(err.message || 'error');

    }));
   }

  updatePassword(account: IRegister, oldPasswordHashed: string): Observable<any>{
    this.stID = this.token.getUserId();
   console.log('ttt');
    return this.http.put(`${environment.API_URL_UPDATE}${this.stID}/${oldPasswordHashed}`, account)
    .pipe(catchError((err) => {
      return throwError(err.message || 'erro');
  }));
  }
}
