import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from 'src/app/Admin/add-product/add-product.component';
import { AddCategoryComponent } from 'src/app/Admin/add-category/add-category.component';
import { AddSubCategoryComponent } from 'src/app/Admin/add-sub-category/add-sub-category.component';
import { ChooseCategoryComponent } from 'src/app/Component/choose-category/choose-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: 'ProductDetails/:id', component: ProductDetailsComponent},

  {path: 'AllProduct/:id', component: ProductComponent},
  {path: 'AddProduct', component: AddProductComponent},
  {path: 'AddCategory', component: AddCategoryComponent},
  {path: 'ChooseCategory', component: ChooseCategoryComponent},
  {path: 'AddSubCategory', component: AddSubCategoryComponent},
];
@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductComponent,
    AddProductComponent,
    ChooseCategoryComponent,
    AddCategoryComponent,
    AddSubCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ProductModuleModule { }
