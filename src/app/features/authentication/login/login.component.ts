import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isloading: boolean = false;
  successmessage: null | string = null;
  showSuccess: boolean = false;

  constructor(
    private authentication: AuthService,
    private routing: Router,
    private app: AppComponent
  ) {}

  LoginUser(Form: NgForm) {
    this.isloading = true;

    const { email, password } = Form.value;
    setTimeout(() => {
      try {
        const isUserExist = this.authentication.Login(email, password);
        if (isUserExist) {
          localStorage.setItem('isloggedIn', 'true');
          localStorage.setItem('loggedInUser', JSON.stringify(isUserExist));
          if (isUserExist.role !== 'admin') {
            this.successmessage = 'Login Successfull ,taking you to home page';
            this.showSuccess = true;
          } else {
            this.successmessage =
              'Welcome Admin  ,Redirecting to Admin dashboard';
            this.showSuccess = true;
          }

          setTimeout(() => {
            Form.reset();
            const loggedInUser = this.authentication.getloggedInuser();
            if (loggedInUser.role === 'admin') {
              this.routing.navigate(['/admin']);
            } else {
              this.routing.navigate(['/home']);
            }
          }, 1500);
        }
      } catch (error: any) {
        if (error.message === 'blocked') {
          this.app.openModal('oops! Your Account Is Suspended', 'error');
        } else {
          this.app.openModal('check your email or password', 'error');
        }
      } finally {
        this.isloading = false;
      }
    }, 500);
  }
}
