import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Component/Shared_Interfces/ICategory';
import { ISubCategory } from 'src/app/Component/Shared_Interfces/ISubCategory';
import { CategoryService } from 'src/app/Services/category.service';
import { SubCategoryService } from 'src/app/Services/sub-category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  Categoies: ICategory[] =[];
  subCategoies: ISubCategory[] =[];
  Error :string;

  constructor(private catService:CategoryService, private subCatService:SubCategoryService) { }

  ngOnInit(): void {
    this.getCatigoreis();
    this.getSubCatigoreis();
  }

  getCatigoreis()
  {
    this.catService.getCategories().subscribe(data=>{
        console.log("cat",data)
        this.Categoies = data;
      },Wrong=>{
        this.Error = Wrong
      }      
    )
  }

  getSubCatigoreis()
  {
    this.subCatService.getSubCategories().subscribe(data=>{
        console.log("tsub",data)
        this.subCategoies = data;
      },Wrong=>{
        this.Error = Wrong
      }      
    )
  }
}
