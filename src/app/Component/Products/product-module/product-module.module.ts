import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {path: 'ProductDetails/:id', component: ProductDetailsComponent},
  {path: 'AllProduct/:id', component: ProductComponent},
];
@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModuleModule { }
