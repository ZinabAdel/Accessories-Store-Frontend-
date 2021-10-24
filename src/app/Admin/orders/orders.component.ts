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
  isFinish:number = 0
  orderUpdateFinish: IOrder
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

  getFinishedOrders(){
    this.isFinish = 1;
  }
  
  getNotFinishedOrders(){
    this.isFinish = 0;
  }

  makeRecived(id:number, objectOrder:IOrder){
    this.orderUpdateFinish = objectOrder
    this.orderUpdateFinish.finish = 1
    this.ordersService.updateOrder(id,this.orderUpdateFinish).subscribe(data=>{
      console.log("updateOrder")
    },Wrong=>{
      this.Error = Wrong
    }      
  )
  }
}
