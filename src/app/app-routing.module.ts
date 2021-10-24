import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './Admin/orders/orders.component';
import { ShowFeedbackComponent } from './Admin/show-feedback/show-feedback.component';
import { FeedbackComponent } from './Component/feedback/feedback.component';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { KnowRingSizeComponent } from './Component/know-ring-size/know-ring-size.component';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './Component/Products/product-module/product-details/product-details.component';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';

const routes: Routes = [
   {path: 'HomePage', component: HomePageComponent, data: { footer: true, header: true }},
   {path: 'Register', component: RegisterComponent, data: { footer: true, header: true }},
   {path: 'Login', component: LoginComponent, data: { footer: true, header: true }},
   {path: 'RingSize', component: KnowRingSizeComponent, data: { footer: true, header: true }},
   {path: 'Feedback', component: FeedbackComponent, data: { footer: true, header: true }},
   {path: 'ShowFeedback', component: ShowFeedbackComponent, data: { footer: true, header: true }},
   {path: 'Orders', component: OrdersComponent, data: { footer: true, header: true }},

   {path: 'Product' , data: { footer: true, header: true },
   loadChildren: () => import('./Component/Products/product-module/product-module.module')
   .then(product => product.ProductModuleModule)},

   {path: 'MyProfile',
   loadChildren: () => import('./Component/Profile/profile-module/profile-module.module')
   .then(profile => profile.ProfileModuleModule)},

   {path: '', redirectTo: '/HomePage', pathMatch: 'full'},
   {path: '**', component: PageNotFoundComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
