// ======= Assignment 1 - Generate random integer number ======== //

function rand0to1() {
  // random from 0 (inclusive) to 1 (exclusive)
  for (let i = 0; i < 5; i++) {
    console.log(Math.random());
  }
}
// rand0to1();

function getRandomInt0to10() {
  // random from 0 (inclusive) to 10 (inclusive)
  var show = "";
  for (let i = 0; i <= 100; i++) {
    show += `${Math.round(Math.random() * 10)}, `;
  }
  console.log(show);
}
// getRandomInt0to10();

function randIntAtoB(start, end) {
  // random from start (inclusive) to end (inclusive)
  var show = "";
  for (let i = 0; i < 100; i++) {
    show += `${Math.floor(start + Math.random() * (end - start + 1))}, `;
  }
  console.log(show);
}
// randIntAtoB(-4, 4);

var arr1 = [
  "Bio C Plus",
  "All Plant Protein Powder",
  "Natural B Complex",
  "Double X",
  "Salmon Omega-3",
  "Probiotic",
  "Calcium Magnesium",
  "Multi Carotene",
];
function getRandomIndex(arr) {
  return Math.round(Math.random() * (arr.length - 1));
}
function getRandomArrItem(arr, times) {
  //
  var show = "";
  for (let i = 1; i <= times; i++) {
    show += `${arr[getRandomIndex(arr)]}, `;
  }
  console.log(show);
}
// getRandomArrItem(arr1, 5);
