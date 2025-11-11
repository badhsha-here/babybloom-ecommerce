import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  User: any = null;

  constructor(
    private authservice: AuthService,
    private router: Router,
    private app: AppComponent
  ) {}

  ngOnInit(): void {
    this.User = this.authservice.getloggedInuser();

    if (!this.User) {
      this.router.navigate(['/auth/login']);
    }
  }

  logout() {
    this.authservice.Logout();
    this.app.openModal('Logged out successfully', 'success');
    this.router.navigate(['/home']);
  }
}
