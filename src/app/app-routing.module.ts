import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { ChooseCategoryComponent } from './Component/choose-category/choose-category.component';
import { FeedbackComponent } from './Component/feedback/feedback.component';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { KnowRingSizeComponent } from './Component/know-ring-size/know-ring-size.component';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './Component/Products/product-module/product-details/product-details.component';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';

const routes: Routes = [
  {path: 'Register', component: RegisterComponent, data: { footer: true, header: true }},
  {path: 'Login', component: LoginComponent, data: { footer: true, header: true }},
  {path: 'ChooseCategory', component: ChooseCategoryComponent},
  {path: 'HomePage', component: HomePageComponent, data: { footer: true, header: true }},
// , children:
//   [{
//     path: 'ProductDetails/:id' , component: ProductDetailsComponent
//   }
// ]},
   {path: 'RingSize', component: KnowRingSizeComponent, data: { footer: true, header: true }},
   {path: 'AddProduct', component: AddProductComponent},
   {path: 'AddCategory', component: AddCategoryComponent},
   {path: 'AddSubCategory', component: AddSubCategoryComponent},
   {path: 'Feedback', component: FeedbackComponent, data: { footer: true, header: true }},
   {path: '', redirectTo: '/HomePage', pathMatch: 'full'},
   {path: 'Product' , data: { footer: true, header: true },
   loadChildren: () => import('./Component/Products/product-module/product-module.module')
   .then(product => product.ProductModuleModule)
   },   
   {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
