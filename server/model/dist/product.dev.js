"use strict";

var mongoose = require('mongoose');

var Product = mongoose.model('Product', {
  reference: {
    type: String,
    required: true
  },
  nom: {
    type: String,
    required: true
  },
  marque: {
    type: String,
    required: true
  },
  date: {
    type: Date
  },
  quantite: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  marque_voiture: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    "default": false
  },
  image: String,
  tags: [String]
}); // const Product = mongoose.model('Product', productSchema)

module.exports = Product;