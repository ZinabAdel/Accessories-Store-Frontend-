import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenGuard implements CanActivate , CanActivateChild {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let url: string = state.url;
      return this.checkUserLogin(route, url);
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      return this.canActivate(childRoute, state);
  }

  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
    console.log("not logged")
    if (this.authenticationService.isLoggedIn()) {
      const userRole = this.authenticationService.getRole(); // user
      if (route.data.role && route.data.role.indexOf(userRole) === -1) {
        alert("unauthorized Link");
        this.router.navigate(['/']);
        return false;
      }
      return true;
    }
    this.router.navigate(['/Register'], { queryParams: { returnUrl: url } });
    return false;
  }
}
