import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/Component/Shared_Interfces/ILogin';
import { AccountService } from 'src/app/Services/account.service';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MYProfileComponent implements OnInit {
  userInfo: ILogin;
  stdID: string = this.authServices.getUserId();
  hide=true;
  constructor(private authServices: AuthenticationService , private acountServices: AccountService , private router: Router) { }

  ngOnInit(): void {
  this.getClientInformation();

  }
  openedit(): any{
    this.hide=!this.hide
  }
  getClientInformation(): void{
    this.stdID = this.authServices.getUserId();
    this.acountServices.getClientInformation(this.stdID).subscribe(
        data => {
            console.log('info', data );
            this.userInfo = data;
            console.log('usetd', this.userInfo.userName, this.userInfo.id );
        }
      );
  }
  UpdateUserInfo(userName:string,email:string,tel:string){
    this.acountServices.getClientInformation(this.authServices.getUserId()).subscribe(
      data=>{
      console.log("enter")
          data.userName=userName
          // data.email=email
          // data.phoneNumber=tel;
      this.acountServices.UpdateClientInfo(data).subscribe(
        testObj=>{
          console.log("test",testObj)
          // this.alertFlag=true;
          window.location.reload();
        }
      )

          console.log(data)
        }
      )
      console.log("User Name Updated",userName,email,tel)

    }
  change(): void {
this.router.navigateByUrl('MyProfile/UpdatePassword');
  }
}
