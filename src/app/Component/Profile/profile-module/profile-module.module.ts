import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MYProfileComponent } from './myprofile/myprofile.component';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




const routes: Routes = [
  {path: 'Profile', component: MYProfileComponent},
  {path: 'UpdatePassword', component: ChangePasswordComponent},

];



@NgModule({
  declarations: [
    MYProfileComponent,
    ChangePasswordComponent
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
