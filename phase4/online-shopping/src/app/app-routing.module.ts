import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminAddUserComponent } from './admin-add-user/admin-add-user.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminViewProductComponent } from './admin-view-product/admin-view-product.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginGuard } from './guard/login.guard';
import { HomeComponent } from './home/home.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UpdateAddressComponent } from './update-address/update-address.component';
import { UpdatePaymentComponent } from './update-payment/update-payment.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserPurchaseComponent } from './user-purchase/user-purchase.component';
import { UserViewCartComponent } from './user-view-cart/user-view-cart.component';
import { UserViewWishlistComponent } from './user-view-wishlist/user-view-wishlist.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes:Routes=[
    {path: '',component:HomeComponent},
    {path: 'app/home',component:HomeComponent},
    {path: 'home',component:HomeComponent},
    {path: 'app/new-user',component:NewUserComponent},
    {path: 'app/admin-home',component:AdminHomeComponent},
    {path: 'app/add-product',component:AddProductComponent},
    {path: 'app/update-product',component:UpdateProductComponent},
    {path: 'app/admin-view-product',component:AdminViewProductComponent},
    {path: 'app/admin-add-user',component:AdminAddUserComponent},
    {path: 'app/view-user',component:ViewUserComponent},
    {path: 'user-home',component:UserHomeComponent},
    {path: 'app/user-home',component:UserHomeComponent},
    {path: 'user-purchase',component:UserPurchaseComponent},
    {path: 'view-wishlist',component:UserViewWishlistComponent},
    {path: 'view-cart',component:UserViewCartComponent},
    {path: 'update-address',component:UpdateAddressComponent},
    {path: 'update-payment',component:UpdatePaymentComponent},
    {path: 'reset-password',component:ResetPasswordComponent},
    {path: 'forgot-password',component:ForgotPasswordComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}