"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var card_component_1 = require("./card/card.component");
var home_component_1 = require("./home/home.component");
var sigin_component_1 = require("./sigin/sigin.component");
var signup_component_1 = require("./signup/signup.component");
var user_profile_component_1 = require("./user-profile/user-profile.component");
var vendor_component_1 = require("./vendor/vendor.component");
var guardrole_guard_1 = require("./guardrole.guard");
// import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
// import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
// import { ManageCommandsComponent } from './admin/manage-commands/manage-commands.component';
var not_found_component_1 = require("./not-found/not-found.component");
var unhotorized_component_1 = require("./unhotorized/unhotorized.component");
var company_component_1 = require("./company/company.component");
// import { DashboardAdminCo:mponent } from './admin/dashboard-admin/dashboard-admin.component';
var detail_product_component_1 = require("./product/detail-product/detail-product.component");
var routes = [
    {
        path: "signin", component: sigin_component_1.SiginComponent
    },
    {
        path: "signup", component: signup_component_1.SignupComponent
    },
    {
        path: "", component: home_component_1.HomeComponent
    },
    {
        path: "card", component: card_component_1.CardComponent
    },
    {
        path: "user/:id", component: user_profile_component_1.UserProfileComponent
    },
    {
        path: "vendor", component: vendor_component_1.VendorComponent, canActivate: [guardrole_guard_1.GuardroleGuard], data: { requiredRole: ['business'] }
    },
    // {
    //   // path:"admin/product",component:ManageProductsComponent,canActivate: [GuardroleGuard],data: { requiredRole: ['admin'] } 
    // },
    // {
    //   // path:"admin/user",component:ManageUsersComponent,canActivate: [GuardroleGuard],data: { requiredRole: ['admin'] } 
    // },
    // {
    //   // path:"admin/commande",component:ManageCommandsComponent,canActivate: [GuardroleGuard],data: { requiredRole: ['admin'] } 
    // },
    {
        path: "auth", component: unhotorized_component_1.UnhotorizedComponent
    },
    {
        path: "company", component: company_component_1.CompanyComponent
    },
    // path:"vendor",component:VendorComponent
    {
        path: "detailProduct/:id", component: detail_product_component_1.DetailProductComponent
    },
    {
        path: "**", component: not_found_component_1.NotFoundComponent
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
