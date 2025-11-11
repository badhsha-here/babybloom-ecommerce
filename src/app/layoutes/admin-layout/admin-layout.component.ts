import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
})
export class AdminLayoutComponent {
  constructor(private auth: AuthService, private router: Router) {}

  getCurrentPageTitle(): string {
    const url = this.router.url;
    if (url.includes('manageproducts')) {
      return 'products';
    }
    if (url.includes('manageorders')) {
      return 'orders';
    }
    if (url.includes('manageusers')) {
      return 'users';
    }
    return 'dashboard';
  }

  logout() {
    this.auth.Logout();
    this.router.navigate(['']);
  }
}
