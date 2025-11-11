import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  modelOpen: boolean = false;
  modalMessage: string = '';
  modalType: 'success' | 'error' | 'info' = 'info';

  constructor(private router: Router) {}

  openModal(message: string, type: 'success' | 'error' | 'info' = 'info') {
    this.modalMessage = message;
    this.modalType = type;
    this.modelOpen = true;

    setTimeout(() => (this.modelOpen = false), 3000);
  }
}
