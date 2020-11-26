// ============== Assignment 3 - Conditionals ============ //

function positiveOrNegative(x) {
  if (x === 0) {
    console.log(`${x} is zero`);
  } else if (x <= 0) {
    console.log(`${x} is a negative number`);
  } else {
    console.log(`${x} is a positive number`);
  }
}
// positiveOrNegative(14);
// positiveOrNegative(-8);
// positiveOrNegative(0);

function findSmallestAndBiggest(a, b, c) {
  if (a <= b && b <= c) {
    console.log(
      `${a} is the smallest, and ${c} is the biggest among ${a} ${b} ${c}`
    );
  } else if (a <= c && c <= b) {
    console.log(
      `${a} is the smallest, and ${b} is the biggest among ${a} ${b} ${c}`
    );
  } else if (b <= a && a <= c) {
    console.log(
      `${b} is the smallest, and ${c} is the biggest among ${a} ${b} ${c}`
    );
  } else if (b <= c && c <= a) {
    console.log(
      `${b} is the smallest, and ${a} is the biggest among ${a} ${b} ${c}`
    );
  } else if (c <= a && a <= b) {
    console.log(
      `${c} is the smallest, and ${b} is the biggest among ${a} ${b} ${c}`
    );
  } else {
    console.log(
      `${c} is the smallest, and ${a} is the biggest among ${a} ${b} ${c}`
    );
  }
}
// findSmallestAndBiggest(1, 2, 3);
// findSmallestAndBiggest(3, 3, 3);
// findSmallestAndBiggest(1, 1, 2);
// findSmallestAndBiggest(1, 3, 3);
