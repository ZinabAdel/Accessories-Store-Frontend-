import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IProduct } from 'src/app/Component/Shared_Interfces/iproduct';
import { ISubCategory } from 'src/app/Component/Shared_Interfces/ISubCategory';
import { ProductService } from 'src/app/Services/product.service';
import { SubCategoryService } from 'src/app/Services/sub-category.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  showSizeRing: boolean = false
  spasificProduct: IProduct[] = [];
  subCategoies: ISubCategory[] =[];
  productByCategory: IProduct[] = []
  url: any;
  Error :string;

  constructor(private subCatService:SubCategoryService, private prodServices: ProductService,
    private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((params: ParamMap) => {
    this.url = params.get('id')})
    this.getProductByCategory(this.url)
    this.getSubCatigoreis()
  }


  public createImgPath = (serverPath: string) => {
    console.log(`${environment.API_URLIMG}/${serverPath}`);
    return `${environment.API_URLIMG}/${serverPath}`;
  }

  getProductByCategory(id:any): void{
    this.prodServices.getProductsByCategory(id).subscribe(sucess => {
    this.productByCategory = sucess;
    this.spasificProduct = this.productByCategory;
  });
  }

  getSubCatigoreis()
  {
    this.subCatService.getSubCategories().subscribe(data=>{
        console.log("tsub",data)
        this.subCategoies=data;
      },Wrong=>{
        this.Error = Wrong
      }
    )
  }

  filterProduct(id:number, name:string){
    this.spasificProduct = []
    this.prodServices.getProductsBySubCategory(id).subscribe(sucess => {
      for(let prod of sucess)
      {
        if(prod.categoryID == this.url){
          this.spasificProduct.push(prod)
        }
      }
  })
    if(name == "خواتم" ||name == "الخواتم"  )
    {
      this.showSizeRing = true
    }
    else
    {
      this.showSizeRing = false
    }
  //   this.prodServices.getAllProduct().subscribe(sucess => {
  //     for(let prod of sucess)
  //     {
  //       if(prod.subCategoryID == id){
  //         this.spasificProduct.push(prod)
  //       }
  //     }
  // })
  }

  setAllProductCategory(){
    this.spasificProduct = this.productByCategory
  }
}
