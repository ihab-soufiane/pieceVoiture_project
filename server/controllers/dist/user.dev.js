"use strict";

var User = require("../model/user");

var bcrypt = require("bcrypt");

var jwt = require('jsonwebtoken');

var config = require('../config');

exports.signup = function (req, res, next) {
  var _req$body = req.body,
      firstname = _req$body.firstname,
      lastname = _req$body.lastname,
      email = _req$body.email,
      password = _req$body.password,
      liste = _req$body.liste,
      matricule = _req$body.matricule;
  User.findOne({
    email: email
  }, function (err, existingUser) {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      return res.status(400).json({
        message: 'Email is already registered'
      });
    }

    var user = new User({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      liste: liste,
      matricule: matricule
    });
    user.save(function (err, newUser) {
      if (err) {
        return next(err);
      }

      var token = jwt.sign({
        id: newUser._id
      }, config.secretKey);
      res.json({
        user: newUser,
        token: token
      });
    });
  });
};

exports.signin = function (req, res, next) {
  var _req$body2 = req.body,
      email = _req$body2.email,
      password = _req$body2.password;
  User.findOne({
    email: email
  }, function (err, user) {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(401).json({
        message: 'Invalid email or password'
      });
    }

    user.checkPassword(password, function (err, isMatch) {
      if (err) {
        return next(err);
      }

      if (!isMatch) {
        return res.status(401).json({
          message: 'Invalid email or password'
        });
      }

      var token = jwt.sign({
        user: user
      }, config.secretKey);
      res.json({
        message: "logged in",
        user: user,
        token: token
      });
    }); //console.log("logged in", {token})
  });
};