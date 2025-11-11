import { Component } from '@angular/core';
import { OrdersService } from 'src/app/core/services/orders.service';
import { OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css'],
})
export class OrderlistComponent implements OnInit {
  isloggedin: boolean = false;
  orders: any[] = [];
  orderStatus: any = null;
  constructor(
    private orderservice: OrdersService,
    private authservice: AuthService
  ) {}

  ngOnInit(): void {
    this.isloggedin = this.authservice.isloggedIn();
    this.loadOrders();

    setInterval(() => {
      this.loadOrders();
    }, 1000);
  }

  loadOrders() {
    const User = this.authservice.getloggedInuser();
    const allOrders = this.orderservice.getOrders();
    this.orders = allOrders
      .filter((order: any) => order.email === User.email)
      .sort(
        (a: any, b: any) =>
          new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime()
      );
      
  }
}
