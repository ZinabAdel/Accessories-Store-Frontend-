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
import { SubCategoryService } from 'src/app/Services/sub-category.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-client-order',
  templateUrl: './client-order.component.html',
  styleUrls: ['./client-order.component.scss']
})
export class ClientOrderComponent implements OnInit {
  URLID: any;
  productid: IProduct;
  isRing: boolean = false
  OrderNowForm:FormGroup
  Error :string;
  // isAddOder: boolean
  // idClicked:boolean = false
  userInfo: ILogin;
  clientID: string = this.authServices.getUserId();
  newOrder:IOrder
  // islogin:boolean = false

  constructor(private service: ProductService , private router: Router , private orderServices: OrderService ,
    private active: ActivatedRoute , private  fb: FormBuilder , private acountServices: AccountService ,
     private authServices: AuthenticationService , private subCategoryService:SubCategoryService,) { }

  ngOnInit(): void {
    this.OrderNowForm=this.fb.group({
      id:['',],
      phoneNumber:['',[Validators.required ,Validators.maxLength(11) ,Validators.minLength(11)]],
      NID:['',[Validators.required ,Validators.maxLength(14) ,Validators.minLength(14)]],
      mSG:['',[Validators.required ]],
      // clientID:['',[Validators.required ]],
    })
      this.newOrder= {mSG:'',NID:0, clientID:'', phoneNumber:'', productImage:'', productName:'',  price:0 , productId:1 ,finish:0, id:0}
      this.active.paramMap.subscribe((p: ParamMap) => this.URLID = p.get('id'));
      this.getProductById(this.URLID);
      console.log('id', this.URLID);
      this.getClientInformation();
    }

  getProductById(id: number): void{
    this.service.getProductById(id).subscribe(sucess =>
    {
      this.productid = sucess;
      this.subCategoryService.getSubCategoryById(sucess.subCategoryID).subscribe(data=>{
      console.log("ring",id)
      if(data.subCategoryName === "خواتم" )
      {
        this.isRing = true;
      }
      else
      {
        this.isRing = false;
      }
    })
    });
  }
  getClientInformation(): void{
    this.clientID = this.authServices.getUserId();
    this.acountServices.getClientInformation(this.clientID).subscribe(
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
  get NID(){
    return this.OrderNowForm.get('NID');
  }
  get formFields(){
    return this.OrderNowForm.controls;
  }
 creatOrder(){
    this.newOrder.clientID =this.userInfo.id;
    console.log('infolll', this.userInfo.id );

    this.newOrder.mSG = this.OrderNowForm.value.mSG;
    this.newOrder.productId = this.URLID;
    this.newOrder.phoneNumber = this.OrderNowForm.value.phoneNumber;
    this.newOrder.price = this.productid.price;
    this.newOrder.productImage = this.productid.productImage;
    this.newOrder.productName = this.productid.productName;

  }

  addNewProduct(){
    this.creatOrder();
    this.orderServices.AddNewOrder(this.newOrder).subscribe(success => {
     console.log('doneAddCat',this.OrderNowForm.value.productName);
      this.router.navigateByUrl(`/MyProfile/Profile`)
  });
  }

}
