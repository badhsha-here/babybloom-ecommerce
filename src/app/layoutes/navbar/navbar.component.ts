import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Cartservice } from 'src/app/core/services/cart.service';
import { SearchService } from 'src/app/core/services/Search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isloggedin: boolean = false;
  cartcount: number = 0;
  searchTerm: string = '';

  constructor(
    private authservice: AuthService,
    private router: Router,
    private cartservice: Cartservice,
    private SearchService: SearchService
  ) {}

  ngOnInit(): void {
    this.authservice.isloggedIn$.subscribe((state) => {
      this.isloggedin = state;

      this.cartservice.cart$.subscribe((items) => {
        this.cartcount = items.length;
      });
    });
  }

  logout() {
    this.authservice.Logout();
    this.isloggedin = false;
  }

  search() {
    this.SearchService.updateSearchTerm(this.searchTerm);
  }
}
