// Sorting Algorithm

var numbers = [96, 9, 2, 7, 1, 108, 55, 32, 15, 1, 3, 10];

// Calculate the sum of two minimum numbers
function sumOfTwoMins(numArray) {
  var sum = numArray[0] + numArray[1];
  console.log(
    `Sum of two min numbers are: ${numArray[0]} + ${numArray[1]} = ${sum}`
  );
}

// Arrange the array in descending order: from smallest to largest
function increase(numArray) {
  var temp;
  for (let i = 0; i < numArray.length - 1; i++) {
    for (let j = i + 1; j < numArray.length; j++) {
      if (numArray[i] > numArray[j]) {
        // swap 1 : use 3rd variable
        temp = numArray[i];
        numArray[i] = numArray[j];
        numArray[j] = temp;
        // swap2: use array
        //[numArray[i], numArray[j]] = [numArray[j], numArray[i]];
      }
    }
  }
  console.log(numArray);
  // Calculate sum
  sumOfTwoMins(numArray);
}
// increase(numbers);

// Descending: from largest to smallest
function decrease(numArray) {
  var temp;
  for (let i = 0; i < numArray.length - 1; i++) {
    for (let j = i + 1; j < numArray.length; j++) {
      if (numArray[i] < numArray[j]) {
        // swap 1 : use 3rd variable
        temp = numArray[i];
        numArray[i] = numArray[j];
        numArray[j] = temp;
        // swap2: use array
        //[numArray[i], numArray[j]] = [numArray[j], numArray[i]];
      }
    }
  }
  console.log(numArray);
}
// decrease(numbers);

// ------ use sort() method -------- //
function minToMax(numbers) {
  const compareNumber = (numA, numB) => {
    if (numA > numB) return 1;
    if (numA === numB) return 0;
    if (numA < numB) return -1;
  };
  console.log(numbers.sort(compareNumber));
}
// minToMax(numbers);

function maxToMin(numbers) {
  console.log(numbers.sort((numA, numB) => numB - numA));
}
// maxToMin(numbers);
