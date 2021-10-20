import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, Event as NavigationEvent, ParamMap, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AccessoriesStore';

  
  visibility:boolean=false;
  constructor(private activatedRouter:ActivatedRoute, private router:Router){
  }
  
  
   ngOnInit(){
    // this.getUrl();

    // start
    this.router.events.pipe(
      filter(events=>events instanceof NavigationEnd),
      map(evt =>this.activatedRouter),
      map(route => {
      while(route.firstChild) {
      route = route.firstChild;
      }
      return route;
      }))
      .pipe(
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
).subscribe(x=>x.footer===true && x.header===true ?this.visibility=true:this.visibility=false)
    //end  
  }
}
