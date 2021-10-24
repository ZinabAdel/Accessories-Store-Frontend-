import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ICategory } from 'src/app/Component/Shared_Interfces/ICategory';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  addCategoryForm:any;
  Categoies: ICategory[] =[];
  Error :string;
  isAddCategory: boolean
  idClicked:boolean = false
  objectToUpdate:ICategory
  
  constructor(private fb: FormBuilder,private catService:CategoryService) { }

  ngOnInit(): void {
    this.addCategoryForm=this.fb.group({
      id:['',],
      categoryName:['',[Validators.required ]]
    })
    this.getCatigoreis()
  }

  get categoryName(){
    return this.addCategoryForm.get('categoryName');
  }

  onSubmit(){
    console.log("hello",this.addCategoryForm.value)
    const user = this.addCategoryForm.value;
  }

  addNewCategory(){
    this.idClicked = true
    if(this.addCategoryForm.value.categoryName != ''){
    this.catService.addNewCategory(this.addCategoryForm.value).subscribe(
      sucess=>{
        console.log("doneAddCat",this.addCategoryForm.value.categoryName)
        this.getCatigoreis()
        this.isAddCategory = true
      },
      wrong=>{
        this.isAddCategory = false
      })
    }
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

  deleteCategory(id:number){
    this.catService.removeCategory(id).subscribe(data=>{
        this.getCatigoreis()
      })
  }

  getToupdateCategory(category:ICategory){
    this.objectToUpdate = category
    console.log("test",this.objectToUpdate)
  }

  updateCategory(catId:number){
    console.log("model",this.addCategoryForm.value)
    this.objectToUpdate.id = catId
    this.objectToUpdate.categoryName = this.addCategoryForm.value.categoryName
    this.catService.updateCategory(catId,this.objectToUpdate).subscribe(data=>{
        this.getCatigoreis()
      })
  }
}
