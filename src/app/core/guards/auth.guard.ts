import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, Router, UrlSegment } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const user = localStorage.getItem('loggedInUser');
    if (user && user !== 'admin') {
      return true;
    } else {
      this.router.navigateByUrl('/auth/login');
      return false;
    }
  }

}
