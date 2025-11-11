import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart, ChartData, ChartOptions, ChartType } from 'chart.js';
import { OrdersService } from 'src/app/core/services/orders.service';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit, AfterViewInit {
  productscount: number = 0;
  userscount: number = 0;
  orderscount: number = 0;
  constructor(
    private orders: OrdersService,
    private productsservice: ProductsService
  ) {}

  ngOnInit(): void {
    this.productscount = this.productsservice.Products.length;
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const nonAdminUsers = users.filter((u: any) => u.role !== 'admin');
    this.userscount = nonAdminUsers.length;
    this.orderscount = this.orders.getOrders().length;
  }
  ngAfterViewInit() {
    this.createLineChart();
    this.createBarChart();
  }

  createLineChart() {
    new Chart('lineChart', {
      type: 'line',
      data: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: 'Sales',
            data: [5, 20, 15, 10, 25, 18, 20, 23, 15, 22, 28, 30],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59,130,246,0.2)',
            tension: 0.4,
            fill: true,
          },
          {
            label: 'Revenue',
            data: [8, 15, 25, 18, 20, 25, 22, 20, 26, 28, 24, 32],
            borderColor: '#60a5fa',
            backgroundColor: 'rgba(96,165,250,0.2)',
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: { color: '#d1d5db' },
          },
          tooltip: {
            backgroundColor: '#1f2937',
            titleColor: '#fff',
            bodyColor: '#d1d5db',
          },
        },
        scales: {
          x: {
            ticks: { color: '#9ca3af' },
            grid: { color: 'rgba(75,85,99,0.2)' },
          },
          y: {
            ticks: { color: '#9ca3af' },
            grid: { color: 'rgba(75,85,99,0.2)' },
          },
        },
      },
    });
  }

  createBarChart() {
    new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['USA', 'IND', 'BRZ', 'MEX'],
        datasets: [
          {
            label: 'Sales',
            data: [500, 1000, 1500, 2100],
            backgroundColor: '#3b82f6',
            borderRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: {
            ticks: { color: '#9ca3af' },
            grid: { display: false },
          },
          y: {
            ticks: { color: '#9ca3af' },
            grid: { color: 'rgba(75,85,99,0.2)' },
          },
        },
      },
    });
  }
}
