import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';
import { SubCategoryService } from 'src/app/Services/sub-category.service';
import { environment } from 'src/environments/environment';
import { ICategory } from '../Shared_Interfces/ICategory';
import { ISubCategory } from '../Shared_Interfces/ISubCategory';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  isSilver:boolean = false;
  isGold: boolean = false;
  img: string[] = [];
  Categoies: ICategory[] =[];
  subCategoies: ISubCategory[] =[];
  Error :string;

  constructor(private catService:CategoryService, private subCatService:SubCategoryService) {
    this.img = ["m1.jpeg","m2.jpeg","m3.jpeg","m1.jpeg","m2.jpeg","m3.jpeg","m1.jpeg","m2.jpeg"]
   }

  ngOnInit(): void {
    this.getCatigoreis();
    this.getSubCatigoreis();
  }
  public createImgPath = (serverPath: string) => {
    console.log(`${environment.API_URL}/${serverPath}`)
    return `${environment.API_URL}/${serverPath}`;
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
