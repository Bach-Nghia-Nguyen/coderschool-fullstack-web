// ============== Assignment 4 - Loops ============ //

// 0 < a < b < 10
function getRangeInclusive(a, b) {
  var output = "";
  if (a < b) {
    for (let i = a; i <= b; i++) {
      output += `${i} `;
    }
  } else if (a > b) {
    for (let i = a; i >= b; i--) {
      output += `${i} `;
    }
  }
  console.log(output);
}
// getRangeInclusive(1, 5);
// getRangeInclusive(8, 4);
// getRangeInclusive(5, 5);

// 0 < a < b < 999
function sumOfRange(x, y) {
  var sum = 0;
  if (x < y) {
    for (let i = x; i <= y; i++) {
      sum += i;
    }
  } else if (x > y) {
    for (let i = x; i >= y; i--) {
      sum += i;
    }
  }
  console.log(`Sum of numbers from ${x} to ${y} is: ${sum}`);
}
// sumOfRange(1, 10);

// 4 digits - various length in function
function sumOfDigits(x) {
  var remainder;
  var sum = 0;
  var le = x.toString().length;
  var xnum = parseInt(x);
  for (let i = 1; i <= le; i++) {
    remainder = xnum % 10;
    xnum = (xnum - remainder) / 10;
    sum += remainder;
  }
  return console.log(sum);
}
// sumOfDigits(1037);
