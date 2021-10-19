import { Component, OnInit } from '@angular/core';
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
  constructor(private service: ProductService , private router: Router , private active: ActivatedRoute) { }
  ngOnInit(): void {
this.active.paramMap.subscribe((p: ParamMap) => this.URLID = p.get('id'));
this.getProductById(this.URLID);
console.log('id', this.URLID);
  }
 getProductById(id: number): void{
  this.service.getProductById(id).subscribe(sucess =>
  {
    console.log('Product', sucess);
    this.productid = sucess;
  });
}
public createImgPath = (serverPath: string) => {
  console.log(`${environment.API_URLIMG}/${serverPath}`);
  return `${environment.API_URLIMG}/${serverPath}`;
}
}
