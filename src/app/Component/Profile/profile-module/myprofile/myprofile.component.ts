import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/Component/Shared_Interfces/ILogin';
import { IRegister } from 'src/app/Component/Shared_Interfces/IRegister';
import { AccountService } from 'src/app/Services/account.service';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MYProfileComponent implements OnInit {
  userInfo:IRegister;
  stdID: string = this.authServices.getUserId();
  hide=true;
  text : string ="تغيير البيانات";
  icon: string = "fa fa-arrow-down";
  public response: {dbPath: ''};

  constructor(private authServices: AuthenticationService , private acountServices: AccountService , private router: Router) { }

  ngOnInit(): void {
  this.getClientInformation();
  this.userInfo ={id:'', userName: '' ,passwordHash:'',email:'' , roleName:'' , image:''}

  }
  openedit(): any{
    this.hide=!this.hide
    this.text=this.hide? "تغيير البيانات":" الغاء"
    this.icon=this.hide? "fa fa-arrow-down":" fa fa-arrow-up"

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
          this.openedit();
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

   // upload image
   public uploadFinished = (event:any) => {
    console.log("ttttttttttttttttttt",event)
    this.response = event;
    this.acountServices.getClientInformation(this.authServices.getUserId()).subscribe(
     data=>{
       data.image=this.response.dbPath
       console.log("Donet",data ,"h", data.image)
       this.acountServices.UpdateClientInfo(data).subscribe(
         sucess=>{
           console.log("Done1"  ,sucess)
           window.location.reload();
         }
       )
     }
   )
    console.log(this.response)
  }

  public createImgPath = (serverPath: string) => {
    // console.log("ttttttt",`${environment.API_URL}/${serverPath}`);
    let x = `${environment.API_URL}/${serverPath}`;
    console.log("ttttttt22" ,x ,serverPath);

    return x;
  }

  public createImgPathProfile = (serverPath: string) => {
    let x = `${environment.API_URL_Register}/${serverPath}`;
    console.log("ttttttt22" ,x ,serverPath);
    return x;
  }

}
