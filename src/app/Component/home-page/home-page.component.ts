import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { environment } from 'src/environments/environment';
import { IProduct } from '../Shared_Interfces/iproduct';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  isSilver = false;
  isGold = false;
  img: string[] = [];
  AllProduct: IProduct[] = [];
  constructor(private prodServices: ProductService) {
    this.img = ['m1.jpeg',"m2.jpeg","m3.jpeg","m1.jpeg","m2.jpeg","m3.jpeg","m1.jpeg","m2.jpeg","m3.jpeg","m1.jpeg","m2.jpeg"]
   }

  ngOnInit(): void {
    this.getAllProduct();
  }
  public createImgPath = (serverPath: string) => {
    console.log(`${environment.API_URLIMG}/${serverPath}`);
    return `${environment.API_URLIMG}/${serverPath}`;
  }
getAllProduct(): void{
this.prodServices.getAllProduct().subscribe(sucess => {
this.AllProduct = sucess;
});
  }
  checkSilver(){
    this.isSilver = true
    this.isGold = false
  }
}
