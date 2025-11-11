import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private orders = 'ORDERS';
  constructor() {}

  orderStatus(orderId: string, newStatus: string) {
    const orders = JSON.parse(localStorage.getItem(this.orders) || '[]');
    const Index = orders.findIndex((order: any) => order.id === orderId);
    if (Index !== -1) {
      orders[Index].status = newStatus;
      localStorage.setItem(this.orders, JSON.stringify(orders));
    }
  }
  saveOrder(order: any) {
    const orders = JSON.parse(localStorage.getItem(this.orders) || '[]');
    orders.push(order);
    localStorage.setItem(this.orders, JSON.stringify(orders));
  }

  getOrders() {
    return JSON.parse(localStorage.getItem(this.orders) || '[]');
  }

  clearOrders() {
    localStorage.removeItem(this.orders);
  }
}
