const express = require("express")
const router = express.Router();
const Cart = require("../model/Cart");







router.post("/create", (req, res) => {

    try {
        let data = req.body;
        let cart = new Cart(data);
        cart.date = new Date();
        cart
            .save()
            .then((savedCart) => {
                res.status(200).send(savedCart);
            })
            .catch((err) => {
                res.status(400).send(err);
            });
    } catch (error) {
        console.log(error);
    }
}
);

router.get('/getbyid/:id', (req, res) => {
    id = req.params.id;
    Cart.findOne({ _id: id })
        .then(
            (cart) => {
                res.status(200).send(cart);
            })
        .catch(
            (err) => {
                res.status(400).send(err);
            }
        )
})

router.get('/all', (req, res) => {
    Cart.find({})
        .then(
            (result) => {
                res.status(200).send(result);
            }
        )
        .catch(
            (err) => {
                res.status(400).send(err)
            }
        )
})

router.delete('/delete/:id', (req, res) => {
    id = req.params.id;
    Cart.findOneAndDelete({ _id: id })
        .then(
            (deletedCart) => {
                res.status(200).send(deletedCart);
            }
        )
        .catch(
            (err) => {
                res.status(400).send(err);
            }
        )
})

module.exports = router