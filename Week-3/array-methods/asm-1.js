const inventors = [
  "Albert Einstein",
  "Issac Newton",
  "Galileo Galilei",
  "Marie Curie",
  "Johannes Kepler",
  "Nicolaus Copernicus",
  "Max Planck",
  "Katherine Blodgett",
  "Ada Lovelace",
  "Sarah E. Goode",
  "Lise Meitner",
  "Hanna Hammarstrom",
];

// ====================== Use filter() ===================== //
function nameStartWithA() {
  // alternative: let nameStartWithA = inventors.filter((name) => name[0] == "A");
  let nameStartWithA = inventors.filter((name) => name.startsWith("A"));
  console.log(nameStartWithA);
}
// nameStartWithA();

function firstAndLastNameStartWithSameLetter() {
  // alternative
  // let sameLetter = inventors.filter((name) => {
  //   let nameItems = name.split(" ");
  //   if (nameItems[0][0] == nameItems[1][0]) {
  //     return true;
  //   }
  //   return false;
  // });
  // console.log(sameLetter);

  let sameLetter = inventors.filter(
    (name) => name.split(" ")[0][0] === name.split(" ")[1][0]
  );
  console.log(sameLetter);
}
// firstAndLastNameStartWithSameLetter();

// ===================== Use sort() ==================== //

function sortInAlphabeticalOrder() {
  console.log(inventors.sort());
}
// sortInAlphabeticalOrder();

function sortByLengthOfName() {
  const compareLength = (inventorA, inventorB) => {
    if (inventorA.length > inventorB.length) return 1;
    if (inventorA.length === inventorB.length) return 0;
    if (inventorA.length < inventorB.length) return -1;
  };
  inventors.sort(compareLength);
  console.log(inventors);
}
// sortByLengthOfName();

// alternative solution
let bbedit = inventors.sort((nameA, nameB) => nameA.length - nameB.length);
console.log(bbedit);

// ===================== Use map() ==================== //

function printLengthOfFullName() {
  let fullNameLength = inventors.map((name) => name.length);
  console.log(fullNameLength);
}
// printLengthOfFullName();

function printNameInUppercase() {
  let uppercaseName = inventors.map((name) => name.toUpperCase());
  console.log(uppercaseName);
}
// printNameInUppercase();

// ===================== Use reduce() ==================== //

function addFirstName() {
  let stringFirstName = inventors.reduce(
    (accumulator, name) => accumulator + name.split(" ")[0] + " ",
    ""
  );
  console.log(stringFirstName);
}
// addFirstName();

function sumOfNameLength() {
  let nameLengthSum = inventors.reduce((sum, name) => sum + name.length, 0);
  console.log(nameLengthSum);
}
// sumOfNameLength();

// console.log(
//   inventors
//     .map((name) => name.length)
//     .reduce((sum, name) => sum + name.length, 0)
// );

function name(params) {}
