import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/Component/Shared_Interfces/iorder';
import { OrderService } from 'src/app/Services/Order.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders:IOrder[] = []
  Error:string
  constructor(private ordersService:OrderService) { }

  ngOnInit(): void {
    this.getOrders()
  }

  getOrders()
  {
    this.ordersService.getAllOrder().subscribe(data=>{
        this.orders=data;
      },Wrong=>{
        this.Error = Wrong
      }      
    )
  }

  public createImgPath = (serverPath: string) => {
    console.log(`${environment.API_URLIMG}/${serverPath}`);
    return `${environment.API_URLIMG}/${serverPath}`;
  }

}
