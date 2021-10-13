import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './Layout/nav-bar/nav-bar.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { KnowRingSizeComponent } from './know-ring-size/know-ring-size.component';
=======
import { RegisterComponent } from './User/register/register.component';
import { LoginComponent } from './User/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> ebcd5e78b4064a98f1cab275b5a454344d6f0274

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomePageComponent,
    NavBarComponent,
    FooterComponent,
    KnowRingSizeComponent,
=======
    RegisterComponent,
    LoginComponent
>>>>>>> ebcd5e78b4064a98f1cab275b5a454344d6f0274
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
