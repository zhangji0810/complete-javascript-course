/*
// Importing module
// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
// } from "./shoppingCart.js";
// addToCart("bread", 5);
// console.log(price, totalQuantity);
console.log("Importing module");
// import * as ShoppingCart from "./shoppingCart.js";

// ShoppingCart.addToCart("bread", 5);
// console.log();
*/

import add, { cart } from "./shoppingCart.js";
add("pizza", 2);
add("bread", 3);
add("apples", 5);

console.log(cart);

/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shoppingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart("apple", 4);
ShoppingCart2.addToCart("pizza", 2);
console.log(ShoppingCart2.shoppingCost);
console.log(ShoppingCart2.totalPrice);
*/

// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import cloneDeep from "lodash-es";

const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 2 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}
