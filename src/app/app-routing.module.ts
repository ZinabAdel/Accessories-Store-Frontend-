import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { KnowRingSizeComponent } from './know-ring-size/know-ring-size.component';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';

const routes: Routes = [
  {path: 'Register', component:RegisterComponent},
  {path: 'Login', component:LoginComponent},
  {path: 'HomePage', component:HomePageComponent},
  {path: 'RingSize', component:KnowRingSizeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
