// Building a quote generator

const jadenSmithQuotes = [
    "How Can Mirrors Be Real If Our Eyes Aren't Real?",
    "Lately People Call Me Scoop Life",
    "If A Book Store Never Runs Out Of A Certain Book, Does That Mean That Nobody Reads It, Or Everybody Reads It",
    "The Great Gatsby Is One Of The Greatest Movies Of All Time, Coachella"
]

const jadenSmithQuote = () => {
    // The random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive). Quote is 4 long (.length) so we get 0 - 3 choices.
    const randomJadenQuote = Math.floor(Math.random() * jadenSmithQuotes.length);
    // A random number is save to the above const which we feed back to the array in order to print a random quote.
    return jadenSmithQuotes[randomJadenQuote];
}

// console.log(jadenSmithQuote());

// Export the module so we can use in another js file buzzfeed.js
module.exports = {
    jadenSmithQuote: jadenSmithQuote
}