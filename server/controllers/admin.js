const User = require('../model/user');
const Product = require('../model/product');
// const bcrypt= require('bcryptjs');
// const jwt = require('jsonwebtoken');

exports.getAllUsers = async (req, res) => {
    const Users = await User.find();

        res.send(Users);
  
  
};

exports.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
  
    res.send({ message: 'product deleted' });
  };

exports.getAllProducts = async (req, res) => {
    const Products = await Product.find();

        res.send(Products);
  
  
};

exports.deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
  
    res.send({ message: 'product deleted' });
  };

