import { Component, EventEmitter, Output } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  @Output() closeAddModal = new EventEmitter<void>();
  @Output() newProductAdded= new EventEmitter<any>()

  newProduct = {
    id: 0,
    name: '',
    price: 0,
    category: '',
    image: '',
    description: '',
    extraDescription: '',
  };

  categories = [
    'Fabric Dolls',
    'Baby Shoes',
    'Bodycare & Cosmetics',
    'Bodycon',
  ];

  constructor(private productsService: ProductsService) {}
  addProduct() {
    this.newProduct.id =
      this.productsService.Products.length > 0
        ? Math.max(...this.productsService.Products.map((p) => p.id)) + 1
        : 1;
    this.productsService.addProduct({ ...this.newProduct });
    this.newProductAdded.emit({...this.newProduct})
    this.close();
  }

  close() {
    this.closeAddModal.emit();
  }
}
