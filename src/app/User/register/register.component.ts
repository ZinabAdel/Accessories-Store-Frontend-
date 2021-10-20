import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ILogin } from 'src/app/Component/Shared_Interfces/ILogin';
import { IRegister } from 'src/app/Component/Shared_Interfces/IRegister';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { SginUpService } from 'src/app/Services/sgin-up.service';
import { ConfirmPasswordValidator } from '../Validation/confirmPassword.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: any;
  isLoggedIn: any;
  Role: string;
  loading = false;
  error = '';
  isSignUpFailed = false;
  isSuccessful=false;
  constructor(private fb: FormBuilder,private signUpService:SginUpService,private auth:AuthenticationService , private router : Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        userName: ['', [Validators.required]],
        email: ['', [ Validators.required ,Validators.email]],
        passwordHash: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required , Validators.minLength(6)]],
      },
      {
        validators: [ConfirmPasswordValidator],
      }
    );
  }
  get formFields() { return this.registerForm.controls; }
  get userName() {
    return this.registerForm.get('userName');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get passwordHash() {
    return this.registerForm.get('passwordHash');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
  onSubmit() {
    console.log("log",this.registerForm.value);
    const user = this.registerForm.value;
    this.signUpUser(user);
  }
  signUpUser(user: IRegister) {
    console.log("success", this.signUpService.SignUp(user))
    this.signUpService.SignUp(user).subscribe( data => {
      console.log("success")
      this.auth.login(this.formFields.userName.value, this.formFields.passwordHash.value)
      .pipe(first())
      .subscribe(
          AData => {
             
             this.isLoggedIn= this.auth.isLoggedIn();
              console.log("llllllllllllllllllllllllllllll");
              this.Role=this.auth.getRole();        
          console.log("Roleeeeeeeeeeeeeeee",this.Role);

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
              this.error = error.message;
             
          });
    this.router.navigate(['/Login']);
      this.isSuccessful = true;
      this.isSignUpFailed = false;
      },err=>{
        console.log("error")
        this.error=err.message;
        this.isSignUpFailed = true;
      
      })
        this.loading = true;
       
     
  }
  AdminPage() {
    window.location.href='/AboutAs';
  }
  ClientPage() {
    window.location.href='/HomePage';

  }
  
}
