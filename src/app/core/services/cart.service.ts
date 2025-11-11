import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class Cartservice {
  private cartSubject = new BehaviorSubject<any[]>(this.getCartItems());
  cart$ = this.cartSubject.asObservable();

  constructor() {}

  private getCartKey(): string {
    const user = JSON.parse(localStorage.getItem('loggedinUsers') || 'null');
    return user ? `cart_${user.email}` : 'cart_guest';
  }

  getCartItems(): any[] {
    const cart = this.getCartKey();
    return JSON.parse(localStorage.getItem(cart) || '[]');
  }

  addItemtocart(item: any) {
    const cartKey = this.getCartKey();
    const cart = this.getCartItems();

    const existingItem = cart.find((Item: any) => Item.id === item.id);

    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem(cartKey, JSON.stringify(cart));
    this.cartSubject.next(cart);
  }

  removeItem(itemId: number) {
    let cartKey = this.getCartKey();
    let cart = this.getCartItems();
    cart = cart.filter((i) => i.id !== itemId);
    localStorage.setItem(cartKey, JSON.stringify(cart));
    this.cartSubject.next(cart);
  }

  updateCartitem(item: any) {
    const cartKey = this.getCartKey();
    const cart = this.getCartItems();
    const index = cart.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      cart[index] = item;
    }

    localStorage.setItem(cartKey, JSON.stringify(cart));
    this.cartSubject.next(cart);
  }

  reloadCart() {
    const items = this.getCartItems();
    this.cartSubject.next(items);
  }

  clearCart(resetStorage = false) {
    const cartKey = this.getCartKey();
    if (resetStorage) {
      localStorage.removeItem(cartKey);
    } else {
      localStorage.setItem(cartKey, JSON.stringify([]));
    }
    this.cartSubject.next([]);
  }

  getcount(): number {
    return this.getCartItems().reduce(
      (acc, item) => acc + (item.quantity || 1),
      0
    );
  }

  getPrice(): number {
    return this.getCartItems().reduce(
      (acc, item) =>
        acc + (Number(item.price) || 0) * Number(item.quantity || 1),
      0
    );
  }
}
