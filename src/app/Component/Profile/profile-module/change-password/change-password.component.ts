import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { ConfirmPasswordValidator, newConfirmPasswordValidator } from 'src/app/User/Validation/confirmPassword.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private fb: FormBuilder , private accountService: AccountService , private authenService: AuthenticationService , private router: Router) { }
newPasswordForm: FormGroup;
  ngOnInit(): void {
    this.fb.group({
      currentpasswordHash: ['', [Validators.required, Validators.minLength(6)]],
      newpasswordHash: ['', [Validators.required, Validators.minLength(6)]],
      newconfirmPassword: ['', [Validators.required , Validators.minLength(6)]],
    },
     {
      validators: [newConfirmPasswordValidator],
    }
    );

  }
  get newcurrentpasswordHash(): any{
    return this.newPasswordForm.get('newcurrentpasswordHash');
  }
  get newpasswordHash(): any{
    return this.newPasswordForm.get('newpasswordHash');
  }
  get newconfirmPassword(): any {
    return this.newPasswordForm.get('newconfirmPassword');
  }
  onSubmit(): any{
  }
  updatePassword(newPassword: string, oldPassword: string): any{
    this.accountService.getClientInformation(this.authenService.getUserId()).subscribe(
      data => {
        data.passwordHash = newPassword;
        this.accountService.updatePassword(data, oldPassword).subscribe(
          dataUpdate => {
              console.log('Test', dataUpdate , data , newPassword);

              // this.alertFlag=true
          });
        });
  }
  Logout() :void{

      this.authenService.logout();
      this.router.navigateByUrl('/Login')

  }

}
