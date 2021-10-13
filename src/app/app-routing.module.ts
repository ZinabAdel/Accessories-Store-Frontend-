import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';

const routes: Routes = [
  {path: 'Register', component:RegisterComponent},
  {path: 'Login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
