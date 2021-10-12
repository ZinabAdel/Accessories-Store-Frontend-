import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  isSilver:boolean = false
  isGold:boolean = false
  img:string[] = []
  constructor() {
    this.img = ["p1.jpeg","p3.jpeg","p3.jpeg"]
   }

  ngOnInit(): void {
  }

  checkSilver(){
    this.isSilver = true 
    this.isGold = false
  }
}
