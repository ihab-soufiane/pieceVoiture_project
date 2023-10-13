"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SignupComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(service, route) {
        this.service = service;
        this.route = route;
        this.test = false;
        this.myForm = new forms_1.FormGroup({
            firstname: new forms_1.FormControl(''),
            lastname: new forms_1.FormControl(''),
            email: new forms_1.FormControl(''),
            password: new forms_1.FormControl(''),
            liste: new forms_1.FormControl(''),
            matricule: new forms_1.FormControl('')
        });
        this.opt = false;
        this.selectedDay = '';
    }
    SignupComponent.prototype.mat = function () {
        if (this.myForm.value.liste === "business") {
            return this.test = true;
        }
        return this.test = false;
    };
    SignupComponent.prototype.sub = function () {
        console.log(this.myForm.value);
        this.service.signup(this.myForm.value).subscribe(function (data) {
            console.log(data.token);
        });
        console.log(this.myForm.value.liste);
    };
    Object.defineProperty(SignupComponent.prototype, "control", {
        get: function () {
            return this.myForm;
        },
        enumerable: false,
        configurable: true
    });
    SignupComponent.prototype.selectChangeHandler = function (event) {
        //update the ui
        this.selectedDay = event.target.value;
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        })
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
