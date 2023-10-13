"use strict";

var mongoose = require('mongoose');

var bcrypt = require('bcrypt');

var userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    maxlength: 15,
    trim: true
  },
  lastname: {
    type: String,
    required: true,
    maxlength: 15,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  matricule: String,
  liste: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamp: true
});
userSchema.pre('save', function (next) {
  var _this = this;

  if (!this.isModified('password')) {
    return next();
  }

  bcrypt.hash(this.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }

    _this.password = hash;
    next();
  });
});

userSchema.methods.checkPassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    if (err) {
      return callback(err);
    }

    callback(null, isMatch);
  });
};

var User = mongoose.model('User', userSchema);
module.exports = User;