// ============= Assignment 3 - Iterate over arrays ============== //

// Calculate wages per day and the sum of them made by Peter in 2 weeks
var workingHours = [6, 6, 7, 7, 8, 8, 6, 7, 8, 7];
function listWages() {
  var sum = 0;
  for (var i = 0; i < workingHours.length; i++) {
    console.log(`Peter earned $${workingHours[i] * 25} today!`);
    sum += workingHours[i] * 25;
  }
  console.log(`Peter earned $${sum} in total in 2 weeks.`);
}
// listWages();

function randWorkHr() {
  // random from 6 hours (inclusive) to 8 hours (inclusive)
  return Math.floor(6 + Math.random() * (8 - 6 + 1));
}
function estimatedYearIncome(week) {
  // calculate Peter's yearly income
  var sum = 0;
  for (var i = 1; i <= week * 5; i++) {
    sum += randWorkHr() * 25;
  }
  console.log(`Peter earned approximately $${sum} in ${week} weeks.`);
}
// estimatedYearIncome(51);
