import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenGuard } from 'src/app/Component/Helper/authen.guard';
import { ILogin } from 'src/app/Component/Shared_Interfces/ILogin';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { SginUpService } from 'src/app/Services/sgin-up.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  isSuccessed=false
  loading = false;
  error = '';
  isLoggedIn=false
  isLoginFailed: boolean;
  errorMessage: any;
  Role: string;
  constructor(private gruad:AuthenGuard,private fb: FormBuilder,private signInService:SginUpService, private authenticationService: AuthenticationService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      userName:['',[Validators.required ]],
      passwordHash:['',[Validators.required , Validators.minLength(6)]]
    })
  }
 get userName(){
return this.loginForm.get('userName');
 }
 get passwordHash(){
return this.loginForm.get('passwordHash');
 }
 onSubmit(){
   console.log("hello")
  const user = this.loginForm.value;
  this.signInUser(user);
 }
 get formFields(){
     return this.loginForm.controls; 
  }

 signInUser(user: ILogin) {
  this.signInService.SignIn(user).subscribe( _data => {
    console.log("success")
    this.isSuccessed = true;

    },_err=>{
      console.log("error")
    })

    this.loading = true;
    this.authenticationService.login(this.formFields.userName.value, this.formFields.passwordHash.value)
        .pipe(first())
        .subscribe(
            AData => {
               // this.router.navigate(['/ClassRoom']);
               this.isLoginFailed = false;
               this.isLoggedIn= this.authenticationService.isLoggedIn();
               this.Role=this.authenticationService.getRole();
               console.log("Roleeeeeeeeeeeeeeee",this.authenticationService.getRole());
               if(this.Role==='Client')
               {
                this.ClientPage();
               }
               else
               {
                 this.AdminPage();
               }
              },
            error => {
                this.loading = false;
                this.errorMessage = error.message;
                this.isLoginFailed = true;
            });
          }
  AdminPage() {
    window.location.href='/Home';
  }
  ClientPage() {
    window.location.href='/ChooseCategory';
  }
}
