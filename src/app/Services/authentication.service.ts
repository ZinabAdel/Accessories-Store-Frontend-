import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { ILogin } from '../Component/Shared_Interfces/ILogin';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<ILogin>;
  public user: Observable<ILogin>;
  key:any;

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<ILogin>(JSON.parse(this.key));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): ILogin {
    return this.userSubject.value;
}

  login(username: string, PasswordHash: string) {
    return this.http.post<any>(`${environment.API_URL}/Login`, { username, PasswordHash })
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
}
