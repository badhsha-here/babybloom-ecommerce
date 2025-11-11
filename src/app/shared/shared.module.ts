import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader.component';
import { ModalComponent } from './modal/modal.component';
import { CommonModule } from '@angular/common';
import { shortIdpipe } from './short-id.pipe';
@NgModule({
  declarations: [LoaderComponent, ModalComponent,shortIdpipe],
  imports: [CommonModule],
  exports: [LoaderComponent, ModalComponent,shortIdpipe],
})
export class SharedModule {}
