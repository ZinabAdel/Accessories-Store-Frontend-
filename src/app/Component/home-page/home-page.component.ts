import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  isSilver:boolean = false;
  isGold: boolean = false;
  img: string[] = [];
  constructor() {
    this.img = ["m1.jpeg","m2.jpeg","m3.jpeg","m1.jpeg","m2.jpeg","m3.jpeg","m1.jpeg","m2.jpeg","m3.jpeg","m1.jpeg","m2.jpeg"]
   }

  ngOnInit(): void {
  }
  public createImgPath = (serverPath: string) => {
    console.log(`${environment.API_URL}/${serverPath}`)
    return `${environment.API_URL}/${serverPath}`;
  }
  checkSilver(){
    this.isSilver = true
    this.isGold = false
  }
}
