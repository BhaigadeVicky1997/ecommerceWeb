import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { AccordiondataComponent } from './accordiondata/accordiondata.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { CoreModule } from '../core/core.module';
import { WishlistComponent } from './wishlist/wishlist.component';
import { OrdersComponent } from './orders/orders.component';
import { CouponComponent } from './coupon/coupon.component';
import { NotificationComponent } from './notification/notification.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { ProductComponent } from './product/product.component';
import { FilterComponent } from './filter/filter.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


const routes: Routes = [
  { path: '', component:CartComponent },
  {path:'myaccount',component:MyprofileComponent},
  {path:'payment',component:PaymentComponent},
  {path:'product',component:ProductComponent},
  {path:'single-product',component:SingleproductComponent},
  {path:'orders',component:OrdersComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'coupons',component:CouponComponent},
  {path:'notification',component:NotificationComponent}
]


@NgModule({
  declarations: [CartComponent, PaymentComponent, AccordiondataComponent, MyprofileComponent, WishlistComponent, OrdersComponent, CouponComponent, NotificationComponent, SingleproductComponent, ProductComponent, FilterComponent, EditProfileComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes),
    SharedModule,
    MaterialModule
  ],
  exports:[
    CartComponent, PaymentComponent
  ]
})
export class FeaturesModule { }
