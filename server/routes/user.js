const express = require("express")
const { signup,signin } = require("../controllers/user")
const {getAll,getOne,deleteAll,deleteOne,updateOne,updateuser,createOne} = require("../controllers/crudController")
const user = require("../model/user")
const {  addProductToCart } = require("../controllers/cartController")



const router = express.Router()

  
router.post("/signup",signup)
router.post("/signin",signin)
router.get("/getAll",getAll(user))
router.get("/getone/:id", getOne(user))
router.delete("/deleteone/:id", deleteOne(user))
router.delete("/deleteAll", deleteAll(user))
router.post("/addUser",createOne(user))
//router.post("/addtocart",addProductToCart)
//router.get('/customer', user)

  
module.exports = router