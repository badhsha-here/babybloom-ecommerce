import { NgModule } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user/user-profile.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { OrderlistComponent } from './orders/orderlist/orderlist.component';
import { FeaturesRoutingModule } from './features.routing.module';
import { AuthenticationModule } from './authentication/auth.module';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ManageOrdersComponent } from './orders/manage-orders/manage-orders.component';
import { ManageProductsComponent } from './products/manage-products/manage-products.component';
import { AddProductComponent } from './products/manage-products/add-product/add-product.component';
import { EditProductComponent } from './products/manage-products/edit-product/edit-product.component';
import { AdminDashboardComponent } from './user/admin-dashboard/admin-dashboard.component';
import { ManageUsersComponent } from './user/manage-users/manage-users.component';

@NgModule({
  declarations: [
    CartComponent,
    CheckoutComponent,
    UserProfileComponent,
    ProductListComponent,
    ProductDetailsComponent,
    OrderlistComponent,
    ManageOrdersComponent,
    ManageProductsComponent,
    AddProductComponent,
    EditProductComponent,
    AdminDashboardComponent,
    ManageUsersComponent



  ],
  imports: [
    CommonModule,
    FormsModule,
    FeaturesRoutingModule,
    AuthenticationModule,
    SharedModule,
    NgxPaginationModule,
  ],
})
export class FeaturesModule {}
