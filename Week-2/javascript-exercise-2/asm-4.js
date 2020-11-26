// =========== Assignment 4 - Array Methods =========== //

function getLeapYears(start, end) {
  var leapYears = [];
  for (let i = start; i <= end; i++) {
    if (i % 4 === 0) {
      leapYears.push(i);
    }
  }
  console.log(leapYears);
}
// getLeapYears(1900, 2000);

let footballers = [
  "Messi",
  "Ronaldo",
  "Lewandowski",
  "Kane",
  "Griezmann",
  "Neymar",
];
function reverseArray(arr) {
  const originalLength = arr.length;
  var mirrorArray = [];
  for (let i = 0; i < originalLength; i++) {
    mirrorArray.unshift(arr.shift());
  }
  console.log(mirrorArray);
}
// reverseArray(footballers);
// expected output:
// [ 'Neymar',
// 'Griezmann',
// 'Kane',
// 'Lewandowski',
// 'Ronaldo',
// 'Messi' ]

// Actually JS has reverse() method that is way more convenient
// console.log(footballers.reverse());

// generate random integer
function getRandInt() {
  return Math.round(Math.random() * 100);
}
function evenAndOdd() {
  var evenNumbers = [];
  var oddNumbers = [];
  for (let i = 0; i < 100; i++) {
    var intNum = getRandInt();
    if (intNum % 2 === 0) {
      evenNumbers.push(intNum);
    } else {
      oddNumbers.push(intNum);
    }
  }
  console.log("Even numbers:", evenNumbers);
  console.log(evenNumbers.length);
  console.log(oddNumbers);
  console.log(oddNumbers.length);
}
evenAndOdd();
