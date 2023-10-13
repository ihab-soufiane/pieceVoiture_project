import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SiginComponent } from './sigin/sigin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AccounttypeComponent } from './accounttype/accounttype.component';
import { CardComponent } from './card/card.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { VendorComponent } from './vendor/vendor.component';
import { ProductComponent } from './product/product.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxImageCompressService} from 'ngx-image-compress';
import { CookieService } from 'ngx-cookie-service';

import { ManageCommandsComponent } from './admin/manage-commands/manage-commands.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnhotorizedComponent } from './unhotorized/unhotorized.component';
import { FooterComponent } from './footer/footer.component';
import { CompanyComponent } from './company/company.component';
// import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { ManageUserComponent } from './admin/manage-user/manage-user.component';


import { UpdateProductComponent } from './product/update-product/update-product.component';
import { DetailProductComponent } from './product/detail-product/detail-product.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SiginComponent,
    NavbarComponent,
    HomeComponent,
    AccounttypeComponent,
    CardComponent,
    UserProfileComponent,
    VendorComponent,
    ProductComponent,
    UpdateProductComponent,
    DetailProductComponent,
    ManageProductsComponent,
    ManageUserComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [NgxImageCompressService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
