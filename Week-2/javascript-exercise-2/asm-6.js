// ====== Assignment 6 - Working with String ===== //

// Find the first string in an array
let variousThings = [
  true,
  true,
  true,
  false,
  true,
  true,
  1,
  true,
  true,
  false,
  true,
  false,
  true,
  "hello",
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  "world",
  true,
];
function findFirstString(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      console.log(arr[i]);
      break;
      // return; ==> works too
    }
  }
}
// findFirstString(variousThings);

// Normalize the emails: email addresses should contain
// only lowercase and no whitespace
var emails = ["  PETER@gmail.com", "Mia1024@gmail.COM  ", " Dorian@gmail.com "];

function normalizeEmails(arr) {
  let normalEmails = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      normalEmails.push(arr[i].trim().toLowerCase());
    }
  }
  console.log(normalEmails);
}
// normalizeEmails(emails);

// Break the full name into first name and last name
function splitNames(fullName) {
  // Create the name object
  let nameObject = {};
  if (typeof fullName === "string") {
    // if the argument is string, trim all whitespace around it and set the
    // separate as a whitespace character to split the name
    // set the limit is 2 so that the name array get only 2 elements
    // first name and last name
    var nameArray = fullName.trim().split(" ", 2);
    // transfer elements of name array into name object
    nameObject.firstName = nameArray[0];
    nameObject.lastName = nameArray[1];
  }
  console.log(nameObject);
}
// splitNames("Peter van Parker");

// Generate random password
// Create a string of characters from which the password is generated
var characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$#@!%^&*()";

// Return a random character from the characters string
function randomCharacters(charString) {
  return charString[Math.round(Math.random() * charString.length)];
}

// the password generating function take an argument that is
// the length of password
function getRandomString(length) {
  var randomPassword = "";
  for (let i = 0; i < length; i++) {
    randomPassword += randomCharacters(characters);
  }
  console.log(randomPassword);
}
getRandomString(15);
