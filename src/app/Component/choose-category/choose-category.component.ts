import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { ICategory } from '../Shared_Interfces/ICategory';

@Component({
  selector: 'app-choose-category',
  templateUrl: './choose-category.component.html',
  styleUrls: ['./choose-category.component.scss']
})
export class ChooseCategoryComponent implements OnInit {
  Categoies: ICategory[] =[];
  Error :string;

  constructor(private catService:CategoryService,private active:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getCatigoreis()
  }

  getCatigoreis()
  {
    this.catService.getCategories().subscribe(data=>{
        console.log("ts",data)
        this.Categoies=data;
      },Wrong=>{
        this.Error = Wrong
      }      
    )
  }

  whichCategory(catId:number){
    this.router.navigate(["Product/AllProduct/",catId])
  }

  change():void{
    this.router.navigateByUrl('HomePage')
  }
}
