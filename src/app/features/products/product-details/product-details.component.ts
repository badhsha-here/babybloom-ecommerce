import { Component, OnInit, OutputDecorator } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Cartservice } from 'src/app/core/services/cart.service';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private router: Router,
    private cartservice: Cartservice,
    private app: AppComponent
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.product = this.productService.getProductById(id);
  }

  addtocart(product: any) {
    this.cartservice.addItemtocart(product);

    this.app.openModal('Product added to cart!', 'success');
  }

  goBack() {
    this.router.navigate(['/products']);
  }
}
