import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Cartservice } from 'src/app/core/services/cart.service';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;
  isUserloggged: boolean = false;

  constructor(
    private cartService: Cartservice,
    private authservice: AuthService,
    private app: AppComponent,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe((item) => {
      this.cartItems = item;
      this.totalPrice = this.cartService.getPrice();
    });

    if (this.authservice.isloggedIn()) {
      this.isUserloggged = true;
    } else {
      this.isUserloggged = false;
    }
  }

  increaseCount(item: any) {
    item.quantity++;
    this.cartService.updateCartitem(item);
  }
  decreaseCount(item: any) {
    if (item.quantity && item.quantity > 1) {
      item.quantity--;
    }
    this.cartService.updateCartitem(item);
  }

  removeItem(id: number) {
    this.cartService.removeItem(id);
    this.app.openModal('Item removed from cart', 'info');
  }

  clearCart() {
    this.cartService.clearCart();
    this.app.openModal('Cart cleared', 'info');
  }
  checkout() {
    if (this.isUserloggged) {
      this.router.navigate(['/checkout']);
    } else {
      this.app.openModal('Please log in to proceed to checkout.', 'error');
      this.router.navigate(['/auth/login']);
    }
  }
}
