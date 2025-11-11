import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent {
  @Input() product: any = {};
  @Input() categories: string[] = [];
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  closeModal() {
    this.close.emit();
  }
  onSubmission(){
    this.save.emit(this.product);
    this.closeModal();
  }
}
