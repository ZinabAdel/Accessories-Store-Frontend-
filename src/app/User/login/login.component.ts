import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['',[Validators.required , Validators.email]],
      password:['',[Validators.required , Validators.minLength(6)]]
    })
  }
 get email(){
return this.loginForm.get('email');
 }
 get password(){
return this.loginForm.get('password');
 }
 onSubmit(){

 }
}
