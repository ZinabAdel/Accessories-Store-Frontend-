import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { ILogin } from '../Component/Shared_Interfces/ILogin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<ILogin>;
  public user: Observable<ILogin>;
  key:any;

  constructor(private http: HttpClient,private router: Router,) {
    this.key=localStorage.getItem('user');
    this.userSubject = new BehaviorSubject<ILogin>(JSON.parse(this.key));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): ILogin {
    return this.userSubject.value;
}

  login(username: string, passwordHash: string) {
    return this.http.post<any>(`${environment.API_URL_Register}/Login`, { username, passwordHash })
        .pipe(map(res => {
            this.setSession(res);
            this.userSubject.forEach(el=>{
               console.log(el.userName)
            });
        }));
}

private setSession(authResult:any) {
  //const expiresAt = moment().add(authResult.expiresIn,'second');
  const expiresAt = authResult.expiration;
  localStorage.setItem('token', authResult.token);
  localStorage.setItem("expires_at", JSON.stringify(expiresAt));//.valueOf()) );
}


logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("token");
  localStorage.removeItem("expires_at");
  this.router.navigate(['/Home']);
}

public isLoggedIn() {
  if(localStorage.getItem('token')){
      let token:any = localStorage.getItem('token');

      let jwtData = token.split('.')[1]

      let decodedJwtJsonData = window.atob(jwtData)

      let decodedJwtData = JSON.parse(decodedJwtJsonData)

      let expirationDate = decodedJwtData.exp * 1000;

      let todayDate = new Date().getTime();

      if (expirationDate >= todayDate)
          return true;
      
  }
  return false;
}

isLoggedOut() {
  return !this.isLoggedIn();
}
getRole():string {
  if(localStorage.getItem('token')){
      let token:any = localStorage.getItem('token');

      let jwtData = token.split('.')[1]

      let decodedJwtJsonData = window.atob(jwtData)

      let decodedJwtData = JSON.parse(decodedJwtJsonData)
      return decodedJwtData.role;
  }
  return "No Role";
}

getUserId(){
  if(localStorage.getItem('token')){
      let token:any = localStorage.getItem('token');

      let jwtData = token.split('.')[1]

      let decodedJwtJsonData = window.atob(jwtData)

      let decodedJwtData = JSON.parse(decodedJwtJsonData)
      let userID=decodedJwtData['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
      return userID;
  }
  return null;
}
}
