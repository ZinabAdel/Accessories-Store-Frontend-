import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IProduct } from 'src/app/Component/Shared_Interfces/iproduct';
import { ProductService } from 'src/app/Services/product.service';
import { environment } from 'src/environments/environment';

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
  constructor(private service: ProductService , private router: Router , private active: ActivatedRoute , private  fb: FormBuilder , ) { }

  ngOnInit(): void {
    this.OrderNowForm=this.fb.group({
      id:['',],
      productName:['',[Validators.required ]],
      productImage:['',[Validators.required ]],
      price:['',[Validators.required ]],
      phoneNumber:['',[Validators.required ]],
      finish:['',[Validators.required ]],
      ClientID:['',[Validators.required ]],



    })
      this.active.paramMap.subscribe((p: ParamMap) => this.URLID = p.get('id'));
      this.getProductById(this.URLID);
      console.log('id', this.URLID);
    }
getProduct(){
  this.service.getAllProduct().subscribe(success => {

  })
}
  getProductById(id: number): void{
    this.service.getProductById(id).subscribe(sucess =>
    {
      console.log('Product', sucess);
      this.productid = sucess;
      if(sucess.subCategoryID == 2)
      {
        this.isRing = true
      }
      else
      {
        this.isRing = false
      }
    });
  }

  public createImgPath = (serverPath: string) => {
    console.log(`${environment.API_URLIMG}/${serverPath}`);
    return `${environment.API_URLIMG}/${serverPath}`;
  }

  onSubmit(){

  }
  AddOrder(){

  }
AddToOrder(){

}
}
