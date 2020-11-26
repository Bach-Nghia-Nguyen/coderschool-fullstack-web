let shoppingCart = [
  { id: "A31", item: "T-shirt", price: 9.9, quantity: 5 },
  { id: "A32", item: "Jacket", price: 99.9, quantity: 1 },
  { id: "A33", item: "Skirt", price: 19.9, quantity: 2 },
  { id: "A34", item: "Ankle Pant", price: 39.9, quantity: 3 },
  { id: "A35", item: "Polo shirt", price: 14.9, quantity: 3 },
  { id: "A36", item: "Chino Short", price: 29.9, quantity: 2 },
  { id: "A37", item: "Easy Short", price: 19.9, quantity: 2 },
];

// Write a function that returns an array of prices for
// each product in the cart (item price * quantity)s

function arrayOfPrices() {
  console.log(shoppingCart.map((item) => item.price * item.quantity));
}
// arrayOfPrices();

function totalPrice() {
  console.log(
    shoppingCart
      .map((item) => item.price * item.quantity)
      .reduce((sum, price) => sum + price, 0)
  );
}
// totalPrice();

function totalPrice$2() {
  console.log(
    shoppingCart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );
}
// totalPrice$2();

function removeItemsFromCart(productId, quantity) {
  shoppingCart = shoppingCart.filter((item) => {
    if (item.id === productId) {
      item.quantity = item.quantity - quantity;
      if (item.quantity <= 0) return false;
      return item;
    }
    return item;
  });
  console.log(shoppingCart);
}
// removeItemsFromCart("A31", 1);

let product = {
  id: "A38",
  item: "Black Hat",
  price: 9.9,
};

function addItemToCart(product, quantity) {
  // if the item is already in the cart, then increase the quantity
  let flag = false;
  shoppingCart.forEach((item) => {
    if (item.id === product.id) {
      item.quantity += quantity;
      flag = true;
    }
  });
  // if not, shoppingCart.push()
  if (!flag) {
    product.quantity = quantity;
    shoppingCart.push(product);
  }
  console.log(shoppingCart);
}
// addItemToCart(product, 4);

function addItemToCart2(product, quantity) {
  let found = shoppingCart.filter((item) => {
    if (item.id === product.id) {
      item.quantity += quantity;
      return true;
    } else {
      return false;
    }
  });
  if (found.length === 0) {
    product.quantity = quantity;
    shoppingCart.push(product);
  }
}

product = {
  id: "A31",
  item: "Black Hat",
  price: 9.9,
};

// addItemToCart(product, 2);
