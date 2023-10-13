const User = require("../model/user")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const config=require('../config')


exports.signup = (req, res, next) => {
  const { firstname,lastname, email, password,liste,matricule } = req.body;

  User.findOne({ email }, (err, existingUser) => {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered' });
    }

    const user = new User({ firstname,lastname, email, password ,liste,matricule});
    user.save((err, newUser) => {
      if (err) {
        return next(err);
      }

      const token = jwt.sign({ id: newUser._id }, config.secretKey);
      res.json({ user: newUser, token });
    });
  });
};


exports.signin=( (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    user.checkPassword(password, (err, isMatch) => {
      if (err) {
        return next(err);
      }

      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const token = jwt.sign({ user: user }, config.secretKey);
      res.json({ 
   
        message:"logged in",
        user, token });
    });
    //console.log("logged in", {token})
  });
})