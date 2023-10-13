"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DetailProductComponent = void 0;
var core_1 = require("@angular/core");
var DetailProductComponent = /** @class */ (function () {
    function DetailProductComponent(act, data) {
        this.act = act;
        this.data = data;
    }
    DetailProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.act.snapshot.paramMap.get('id');
        this.data.getProductById(this.id)
            .subscribe(function (res) {
            _this.product = res;
        });
    };
    DetailProductComponent = __decorate([
        core_1.Component({
            selector: 'app-detail-product',
            templateUrl: './detail-product.component.html',
            styleUrls: ['./detail-product.component.css']
        })
    ], DetailProductComponent);
    return DetailProductComponent;
}());
exports.DetailProductComponent = DetailProductComponent;
