"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ProductComponent = /** @class */ (function () {
    function ProductComponent(_data) {
        this._data = _data;
        this.product = {
            reference: '',
            nom: '',
            marque: '',
            quantite: 0,
            price: 0,
            image: File,
            marque_voiture: ''
        };
        this.myForm = new forms_1.FormGroup({
            reference: new forms_1.FormControl(),
            nom: new forms_1.FormControl(),
            marque: new forms_1.FormControl(),
            quantite: new forms_1.FormControl(),
            price: new forms_1.FormControl(),
            marque_voiture: new forms_1.FormControl(),
            image: new forms_1.FormControl(File)
        });
    }
    ProductComponent.prototype.onFileSelected = function (event) {
        var _a;
        console.log((_a = event.target) === null || _a === void 0 ? void 0 : _a.files[0]);
        this.imageFile = event.target.files[0];
    };
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._data.all().subscribe({
            next: function (res) {
                _this.products = res;
                console.log(res);
            },
            error: function (err) {
                console.log(err);
            }
        });
    };
    ProductComponent.prototype.sendData = function () {
        var product = {
            reference: this.myForm.value.reference,
            nom: this.myForm.value.nom,
            marque: this.myForm.value.marque,
            quantite: this.myForm.value.quantite,
            price: this.myForm.value.price,
            image: this.imageFile,
            marque_voiture: this.myForm.value.marque_voiture
        };
        var formData = new FormData();
        formData.append("reference", this.myForm.value.reference);
        formData.append("nom", this.myForm.value.nom);
        formData.append("marque", this.myForm.value.marque);
        formData.append("quantite", this.myForm.value.quantite);
        formData.append("price", this.myForm.value.price);
        formData.append("image", this.imageFile);
        formData.append("marque_voiture", this.myForm.value.marque_voiture);
        console.log(product);
        this._data.create(formData).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    // save(){
    //     this._data.create(this.myForm.value).subscribe({
    //       next: (res)=>{
    //         console.log(res)
    //       },
    //       error: (err)=>{
    //         console.log(err)
    //       }     
    // })
    //}
    ProductComponent.prototype["delete"] = function (id) {
        var _this = this;
        this._data["delete"](id).subscribe({
            next: function (res) {
                _this.ngOnInit();
                console.log(res);
            },
            error: function (err) {
                console.log(err);
            }
        });
    };
    ProductComponent.prototype.done = function (id) {
        var _this = this;
        this._data.update(id).subscribe({
            next: function (res) {
                _this.ngOnInit();
                console.log(res);
            },
            error: function (err) {
                console.log(err);
            }
        });
    };
    ProductComponent.prototype.getdata = function (reference, nom, marque, quantite, price, marque_voiture) {
        this.product.reference = reference;
        this.product.nom = nom;
        this.product.marque = marque;
        this.product.quantite = quantite;
        this.product.price = price;
        this.product.marque_voiture = marque_voiture;
        console.log(this.product);
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'app-product',
            templateUrl: './product.component.html',
            styleUrls: ['./product.component.css']
        })
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
