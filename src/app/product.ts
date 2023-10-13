import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class Product {
  reference: any;
  marque: any;
  date: any;
  quantite: any;
  price: any;
  marque_voiture: any;
  status: any;
  tags: any;
  image: any;
constructor(reference: string, marque: string, quantite: string, price: number, Marque_voiture: string, image: string){}
}