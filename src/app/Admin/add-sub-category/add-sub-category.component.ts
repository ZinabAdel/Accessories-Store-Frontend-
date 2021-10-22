import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ISubCategory } from 'src/app/Component/Shared_Interfces/ISubCategory';
import { SubCategoryService } from 'src/app/Services/sub-category.service';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.scss']
})
export class AddSubCategoryComponent implements OnInit {
  addSubCategoryForm:any;
  subCategoies: ISubCategory[] =[];
  Error :string;
  isAddSubCategory: boolean
  idClicked:boolean = false
  objectToUpdate: ISubCategory

  constructor(private fb: FormBuilder,private SubCatService:SubCategoryService) { }

  ngOnInit(): void {
    this.addSubCategoryForm=this.fb.group({
      subCategoryName:['',[Validators.required ]]
    })
    this.getSubCatigoreis()
  }

  get subCategoryName(){
    return this.addSubCategoryForm.get('subCategoryName');
     }

  onSubmit(){
    console.log("hello",this.addSubCategoryForm.value)
    const user = this.addSubCategoryForm.value;
  }

  addNewSubCategory(){
    this.idClicked = true
    if(this.addSubCategoryForm.value.subCategoryName != ''){
      this.SubCatService.addNewSubCategory(this.addSubCategoryForm.value).subscribe(
        sucess=>{
          console.log("doneAddCat")
          this.getSubCatigoreis()
          this.isAddSubCategory = true
      },
      wrong=>{
        this.isAddSubCategory = false
        })
      }
  }

  getSubCatigoreis()
  {
    this.SubCatService.getSubCategories().subscribe(data=>{
        console.log("ts",data)
        this.subCategoies=data;
      },Wrong=>{
        this.Error = Wrong
      }      
    )
  } 

  deleteSubCategory(id:number){
    this.SubCatService.removeSubCategory(id).subscribe(data=>{
        this.getSubCatigoreis()
      })
  }

  getToupdateSubCategory(subCategory:ISubCategory){
    this.objectToUpdate = subCategory
    console.log("test",this.objectToUpdate)
  }

  updateSubCategory(subCatId:number){
    console.log("model",this.addSubCategoryForm.value)
    this.objectToUpdate.id = subCatId
    this.objectToUpdate.subCategoryName = this.addSubCategoryForm.value.subCategoryName
    this.SubCatService.updateSubCategory(subCatId,this.objectToUpdate).subscribe(data=>{
        this.getSubCatigoreis()
      })
  }
}
