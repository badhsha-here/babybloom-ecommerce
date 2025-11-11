import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cartservice } from './cart.service';
import { OrdersService } from './orders.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private cartservice: Cartservice,
    private orderService: OrdersService
  ) {
    this.createAdmin();
   const isAppOpened= localStorage.getItem('app_initialiazed')
   if(!isAppOpened){
    localStorage.removeItem('cart_guest');
    this.cartservice.clearCart(false);

    localStorage.setItem('app_initialiazed','true')
   }
    const loggedUser = this.getloggedInuser();
     this.loggedIn.next(!!loggedUser);
  }

  private loggedIn = new BehaviorSubject<boolean>(this.isloggedIn());
  public isloggedIn$ = this.loggedIn.asObservable();

  private registration = 'users';
  private loggingin = 'loggedinUsers';

  private createAdmin() {
    const users = JSON.parse(localStorage.getItem(this.registration) || '[]');
    const adminExists = users.some((user: any) => user.role === 'admin');
    if (!adminExists) {
      users.push({
        email: 'admin@gmail.com',
        password: 'Admin123',
        role: 'admin',
        name: 'Admin',
        phone: '0000000000',
      });
      localStorage.setItem(this.registration, JSON.stringify(users));
    }
  }

  isAdmin(): boolean {
    const loggedInUser = this.getloggedInuser();
    return loggedInUser && loggedInUser.role === 'admin';
  }

  signup(user: any) {
    const users = JSON.parse(localStorage.getItem(this.registration) || '[]');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(user.email)) {
      throw new Error('Please enter a valid email address');
    }

    if (users.find((a: any) => a.email === user.email)) {
      throw new Error('User already exists');
    }

    if (!user.role) {
      user.role = 'user';
    }
    if (user.isBlocked === undefined) {
      user.isBlocked = false;
    }

    users.push(user);
    localStorage.setItem(this.registration, JSON.stringify(users));
    return user;
  }

  Login(email: string, password: string) {
    const users = JSON.parse(localStorage.getItem(this.registration) || '[]');

    const existingUser = users.find(
      (a: any) => a.email === email && a.password === password
    );

    if (!existingUser) {
      throw new Error('Invalid');
    }
    if (existingUser.isBlocked) {
      throw new Error('blocked');
    }
    localStorage.setItem(this.loggingin, JSON.stringify(existingUser));
    this.loggedIn.next(true);
    this.cartservice.reloadCart();
    return existingUser;
  }

  Logout() {
    localStorage.removeItem(this.loggingin);
    this.cartservice.clearCart(false);
    this.loggedIn.next(false);
  }

  getloggedInuser() {
    const user = localStorage.getItem(this.loggingin);
    return user ? JSON.parse(user) : null;
  }

  isloggedIn() {
    const user = this.getloggedInuser();
    return !!(user && user.email && user.role !== 'admin');
  }

  getAllUsers(): any[] {
    return JSON.parse(localStorage.getItem(this.registration) || '[]');
  }
  
  deleteUser(email: string) {
    let users = JSON.parse(localStorage.getItem(this.registration) || '[]');
    const updatedUsers = users.filter(
      (user: any) =>
        user.email.trim().toLowerCase() !== email.trim().toLowerCase()
    );
    localStorage.setItem(this.registration, JSON.stringify(updatedUsers));

    const loggedInUser = JSON.parse(
      localStorage.getItem(this.loggingin) || '{}'
    );

    let order = this.orderService.getOrders();
    order = order.filter(
      (o: any) => o.email.trim().toLowerCase() !== email.trim().toLowerCase()
    );
    localStorage.setItem('ORDERS', JSON.stringify(order));

    if (
      loggedInUser.email?.trim().toLowerCase() === email.trim().toLowerCase()
    ) {
      this.Logout();
    }
    return true;
  }

  blockUser(email: string) {
    const users = JSON.parse(localStorage.getItem(this.registration) || '[]');
    const index = users.findIndex((user: any) => {
      return user.email.trim().toLowerCase() === email.trim().toLowerCase();
    });
    if (index !== -1) {
      users[index].isBlocked = !users[index].isBlocked;
      localStorage.setItem(this.registration, JSON.stringify(users));
      const status = users[index].isBlocked ? 'Blocked' : 'Unblocked';
      return { user: users[index], status };
    }
    return null;
  }
}
