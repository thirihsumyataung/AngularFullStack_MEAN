import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { CategorylistingComponent } from './components/categorylisting/categorylisting.component';
import { ProductpageComponent } from './components/productpage/productpage.component';
import { CartComponent } from './components/cart/cart.component';
import { UserordersComponent } from './components/userorders/userorders.component';
import { ManageordersComponent } from './components/manageorders/manageorders.component';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './components/departments/departments.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { ManageproductComponent } from './components/manageproduct/manageproduct.component';
import { RegistrationComponent } from './components/registration/registration.component';
// import { UserModule } from './user.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { RouterLink } from '@angular/router';
import { DashboardUsersComponent } from './components/dashboard-users/dashboard-users.component';
import { DashboardOrdersComponent } from './components/dashboard-orders/dashboard-orders.component';
import { DashboardProductsComponent } from './components/dashboard-products/dashboard-products.component';
import { OrderComponent } from './order/order.component';
const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'homepage',
    component: HomepageComponent
  },
  {
    path:'profile',
    component: ProfileComponent
  },
  {
    path:'editProfile',
    component: EditprofileComponent
  }, 
  {
    path:'cart',
    component: CartComponent
  }
    
  ,
  {
    path:'category',
    component: CategorylistingComponent
  }
   ,
  {
    path:'product',
    component: ProductpageComponent
  }
   ,
  {
    path:'orders',
    component: UserordersComponent
  }
   ,
  {
    path:'manageOrder',
    component: ManageordersComponent
  },
  {
    path:'addProduct',
    component: AddproductComponent
  },
  {
    path:'checkout',
    component: CheckoutComponent
  },
  {
    path:'login',
    component: LoginComponent
  }
  ,
  {
    path:'manageproduct',
    component: ManageproductComponent
  }
  ,
  {
    path:'registration',
    component: RegistrationComponent
  }, 
  {
    path: 'dashboard', 
    children: [
      { 
        path: 'dashboard/userList', 
        component: DashboardUsersComponent
      }, 
      { 
        path: 'dashboard/orders',  
        component: DashboardOrdersComponent
      } , 
      { 
        path: 'dashboard/productlist', 
        component: DashboardProductsComponent
      }
    ],
    component: DashboardProductsComponent
  }, 
  { 
    path: 'dashboard/userList', 
    component: DashboardUsersComponent
  }, 
  { 
    path: 'dashboard/orders',  
    component: DashboardOrdersComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    EditprofileComponent,
    CategorylistingComponent,
    ProductpageComponent,
    CartComponent,
    UserordersComponent,
    ManageordersComponent,
    DepartmentsComponent,
    AddproductComponent,
    CheckoutComponent,
    HomepageComponent,
    LoginComponent,
    ManageproductComponent,
    RegistrationComponent,
    DashboardComponent,
    DashboardUsersComponent,
    DashboardOrdersComponent,
    DashboardProductsComponent,
    OrderComponent, 
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule, 
    HttpClientModule, 
    
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
