import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
import Rellax from 'rellax';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, RouterModule],
})
export class HomeComponent implements OnInit, AfterViewInit {
  featuredProducts: any[] = [];
  constructor(private router: Router, private poductservice: ProductsService) {}

  gotoProducts() {
    this.router.navigate(['/products']);
  }

  ngOnInit(): void {
    this.featuredProducts = this.poductservice.featuredProducts(6);
  }

  ngAfterViewInit(): void {
    const rellax = new Rellax('.rellax', {
      center: true,
      round: true,
      vertical: true,
      horizontal: false,
      breakpoints: [576, 768, 1201],
    });

    if (window.innerWidth < 768) {
      document.querySelectorAll('.rellax').forEach((el: any) => {
        el.setAttribute('data-rellax-speed', '-1');
      });
      rellax.refresh();
    }
  }
}
