const express = require('express');
const router = express.Router();
const user = require('./model/user');

function checkRole(role) {
  return function(req, res, next) {
    if (req.user && req.user.liste === role) {
      next();
    } else {
      res.status(403).send('Unauthorized');
    }
  }
}

router.get('/customer', checkRole('customer'), (req, res) => {
  res.send('Customer Profile');
});

router.get('/vendor', checkRole('vendor'), (req, res) => {
  res.send('Vendor Dashboard');
});

router.get('/admin', checkRole('admin'), (req, res) => {
  res.send('Admin Dashboard');
});

module.exports = router;
