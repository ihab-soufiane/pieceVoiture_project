// const asyncHandler = require('express-async-handler');
// const Product = require('../model/product');
// const Cart = require('../model/Cart');





// const calcTotalCartPrice = (cart) => {
//     let totalPrice = 0;
//     cart.cartItems.forEach((item) => {
//       totalPrice += item.quantity * item.price;
//     });
//     cart.totalCartPrice = totalPrice;
//     cart.totalPriceAfterDiscount = undefined;
//     return totalPrice;
//   };
//   exports.addProductToCart = asyncHandler(async (req, res, next) => {
//     const { productId } = req.body;
//     try {
//         const product = await Product.findById(id);
//         res.json(product);
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server Error' });
//       }  
//     // 1) Get Cart for logged user
//     let cart = await Cart.findOne({ user: req.user._id });
  
//     if (!cart) {
//       // create cart fot logged user with product
//       const cartItem = {
//         product: productId,
//           quantity: 1,
//           price: product.price,
//           description:product.reference,
//         title:product.marque,
//         picture:product.image,
//       };
//       cart = await Cart.create({
//         user: req.user._id,
//         cartItems: [cartItem],
//         totalCartPrice: cartItem.price,
//       });
//     } else {
//       // product exist in cart, update product quantity
//       const productIndex = cart.cartItems.findIndex((item) => {
//         if (item.product && item.product.toString() === productId ) {
//           return true;
//         }
//         return false;
//       });
  
//       if (productIndex > -1) {
//         const cartItem = cart.cartItems[productIndex];
//         cartItem.quantity += 1;
//         cartItem.price =product.price;
  
//         cart.cartItems[productIndex] = cartItem;
//       } else {
//         // product not exist in cart,  push product to cartItems array
//         const cartItem = {
//           product: productId,
//           quantity: 1,
//           price: product.price,
//           description:product.reference,
//         title:product.marque,
//         picture:product.image,
//         };
//         cart.cartItems.push(cartItem);
//       }
  
//       // Calculate total cart price
//       calcTotalCartPrice(cart);
//     }
  
//     await cart.save();
  
//     res.status(200).json({
//       status: 'success',
//       message: 'Product added to cart successfully',
//       numOfCartItems: cart.cartItems.length,
//       data: cart,
//     });
//   });