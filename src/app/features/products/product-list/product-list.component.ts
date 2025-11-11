import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
import { SearchService } from 'src/app/core/services/Search.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  allProducts: any[] = [];
  productsfilter: any[] = [];
  searchTerm: string = '';
  p: number = 1;

  categories = [
    'All',
    'Fabric Dolls',
    'Baby Shoes',
    'Bodycare & Cosmetics',
    'Bodycon',
  ];
  selectedCategory = 'All';

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.allProducts = this.productService.getProducts();
    this.productsfilter = [...this.allProducts];

    this.route.queryParams.subscribe((params) => {
      const category = params['category'];
      if (category && this.categories.includes(category)) {
        this.selectedCategory = category;
        this.filterProducts('');
      }
    });

    this.searchService.searchTerm$.subscribe((term) => {
      this.filterProducts(term);
    });
  }
  filterProducts(SearchTerm: string) {
    this.searchTerm = SearchTerm;
    const term = SearchTerm.toLowerCase();

    this.productsfilter = this.allProducts.filter((product: any) => {
      const categoryMatch =
        this.selectedCategory === 'All' ||
        product.category === this.selectedCategory;
      const SearchMatch =
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term);
      return categoryMatch && SearchMatch;
    });
  }

  selectedCategoryHandle(category: string) {
    this.selectedCategory = category;

    this.filterProducts('');
  }
}
