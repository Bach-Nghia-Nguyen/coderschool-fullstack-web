// Assignment 6 - Swapping values of two variables

// Using 3rd variable
function swapNumbers(a, b) {
  console.log(`Before swapping, a is ${a}, b is ${b}`);
  var temp;
  temp = a;
  a = b;
  b = temp;
  console.log(`After swapping, a is ${a}, b is ${b}`);
}
// swapNumbers(10, 2738);

// =================================================== //

// No 3rd variable
function swapNoThird(a, b) {
  console.log(`Before swapping, a is ${a}, b is ${b}`);
  [a, b] = [b, a];
  console.log(`After swapping, a is ${a}, b is ${b}`);
}
// swapNoThird(19, "on");
