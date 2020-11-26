// Assignment 7 - SuperFizzBuzz

function convertNumber(number) {
  if (number % 3 === 0 && number % 5 === 0 && number % 7 === 0) {
    return "SuperFizzBuzz";
  } else if (number % 3 === 0 && number % 7 === 0) {
    return "SuperFizz";
  } else if (number % 5 === 0 && number % 7 === 0) {
    return "SuperBuzz";
  } else if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else if (number % 7 === 0) {
    return "Super";
  } else {
    return number;
  }
}
function outputRange(start, end) {
  var output = "";
  for (let i = start; i <= end; i++) {
    output += `${convertNumber(i)}, `;
  }
  console.log(output);
}
// outputRange(70, 110);
