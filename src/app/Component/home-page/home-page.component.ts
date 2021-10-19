import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { CategoryService } from 'src/app/Services/category.service';
import { SubCategoryService } from 'src/app/Services/sub-category.service';
import { environment } from 'src/environments/environment';
import { ICategory } from '../Shared_Interfces/ICategory';
import { ISubCategory } from '../Shared_Interfces/ISubCategory';
=======
import { ProductService } from 'src/app/Services/product.service';
import { environment } from 'src/environments/environment';
import { IProduct } from '../Shared_Interfces/iproduct';
>>>>>>> 187647f6627828182ab4e368801b3f04de070639

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  isSilver = false;
  isGold = false;
  img: string[] = [];
<<<<<<< HEAD
  Categoies: ICategory[] =[];
  subCategoies: ISubCategory[] =[];
  Error :string;

  constructor(private catService:CategoryService, private subCatService:SubCategoryService) {
    this.img = ["m1.jpeg","m2.jpeg","m3.jpeg","m1.jpeg","m2.jpeg","m3.jpeg","m1.jpeg","m2.jpeg"]
   }

  ngOnInit(): void {
    this.getCatigoreis();
    this.getSubCatigoreis();
=======
  AllProduct: IProduct[] = [];
  constructor(private prodServices: ProductService) {
    this.img = ['m1.jpeg',"m2.jpeg","m3.jpeg","m1.jpeg","m2.jpeg","m3.jpeg","m1.jpeg","m2.jpeg","m3.jpeg","m1.jpeg","m2.jpeg"]
   }

  ngOnInit(): void {
    this.getAllProduct();
>>>>>>> 187647f6627828182ab4e368801b3f04de070639
  }
  public createImgPath = (serverPath: string) => {
    console.log(`${environment.API_URLIMG}/${serverPath}`);
    return `${environment.API_URLIMG}/${serverPath}`;
  }
getAllProduct(): void{
this.prodServices.getAllProduct().subscribe(sucess => {
this.AllProduct = sucess;
});
  }
  checkSilver(){
    this.isSilver = true
    this.isGold = false
  }

  getCatigoreis()
  {
    this.catService.getCategories().subscribe(data=>{
        console.log("ts",data)
        // this.Categoies.push(data);
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
        // this.Categoies.push(data);
        this.subCategoies=data;
      },Wrong=>{
        this.Error = Wrong
      }      
    )
  }

}
