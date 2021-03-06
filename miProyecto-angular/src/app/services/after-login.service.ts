import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AfterLoginService implements CanActivate{
  // permite usar las rutas depues que se cumpla el metodo de logueo
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router")
  .RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs")
  .Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router")
  .UrlTree> {
    return this.token.loggedin()
  }

  constructor(private token: TokenService) { }
}
