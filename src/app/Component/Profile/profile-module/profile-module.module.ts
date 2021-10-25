import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MYProfileComponent } from './myprofile/myprofile.component';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccountUserComponent } from 'src/app/Admin/account-user/account-user.component';




const routes: Routes = [
  {path: 'Profile', component: MYProfileComponent ,data: { footer: true, header: true }},
  {path: 'UpdatePassword', component: ChangePasswordComponent , data: { footer: true, header: true }},
  {path: 'Users', component: AccountUserComponent ,data: { footer: true, header: true }},


];



@NgModule({
  declarations: [
    MYProfileComponent,
    ChangePasswordComponent,
    AccountUserComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)

  ],
  exports: [RouterModule]
})
export class ProfileModuleModule { }
