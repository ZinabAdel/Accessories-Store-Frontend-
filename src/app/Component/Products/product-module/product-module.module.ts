import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';


const routes: Routes = [
  {path: 'ProductDetails/:id', component: ProductDetailsComponent},
  {path: 'Order', component: OrderComponent},

];
@NgModule({
  declarations: [
    ProductDetailsComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModuleModule { }
