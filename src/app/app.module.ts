import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { NavBarComponent } from './Layout/nav-bar/nav-bar.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { KnowRingSizeComponent } from './Component/know-ring-size/know-ring-size.component';
import { RegisterComponent } from './User/register/register.component';
import { LoginComponent } from './User/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { FeedbackComponent } from './Component/feedback/feedback.component';
import { ChooseCategoryComponent } from 'src/app/Component/choose-category/choose-category.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    FooterComponent,
    KnowRingSizeComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    FeedbackComponent,
    ChooseCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
