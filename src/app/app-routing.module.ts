import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { KnowRingSizeComponent } from './Component/know-ring-size/know-ring-size.component';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';

const routes: Routes = [
  {path: 'Register', component: RegisterComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'HomePage', component: HomePageComponent},
  {path: 'RingSize', component: KnowRingSizeComponent},
  {path: 'AddProduct', component: AddProductComponent},

  {path: 'Product' ,
   loadChildren: () => import('./Component/Products/product-module/product-module.module')
   .then(product => product.ProductModuleModule)},
  {path: '**', component: PageNotFoundComponent},
  {path: '', redirectTo: '/HomePage', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
