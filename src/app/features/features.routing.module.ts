import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserProfileComponent } from './user/user-profile.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { OrderlistComponent } from './orders/orderlist/orderlist.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { AdminDashboardComponent } from './user/admin-dashboard/admin-dashboard.component';
import { AdminAuthGuard } from '../core/guards/admin-auth.guard';
import { ManageProductsComponent } from './products/manage-products/manage-products.component';
import { ManageOrdersComponent } from './orders/manage-orders/manage-orders.component';
import { AdminLayoutComponent } from '../layoutes/admin-layout/admin-layout.component';
import { ManageUsersComponent } from './user/manage-users/manage-users.component';
import { MainLayoutComponent } from '../layoutes/mainLayout.component';
import { HomeComponent } from '../pages/home/home.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AdminAuthGuard],
    children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'manageproducts', component: ManageProductsComponent },
      { path: 'manageorders', component: ManageOrdersComponent },
      { path: 'manageusers', component: ManageUsersComponent },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' }, 
      { path: 'home', component: HomeComponent },
      { path: 'cart', component: CartComponent },
      {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [AuthGuard],
      },

      {
        path: 'user',
        component: UserProfileComponent,
        canActivate: [AuthGuard],
      },
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailsComponent },
      { path: 'orderlist', component: OrderlistComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
