import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Cartservice } from 'src/app/core/services/cart.service';
import { Form, NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { OrdersService } from 'src/app/core/services/orders.service';
import { AppComponent } from 'src/app/app.component';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  showSuccessPopup: boolean = false;

  fullname: string = '';
  email: string = '';
  address: string = '';
  city: string = '';
  pin: string = '';
  country: string = '';

  cartProducts: any[] = [];
  total: number = 0;

  constructor(
    private authservice: AuthService,
    private cartservice: Cartservice,
    private router: Router,
    private orderservice: OrdersService,
    private app: AppComponent
  ) {}

  ngOnInit(): void {
    const User = this.authservice.getloggedInuser();
    this.fullname = `${User.firstName} ${User.lastName}`;
    this.email = User.email;

    this.cartProducts = this.cartservice.getCartItems();
    this.total = this.cartservice.getPrice();
  }

  placeOrder(form: NgForm) {
    if (form.valid) {
      const loggedInuser = this.authservice.getloggedInuser();
      const order = {
        id: uuidv4(),
        fullname: this.fullname,
        email: this.email,
        address: this.address,
        city: this.city,
        pin: this.pin,
        country: this.country,
        products: this.cartProducts,
        total: this.total,
        orderDate: new Date(),
        items: this.cartProducts,
        status: 'pending',
      };

      this.orderservice.saveOrder(order);
      this.showSuccessPopup = true;
      setTimeout(() => {
        this.showSuccessPopup = false;
        this.router.navigate(['/orderlist']);
      }, 3000);
      this.cartservice.clearCart();

      form.resetForm({
        fullname: this.fullname,
        email: this.email,
      });
    } else {
      this.app.openModal('Please fill all required fields', 'error');
      this.showSuccessPopup = false;
    }
  }
}
