import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';
import { SubCategoryService } from 'src/app/Services/sub-category.service';
import { environment } from 'src/environments/environment';
import { ICategory } from '../Shared_Interfces/ICategory';
import { ISubCategory } from '../Shared_Interfces/ISubCategory';
import { ProductService } from 'src/app/Services/product.service';
import { IProduct } from '../Shared_Interfces/iproduct';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  isSilver = false;
  isGold = false;
  // img: string[] = [];
  Categoies: ICategory[] =[];
  subCategoies: ISubCategory[] =[];
  AllProduct: IProduct[] = [];
  spasificProduct: IProduct[] = [];
  Error :string;
  showSizeRing: boolean = false
  constructor(private catService:CategoryService, private subCatService:SubCategoryService,private prodServices: ProductService) {
    // this.img = ["m1.jpeg","m2.jpeg","m3.jpeg","m1.jpeg","m2.jpeg","m3.jpeg","m1.jpeg","m2.jpeg"]
   }

  ngOnInit(): void {
    this.getCatigoreis();
    this.getSubCatigoreis();
    this.getAllProduct();
  }

  public createImgPath = (serverPath: string) => {
    console.log(`${environment.API_URLIMG}/${serverPath}`);
    return `${environment.API_URLIMG}/${serverPath}`;
  }

  checkSilver(){
    this.isSilver = true
    this.isGold = false
  }

  getCatigoreis()
  {
    this.catService.getCategories().subscribe(data=>{
        console.log("ts",data)
        this.Categoies=data;
      },Wrong=>{
        this.Error = Wrong
      }      
    )
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

  getAllProduct(): void{
    this.prodServices.getAllProduct().subscribe(sucess => {
    this.AllProduct = sucess;
    this.spasificProduct = this.AllProduct;
  });
  }

  filterProduct(id:number){
    this.spasificProduct = []
    if(id == 2)
    {
      this.showSizeRing = true
    }
    else
    {
      this.showSizeRing = false
    }
    this.prodServices.getAllProduct().subscribe(sucess => {
      for(let prod of sucess)
      {
        if(prod.subCategoryID == id){
          this.spasificProduct.push(prod)
        }
      }
  })
}

}
