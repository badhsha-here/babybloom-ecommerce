import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  template: `
    <div class="flex flex-col min-h-screen">
      <app-navbar class="fixed top-0 left-0 right-0 z-50"></app-navbar>

      <!-- Main content -->
      <main class="flex-grow mt-16">
        <router-outlet></router-outlet>
      </main>

      <app-footer></app-footer>
    </div>
  `,
})
export class MainLayoutComponent {}
