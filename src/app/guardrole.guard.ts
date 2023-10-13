import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardroleGuard implements CanActivate {
  constructor(private cookie:CookieService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const requiredRole = route.data['requiredRole'];
    const userRole = this.cookie.get("role");

    if (requiredRole.includes(userRole)) {
      return true;
    } else {
this.router.navigate(["/auth"])
      return false;
    }
  }
  
}