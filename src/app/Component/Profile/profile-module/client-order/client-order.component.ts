import { Component, OnInit } from '@angular/core';
import { ILogin } from 'src/app/Component/Shared_Interfces/ILogin';
import { IOrder } from 'src/app/Component/Shared_Interfces/iorder';
import { AccountService } from 'src/app/Services/account.service';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { OrderService } from 'src/app/Services/Order.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-client-order',
  templateUrl: './client-order.component.html',
  styleUrls: ['./client-order.component.scss']
})
export class ClientOrderComponent implements OnInit {

  currentUser: ILogin;
  clientID: string = this.authServices.getUserId();
  clientOrder: IOrder[] = [];
  iid: string;
  constructor(private  orderService: OrderService, private authServices: AuthenticationService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.getClientInformation();
    // this.getOrderByClient();

  }
  getClientInformation(): void{
    this.clientID = this.authServices.getUserId();
    this.accountService.getClientInformation(this.clientID).subscribe(
        data => {
            console.log('info', data );
            this.currentUser = data;
            this.iid = data.id
            console.log('usetdnnnnn', this.currentUser.userName, this.currentUser.id , this.iid);
            this.orderService.getOrderByClientID(data.id).subscribe(success => {
                  this.clientOrder = success;
                  console.log('clientOrders', this.clientOrder);
                }, Wrong => {
                  console.log('wrong');
                } );
        }
      );
  }

  public createImgPath = (serverPath: string) => {
    console.log(`${environment.API_URLIMG}/${serverPath}`);
    return `${environment.API_URLIMG}/${serverPath}`;
  }

  // getOrderByClient(){
  //   const idClient = this.currentUser?.id;
  //   console.log('clientOrders', idClient ,  this.currentUser?.id);

  //   this.orderService.getOrderByClientID(idClient).subscribe(success => {
  //     this.clientOrder = success;
  //     console.log('clientOrders', this.clientOrder);
  //   }, Wrong => {
  //     console.log('wrong');
  //   } );
  // }
  // getOrderByClient(){
  //   this.accountService.getClientInformation(this.clientID).subscribe(
  //     data => {
  //         console.log('info', data );
  //         this.currentUser = data;
  //         this.iid = data.id
  //         console.log('usetdnnnnn', this.currentUser.userName, this.currentUser.id , this.iid);
  //         this.orderService.getOrderByClientID(data.id).subscribe(success => {
  //           this.clientOrder = success;
  //           console.log('clientfffOrders', this.clientOrder,success,data.id);
  //         }, Wrong => {
  //           console.log('wrong');
  //         } );
  //     }
  //   );
  //   const idClient = this.currentUser?.id;
  //   console.log('clientOrders', idClient ,  this.currentUser?.id,this.iid);


  // }
}



