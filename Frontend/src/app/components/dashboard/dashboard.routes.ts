import { DashboardOrdersComponent } from "../dashboard-orders/dashboard-orders.component";
import { DashboardProductsComponent } from "../dashboard-products/dashboard-products.component";
import { Routes } from '@angular/router';

export const DahsboardRoutes: Routes = [ 
 { 
     path: 'dashboard', 
     component: DashboardProductsComponent, 
     children: [
         {path: '/dashboard/productlists'}
     ]
 }
]