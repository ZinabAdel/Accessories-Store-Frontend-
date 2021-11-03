import { Component, OnInit } from '@angular/core';
import { ILogin } from 'src/app/Component/Shared_Interfces/ILogin';
import { IRegister } from 'src/app/Component/Shared_Interfces/IRegister';
import { AccountService } from 'src/app/Services/account.service';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private authServices: AuthenticationService , private acountServices: AccountService) { }
  userInfo: IRegister;
  stdID: string = this.authServices.getUserId();
  ngOnInit(): void {
    this.isLoggedIn();
    this.role();
    this.getStdInformation();

  }
  Logout(): void{
    this.authServices.logout();
  }
  isLoggedIn(): any{
    return this.authServices.isLoggedIn();
   }
   role(): any{
   return this.authServices.getRole();
   }
   getStdInformation(): void{
    this.stdID = this.authServices.getUserId();
    this.acountServices.getClientInformation(this.stdID).subscribe(
        data => {
            console.log('info', data );
            this.userInfo = data;
            console.log('usetd', this.userInfo.userName, this.userInfo.id );
        }
      );
  }

  public createImgPathProfile = (serverPath: string) => {
    let x = `${environment.API_URL_Register}/${serverPath}`;
    console.log("ttttttt22" ,x ,serverPath);
    return x;
  }

}
