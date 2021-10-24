import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




const routes: Routes = [
  {path: 'ProductDetails/:id', component: ProductDetailsComponent},
  {path: 'Order', component: OrderComponent},

  {path: 'AllProduct/:id', component: ProductComponent},
];
@NgModule({
  declarations: [
    ProductDetailsComponent,
    OrderComponent,
    ProductComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    RouterModule.forChild(routes)
  ]
})
export class ProductModuleModule { }
