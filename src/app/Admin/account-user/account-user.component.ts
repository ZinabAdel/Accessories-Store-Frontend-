import { Component, OnInit } from '@angular/core';
import { ILogin } from 'src/app/Component/Shared_Interfces/ILogin';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-account-user',
  templateUrl: './account-user.component.html',
  styleUrls: ['./account-user.component.scss']
})
export class AccountUserComponent implements OnInit {

  allAccount:ILogin[];
  constructor(private accountServices: AccountService) { }

  ngOnInit(): void {
    this.GetAllAccounts();
  }
  GetAllAccounts(){
 return this.accountServices.getAllAccount().subscribe(sucess =>{
  this.allAccount = sucess;
  console.log('user' , this.allAccount);

 })
  }

}
