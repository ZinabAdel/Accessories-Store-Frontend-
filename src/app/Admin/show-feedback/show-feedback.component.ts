import { Component, OnInit } from '@angular/core';
import { IFeedback } from 'src/app/Component/Shared_Interfces/IFeedback';
import { FeedbackService } from 'src/app/Services/feedback.service';

@Component({
  selector: 'app-show-feedback',
  templateUrl: './show-feedback.component.html',
  styleUrls: ['./show-feedback.component.scss']
})
export class ShowFeedbackComponent implements OnInit {

  feedback:IFeedback[] =[]
  Error:string
  constructor(private feedService:FeedbackService) { }

  ngOnInit(): void {
    this.getFeedback()
  }

  getFeedback()
  {
    this.feedService.getFeedback().subscribe(data=>{
        this.feedback = data;
      },Wrong=>{
        this.Error = Wrong
      }      
    )
  }  


}
