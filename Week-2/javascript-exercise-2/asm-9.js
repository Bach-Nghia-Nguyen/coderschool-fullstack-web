// ======= Assignment 9 - Merging arrays ========= //
var arr1 = [1, 30, 3, 5, 31, 89, 22, 49, 100];
var arr2 = [1, 2, 3, 4, 5, 10, 12, 22, 89, 1, 45, 67, 30, 49];

// Attaching //
function mergeArray(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  newArr = arr1;
}
mergeArray(arr1, arr2);
console.log(newArr);

// Similarity check - Remove excess element //
// var pen = [];
// const le = arr1.length;
// let hi = 0;
// let hj = 0;
// for (let i = 0; i < le; i++) {
//   for (let j = 0; j < arr2.length; j++) {
//     if (arr1[i] === arr2[j]) {
//       pen.push(arr1.splice(i, 1));
//       hi += i;
//     }
//   }
// }
// console.log(le);
// console.log(hi);
// console.log(hj);
// console.log(pen);
// console.log("dwdwdw");
// console.log(arr1);

// Sorting //
