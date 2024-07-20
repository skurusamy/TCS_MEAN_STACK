import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewUserComponent } from './new-user/new-user.component';
import { HttpModule } from '@angular/http';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AdminAddUserComponent } from './admin-add-user/admin-add-user.component';
import { AdminViewProductComponent } from './admin-view-product/admin-view-product.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserPurchaseComponent } from './user-purchase/user-purchase.component';
import { UserViewWishlistComponent } from './user-view-wishlist/user-view-wishlist.component';
import { UserViewCartComponent } from './user-view-cart/user-view-cart.component';
import { UpdateAddressComponent } from './update-address/update-address.component';
import { UpdatePaymentComponent } from './update-payment/update-payment.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewUserComponent,
    AdminHomeComponent,
    AdminHeaderComponent,
    UserHeaderComponent,
    SideMenuComponent,
    AddProductComponent,
    UpdateProductComponent,
    AllProductsComponent,
    ViewUserComponent,
    AdminAddUserComponent,
    AdminViewProductComponent,
    UserHomeComponent,
    UserPurchaseComponent,
    UserViewWishlistComponent,
    UserViewCartComponent,
    UpdateAddressComponent,
    UpdatePaymentComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
   

  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
