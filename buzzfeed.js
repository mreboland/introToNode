const quotes = require("./quotes");

// We use dot notation to access the function in the quotes.js file.
const quote = quotes.jadenSmithQuote();
const anotherQuote = quotes.jadenSmithQuote();

console.log(quote);
console.log(anotherQuote);