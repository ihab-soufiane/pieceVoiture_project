"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserProfileComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var jwt_decode_1 = require("jwt-decode");
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(service, cookie, actroute) {
        this.service = service;
        this.cookie = cookie;
        this.actroute = actroute;
        this.test = false;
        this.data = "";
        this.myForm = new forms_1.FormGroup({
            email: new forms_1.FormControl(),
            firstname: new forms_1.FormControl(),
            lastname: new forms_1.FormControl(),
            password: new forms_1.FormControl(),
            matricule: new forms_1.FormControl()
        });
        this.showContent = false;
        this.showContent2 = false;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var token = this.cookie.get('token');
        this.decoded = jwt_decode_1["default"](token);
        this.data = this.decoded.user;
        this.myForm = new forms_1.FormGroup({
            email: new forms_1.FormControl(this.data.email),
            firstname: new forms_1.FormControl(this.data.firstname),
            lastname: new forms_1.FormControl(this.data.lastname),
            password: new forms_1.FormControl(),
            matricule: new forms_1.FormControl(this.data.matricule)
        });
    };
    UserProfileComponent.prototype.navchange = function () {
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
        console.log(this.test);
        return this.test = false;
    };
    UserProfileComponent.prototype.updateP = function () {
    };
    UserProfileComponent.prototype.changeContent = function () {
        this.showContent = !this.showContent;
    };
    UserProfileComponent.prototype.changeorder = function () {
        this.showContent2 = !this.showContent2;
    };
    UserProfileComponent.prototype.scrollToElement = function (elementId) {
        var element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-user-profile',
            templateUrl: './user-profile.component.html',
            styleUrls: ['./user-profile.component.css']
        })
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
