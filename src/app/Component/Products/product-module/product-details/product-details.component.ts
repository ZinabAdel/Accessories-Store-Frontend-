import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ILogin } from 'src/app/Component/Shared_Interfces/ILogin';
import { IOrder } from 'src/app/Component/Shared_Interfces/iorder';
import { IProduct } from 'src/app/Component/Shared_Interfces/iproduct';
import { AccountService } from 'src/app/Services/account.service';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { OrderService } from 'src/app/Services/Order.service';
import { ProductService } from 'src/app/Services/product.service';
import { environment } from 'src/environments/environment';
import {Location} from '@angular/common';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  URLID: any;
  productid: IProduct;
  isRing: boolean = false
  OrderNowForm:FormGroup
  Error :string;
  isAddOder: boolean
  idClicked:boolean = false
  userInfo: ILogin;
  stdID: string = this.authServices.getUserId();
  newOrder:IOrder
  constructor(private service: ProductService , private router: Router , private orderServices: OrderService ,
    private active: ActivatedRoute , private  fb: FormBuilder , private acountServices: AccountService , private authServices: AuthenticationService , private location: Location) { }

  ngOnInit(): void {
    this.OrderNowForm=this.fb.group({
      id:['',],
      phoneNumber:['',[Validators.required ]],
      mSG:['',[Validators.required ]],
      // clientID:['',[Validators.required ]],
    })
      this.newOrder= {mSG:'', clientID:'', phoneNumber:'', productImage:'', productName:'',  price:0 , productId:1 ,finish:0, id:0}
      this.active.paramMap.subscribe((p: ParamMap) => this.URLID = p.get('id'));
      this.getProductById(this.URLID);
      console.log('id', this.URLID);
      this.getClientInformation();
    }

  getProductById(id: number): void{
    this.service.getProductById(id).subscribe(sucess =>
    {
      console.log('Product', sucess);
      this.productid = sucess;
      if(sucess.subCategoryID === 2)
      {
        this.isRing = true;
      }
      else
      {
        this.isRing = false;
      }
    });
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
  public createImgPath = (serverPath: string) => {
    console.log(`${environment.API_URLIMG}/${serverPath}`);
    return `${environment.API_URLIMG}/${serverPath}`;
  }
  get phoneNumber(){
    return this.OrderNowForm.get('phoneNumber');
  }
  get id(){
    return this.OrderNowForm.get('id');
  }
  get mSG(){
    return this.OrderNowForm.get('mSG');
  }
  get formFields(){
    return this.OrderNowForm.controls;
  }
  addNewProduct(){
    this.newOrder.clientID =this.userInfo.id;
    console.log('infolll', this.userInfo.id );

    this.newOrder.mSG = this.OrderNowForm.value.mSG;
    this.newOrder.productId = this.URLID;
    this.newOrder.phoneNumber = this.OrderNowForm.value.phoneNumber;
    this.newOrder.price = this.productid.price;
    this.newOrder.productImage = this.productid.productImage;
    this.newOrder.productName = this.productid.productName;

    console.log('hello', this.newOrder)
    this.orderServices.AddNewOrder(this.newOrder).subscribe(success => {
     console.log('doneAddCat',this.OrderNowForm.value.productName);
  });
  }
  onSubmit(){

    console.log("hello",this.OrderNowForm.value);

  }
  Back(): void {
 this.location.back();
 }
 isLoggedIn(): any{
  return this.authServices.isLoggedIn();
 }
}
