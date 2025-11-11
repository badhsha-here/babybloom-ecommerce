import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MainLayoutComponent } from './mainLayout.component';
import { FormsModule } from '@angular/forms';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, MainLayoutComponent,AdminLayoutComponent],
  imports: [CommonModule, AppRoutingModule, FormsModule],
  exports: [NavbarComponent, FooterComponent, MainLayoutComponent],
})
export class LayoutModule {}
