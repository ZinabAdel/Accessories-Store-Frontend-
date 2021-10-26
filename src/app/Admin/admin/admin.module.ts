import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShowFeedbackComponent } from '../show-feedback/show-feedback.component';
import { OrdersComponent } from '../orders/orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { AddSubCategoryComponent } from '../add-sub-category/add-sub-category.component';

const routes: Routes = [
  {  path: 'ShowFeedback', component: ShowFeedbackComponent, data: { footer: true, header: true }},
  {  path: 'Orders', component: OrdersComponent, data: { footer: true, header: true }},
  {  path: 'AddCategory', component: AddCategoryComponent, data: { footer: true, header: true }},
  {  path: 'AddProduct', component: AddProductComponent,  data: { footer: true, header: true }},
  {  path: 'AddSubCategory', component: AddSubCategoryComponent,  data: { footer: true, header: true } },
];

@NgModule({
  declarations: [
    ShowFeedbackComponent,
    OrdersComponent,
    AddCategoryComponent,
    AddProductComponent,
    AddSubCategoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)],
})
export class AdminModule { }
