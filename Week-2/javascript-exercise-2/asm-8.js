// Fibonacci sequence
fib = [0, 1];

function createFibonacci(n) {
  if (n === 1) {
    console.log(fib[0]);
  } else if (n === 2) {
    console.log(fib[1]);
  } else if (n >= 3) {
    // Idk what the hell is going on here
    // the math is okay but I can't understand the for loop LOL
    for (let i = 0; i < n - 2; i++) {
      for (let j = i + 1; j <= i + 1; j++) {
        // after 0 and 1, each number is the sum of 2 preceding ones
        fib[i + 2] = fib[i] + fib[j];
        fib.push(fib[i + 2]);
      }
    }
    // the sequence is correct but remove the last 3 redundant
    // elements to fit the required number of fibon array
    // fib.pop();
    // fib.pop();
    // fib.pop();
    // log the fibon sequence
    console.log(fib);
    // log the nth fibon number
    // console.log(fib.pop());
  } else {
    console.log(`Invalid input`);
  }
}
createFibonacci(6);
