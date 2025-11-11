import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css'],
})
export class ManageProductsComponent {
  products: any[] = [];
  p: number = 1;
  productsFilter: any[] = [];
  categoryCount: { [key: string]: number } = {};
  editModalOpen: boolean = false;
  selectedProduct: any = {};
  productToDelete: any = null;
  isDeleteModelOpen: boolean = false;
  isAddOpen: boolean = false;
  viewModal: boolean = false;

  categories = [
    'All',
    'Fabric Dolls',
    'Baby Shoes',
    'Bodycare & Cosmetics',
    'Bodycon',
  ];
  selectedCategory = 'All';
  constructor(
    private productservice: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.products = this.productservice.getProducts();
    this.productsFilter = [...this.products];
    this.getCategoryCount();
    this.route.queryParams.subscribe((params) => {
      const category = params['category'];
      if (category && this.categories.includes(category)) {
        this.selectedCategory = category;
        this.filterProducts();
      }
    });
  }
  filterProducts() {
    this.productsFilter = this.products.filter((product: any) => {
      return (
        this.selectedCategory === 'All' ||
        product.category.toLowerCase() === this.selectedCategory.toLowerCase()
      );
    });
  }
  selectCategoryChange(category: string) {
    this.selectedCategory = category;
    this.filterProducts();
  }
  getCategoryCount() {
    this.categoryCount = { All: this.products.length };
    this.categories.slice(1).forEach((cat) => {
      this.categoryCount[cat] = this.products.filter(
        (p) => p.category.toLowerCase() === cat.toLowerCase()
      ).length;
    });
  }

  openEditModal(product: any) {
    this.selectedProduct = { ...product };
    this.editModalOpen = true;
  }

  updateProduct(updatedProduct: any) {
    this.productservice.updateProduct(updatedProduct.id, updatedProduct);
    const index = this.products.findIndex((p) => p.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = { ...updatedProduct };
      this.filterProducts();
      this.getCategoryCount();
    }
    this.editModalOpen = false;
  }

  openDeleteModel(product: any) {
    this.productToDelete = product;
    this.isDeleteModelOpen = true;
  }
  closeDeleteModel() {
    this.productToDelete = null;
    this.isDeleteModelOpen = false;
  }
  confirmDelete() {
    if (this.productToDelete) {
      this.productservice.deleteProduct(this.productToDelete.id);
      this.products = this.productservice.getProducts();
      this.filterProducts();
      this.getCategoryCount();
    }
    this.closeDeleteModel();
  }
  openAddModal() {
    this.isAddOpen = true;
  }
  closeAddModal() {
    this.isAddOpen = false;
  }
  onProductAdded(newProduct:any){
  this.filterProducts();
  this.getCategoryCount();
  }
  openViewModal(product: any) {
    this.selectedProduct = product;
    this.viewModal = true;
  }
  closeViewModal(product: any) {
    this.selectedProduct = product;
    this.viewModal = false;
  }
}
