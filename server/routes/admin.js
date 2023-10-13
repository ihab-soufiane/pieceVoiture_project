const express = require('express');
const router = express.Router();

const { getAllUsers , getAllProducts , deleteProduct, deleteUser} = require('../controllers/admin');

router.get('/Users', getAllUsers);
router.delete('/deleteUser/:id', deleteUser);


router.get('/Products', getAllProducts);
router.delete('/deleteProduct/:id', deleteProduct);


module.exports = router