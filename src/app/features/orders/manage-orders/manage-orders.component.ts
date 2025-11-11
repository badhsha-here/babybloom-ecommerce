import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {

orders: any[] = [];
modalItems: any[]|null = null;

  constructor(private orderService:OrdersService) { }

  ngOnInit(): void {
    this.loadOrders()
  }
  loadOrders() {
    this.orders= this.orderService.getOrders();
  }
  changeStatus(order: any,status: string) {
    order.status = status;
    this.orderService.orderStatus(order.id, status);
  }

}
