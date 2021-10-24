import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  isClicked:boolean = false
  isEnteredFeedback: boolean =  false
  constructor() { }

  ngOnInit(): void {
  }

  send(){
    this.isClicked = true
    // if( != ''){ 
    //   this.isEnteredFeedback = true
    // }
    // else
    // {
    //   this.isEnteredFeedback = false
    // }
  }
}
