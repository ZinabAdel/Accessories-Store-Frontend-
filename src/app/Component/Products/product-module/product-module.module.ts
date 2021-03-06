import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientOrderComponent } from './client-order/client-order.component';

const routes: Routes = [
  {path: 'ProductDetails/:id', component: ProductDetailsComponent},
  {path: 'clientOrder/:id', component: ClientOrderComponent},
  {path: 'AllProduct/:id', component: ProductComponent},
];
@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductComponent,
    ClientOrderComponent,
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
