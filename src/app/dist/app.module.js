"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var signup_component_1 = require("./signup/signup.component");
var sigin_component_1 = require("./sigin/sigin.component");
var navbar_component_1 = require("./navbar/navbar.component");
var home_component_1 = require("./home/home.component");
var accounttype_component_1 = require("./accounttype/accounttype.component");
var card_component_1 = require("./card/card.component");
var user_profile_component_1 = require("./user-profile/user-profile.component");
var http_1 = require("@angular/common/http");
var vendor_component_1 = require("./vendor/vendor.component");
var product_component_1 = require("./product/product.component");
var ng2_search_filter_1 = require("ng2-search-filter");
var ngx_image_compress_1 = require("ngx-image-compress");
var ngx_cookie_service_1 = require("ngx-cookie-service");
var update_product_component_1 = require("./product/update-product/update-product.component");
var detail_product_component_1 = require("./product/detail-product/detail-product.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                signup_component_1.SignupComponent,
                sigin_component_1.SiginComponent,
                navbar_component_1.NavbarComponent,
                home_component_1.HomeComponent,
                accounttype_component_1.AccounttypeComponent,
                card_component_1.CardComponent,
                user_profile_component_1.UserProfileComponent,
                vendor_component_1.VendorComponent,
                product_component_1.ProductComponent,
                update_product_component_1.UpdateProductComponent,
                detail_product_component_1.DetailProductComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                ng2_search_filter_1.Ng2SearchPipeModule
            ],
            providers: [ngx_image_compress_1.NgxImageCompressService, ngx_cookie_service_1.CookieService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
