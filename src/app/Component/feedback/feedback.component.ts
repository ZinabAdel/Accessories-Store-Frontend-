import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { FeedbackService } from 'src/app/Services/feedback.service';
import { IFeedback } from '../Shared_Interfces/IFeedback';
import { AccountService } from 'src/app/Services/account.service';
import { ILogin } from '../Shared_Interfces/ILogin';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  isClicked:boolean = false
  isEnteredFeedback: boolean =  false
  feedbackForm:any;
  feedback:IFeedback
  userInfo: ILogin;
  clientID: string = this.authenService.getUserId();
  constructor(private fb: FormBuilder, private feedService:FeedbackService,private authenService:AuthenticationService,
    private accountService:AccountService) { }

  ngOnInit(): void {
    this.feedbackForm=this.fb.group({
      fullName:['',[Validators.required ]],
      clientReview:['',[Validators.required ]],
      clientID:['',[Validators.required ]]
    })
    this.getClientInformation();
  }
  
  onSubmit(){
    console.log("hello",this.feedbackForm.value)
    const user = this.feedbackForm.value;
    this.addNewFeedbackCategory()
  }
  get formFields(){
    return this.feedbackForm.controls;
  }
  getClientInformation(): void{
    this.clientID = this.authenService.getUserId();
    this.accountService.getClientInformation(this.clientID).subscribe(
        data => {
            console.log('info', data );
            this.userInfo = data;
            console.log('usetd', this.userInfo.userName, this.userInfo.id );
        }
      );
  }

  addNewFeedbackCategory(){
    this.isClicked = true
    // if(this.feedbackForm.value.clientReview != ''){
      // this.accountService.getClientInformation(this.authenService.getUserId()).subscribe(
      //   data => {
      this.feedbackForm.value.clientID = this.userInfo.id
          this.feedService.addNewFeedback(this.feedbackForm.value).subscribe(
            sucess=>{
              console.log("addFeedback")
              this.isEnteredFeedback = true
            },
            wrong=>{
              this.isEnteredFeedback = false
            })
        // })
    // }
  }
}
