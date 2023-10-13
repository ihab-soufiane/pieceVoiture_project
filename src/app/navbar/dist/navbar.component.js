"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NavbarComponent = void 0;
var core_1 = require("@angular/core");
var jwt_decode_1 = require("jwt-decode");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(cookie, route) {
        this.cookie = cookie;
        this.route = route;
        this.test = false;
        this.data = { user: { _id: '' } };
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var token = this.cookie.get('token');
        this.decoded = jwt_decode_1["default"](token);
        this.data.user._id = this.decoded.user._id;
    };
    NavbarComponent.prototype.navchange = function () {
        if (this.cookie.get('token')) {
            if (this.cookie.get('role') === "business") {
                this.test = true;
                return this.cookie.get('role');
            }
            else if (this.cookie.get('role') === "admin") {
                this.test = true;
                return this.cookie.get('role');
            }
            else if (this.cookie.get('role') === "Customer") {
                this.test = true;
                return this.cookie.get('role');
            }
        }
        return this.test = false;
    };
    NavbarComponent.prototype.navchange1 = function () {
        if (this.cookie.get('token')) {
            if (this.decoded.user.liste === "admin") {
                console.log(this.test);
                return this.test = true;
            }
            else {
                return this.test = false;
            }
        }
        return this.test = false;
    };
    NavbarComponent.prototype.change = function () {
        if (this.cookie.get('token')) {
            if (this.decoded.user.liste) {
                return this.test = true;
            }
            else {
                return this.test = false;
            }
        }
        return this.test = false;
    };
    NavbarComponent.prototype.logout = function () {
        this.cookie["delete"]('token');
        this.route.navigate(["/signin"]);
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css']
        })
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
