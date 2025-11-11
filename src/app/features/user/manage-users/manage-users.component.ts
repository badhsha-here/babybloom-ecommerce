import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css'],
})
export class ManageUsersComponent implements OnInit {
  users: any[] = [];
  deleteModal: boolean = false;
  blockModal: boolean = false;
  selectedUser: any;
  constructor(private authservice: AuthService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.users = this.authservice
      .getAllUsers()
      .filter((user) => user.role !== 'admin');
  }

  deleteUser(user:any) {
    this.deleteModal = true;
    this.selectedUser=user;
  }

  confirmDelete() {
    this.authservice.deleteUser(this.selectedUser.email);
    this.loadUsers();
    this.deleteModal = false;
  }

  closeDeleteModel() {
    this.deleteModal = false;
  }

  blockUser(user:any) {
    this.blockModal = true;
    this.selectedUser= user;
  }

  confirmBlock() {
    this.authservice.blockUser(this.selectedUser.email);
    this.loadUsers();
    this.blockModal = false;
  }

  closeBlockModal() {
    this.blockModal = false;
  }
}
