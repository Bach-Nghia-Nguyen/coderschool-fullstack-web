let startAmount = 1000;
let transactions = [
  { currency: "USD", amount: 12, type: "withdrawal" },
  { currency: "USD", amount: 104, type: "withdrawal" },
  { currency: "USD", amount: 150, type: "deposit" },
  { currency: "USD", amount: 150, type: "deposit" },
  { currency: "USD", amount: 250, type: "withdrawal" },
  { currency: "USD", amount: 500, type: "deposit" },
  { currency: "USD", amount: 447, type: "withdrawal" },
  { currency: "USD", amount: 120, type: "deposit" },
  { currency: "USD", amount: 58, type: "withdrawal" },
  { currency: "USD", amount: 90, type: "withdrawal" },
];
const usdToVND = 23000;

function printTransactionHistory() {
  console.log(`
  Balance: $${startAmount}
  Transaction History:`);
  transactions.forEach((record) => {
    if (record.type === "withdrawal") {
      startAmount = startAmount - record.amount;
      console.log(
        `- You withdrew $${record.amount}. The new balance is $${startAmount}`
      );
    } else {
      startAmount = startAmount + record.amount;
      console.log(
        `- You deposited $${record.amount}. The new balance is $${startAmount}`
      );
    }
  });
  console.log(`End Balance: $${startAmount}`);
}
// printTransactionHistory();

function getBalance(startAmount, transactions) {
  return transactions.reduce((accumulator, transaction) => {
    if (transaction.type === "withdrawal") {
      accumulator -= transaction.amount;
    } else {
      accumulator += transaction.amount;
    }
    return accumulator;
  }, startAmount);
}
// console.log(getBalance(startAmount, transactions));

/* ======================================================
  Uses filter() and reduce() to calculate two numbers: 
  the sum of withdrawal transactions (expense), and 
  deposit transactions (income).
 ====================================================== */
function sumOfIncomeAndExpense() {
  console.log(`Sum of withdrawal
    ${transactions
      .filter((record) => record.type === "withdrawal")
      .reduce((sum, record) => sum + record.amount, 0)}
  `);
  console.log(`Sum of deposit
    ${transactions
      .filter((record) => record.type === "deposit")
      .reduce((sum, record) => sum + record.amount, 0)}
  `);
}
// sumOfIncomeAndExpense();

/* ======================================================
  Uses map() to get a new array of transaction in VND
 ====================================================== */
function changeCurrency(transactions, toCurrency, exchangeRate) {
  transactions.map((record) => ({
    ...record,
    currency: toCurrency,
    amount: record.amount * exchangeRate,
  }));
}
// console.log(changeCurrency(transactions, "VND", usdToVND));

/* ======================================================
  Returns an new list of transactions that sorted by type
 ====================================================== */
function sortTransaction(transactions, sortBy) {
  return transactions.sort((recordA, recordB) => {
    if (recordA[sortBy] > recordB[sortBy]) return 1;
    if (recordA[sortBy] === recordB[sortBy]) return 0;
    if (recordA[sortBy] < recordB[sortBy]) return -1;
  });
}
// console.log(sortTransaction(transactions, "type"));

/* ======================================================
  Returns an new list of withdrawal transactions that 
  sorted by amount
 ====================================================== */
// console.log(
//   sortTransaction(
//     transactions.filter((record) => record.type === "withdrawal"),
//     "amount"
//   )
// );

/* ======================================================
  Returns an new list of deposit transactions that 
  sorted by amount
 ====================================================== */
// console.log(
//   sortTransaction(
//     transactions.filter((record) => record.type === "deposit"),
//     "amount"
//   )
// );
