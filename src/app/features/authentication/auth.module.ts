// authentication.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthRoutingModule } from './auth.routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    ForgotPasswordComponent,
  ],
  imports: [CommonModule, FormsModule, AuthRoutingModule, SharedModule],
  exports: [LoaderComponent],
})
export class AuthenticationModule {}
