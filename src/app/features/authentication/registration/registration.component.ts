import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  passwordMismatch: boolean = false;
  successMessage: string | null = null;
  showSuccess: boolean = false;
  isloading: boolean = false;

  constructor(
    private authentication: AuthService,
    private router: Router,
    private app: AppComponent
  ) {}

  onSubmit(form: NgForm) {
    form.control.markAllAsTouched();

    for (const value in form.value) {
      if (typeof form.value[value] === 'string') {
        form.value[value] = form.value[value].trim();
      }
    }

    const { firstName, lastName, password, confirmPassword } = form.value;

    this.isloading = true;
    this.successMessage = null;
    this.showSuccess = false;

    if (
      form.invalid ||
      !firstName ||
      !lastName ||
      !password ||
      !confirmPassword
    ) {
      setTimeout(() => {
        this.isloading = false;
        this.app.openModal('Please fill the fields correctly', 'error');
      }, 800);
      return;
    }

    if (password !== confirmPassword) {
      setTimeout(() => {
        this.isloading = false;
        this.passwordMismatch = true;
        this.app.openModal(
          'Password and Confirm Password do not match',
          'error'
        );
      }, 800);
      return;
    }

    this.passwordMismatch = false;

    setTimeout(() => {
      try {
        this.authentication.signup(form.value);
        this.isloading = false;
        this.successMessage =
          'Registration successful! Redirecting to login...';
        this.showSuccess = true;

        setTimeout(() => {
          form.reset();
          this.router.navigate(['/auth/login']);
        }, 1500);
      } catch (error: any) {
        this.isloading = false;
        this.app.openModal(error.message, 'error');
      }
    }, 1000);
  }
}
