import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ICategory } from 'src/app/Component/Shared_Interfces/ICategory';
import { IProduct } from 'src/app/Component/Shared_Interfces/iproduct';
import { ISubCategory } from 'src/app/Component/Shared_Interfces/ISubCategory';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';
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
  addProductForm:any;
  response:any
  products:IProduct[] =[]
  objectToUpdate:IProduct
  isAddProduct: boolean
  idClicked:boolean = false

  constructor(private prodService:ProductService,private catService:CategoryService,
     private subCatService:SubCategoryService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getCatigoreis();
    this.getSubCatigoreis();
    this.addProductForm=this.fb.group({
      productName:['',[Validators.required ]],
      productImage:['',[Validators.required]],
      categoryID:['',[Validators.required ]],
      subCategoryID:['',[Validators.required] ],
      price:['',[Validators.required ]],
    })
    this.getProduct()
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

  get productName(){
    return this.addProductForm.get('productName');
     }
  get productImage(){
    return this.addProductForm.get('productImage');
    }
  get categoryID(){
    return this.addProductForm.get('categoryID');
  }
  get subCategoryID(){
  return this.addProductForm.get('subCategoryID');
  }
  get price(){
    return this.addProductForm.get('price');
  }

  onSubmit(){
    console.log("hello",this.addProductForm.value)
  const user = this.addProductForm.value;
  }
  addNewProduct(){
    this.idClicked = true
    if(this.addProductForm.value.productName != '' && this.addProductForm.value.productImage != '' &&
    this.addProductForm.value.priceSilver != '' && this.addProductForm.value.priceGold != '' &&
    this.addProductForm.value.subCategoryID != '' && this.addProductForm.value.categoryID != ''){
    this.prodService.AddNewProduct(this.addProductForm.value).subscribe(
      sucess=>{
        this.getProduct()
        this.isAddProduct = true
      },
      wrong=>{
        this.isAddProduct = false
      })
    }
  }
  getProduct()
  {
    this.prodService.getAllProduct().subscribe(data=>{
        console.log("ts",data)
        this.products=data;
      },Wrong=>{
        this.Error = Wrong
      }
    )
  }
  deleteProduct(id:number){
    this.prodService.removeProduct(id).subscribe(
      sucess=>{
        console.log("deletProduct")
        this.getProduct()
      })
  }
  getToupdateProduct(product:IProduct){
    this.objectToUpdate = product
    console.log("test",this.objectToUpdate)
  }
  updateProduct(prodId:number){
    console.log("model",this.addProductForm.value)
    this.objectToUpdate.id = prodId
    this.objectToUpdate.productImage = this.addProductForm.value.productImage
    this.objectToUpdate.productName = this.addProductForm.value.productName
    this.objectToUpdate.price = this.addProductForm.value.price
    this.objectToUpdate.categoryID = this.addProductForm.value.categoryID
    this.objectToUpdate.subCategoryID = this.addProductForm.value.subCategoryID
    this.prodService.updateProduct(prodId,this.objectToUpdate).subscribe(data=>{
      this.getProduct()
    })
  }
}
