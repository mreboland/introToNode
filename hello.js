console.log("Hello, World");

// argv[2] will set name to the 3 argument when running the program in cmd. node is 1, hello.js is 2, your name is 3. So node hellos.js Edward (1, 2, 3)
const name = process.argv[2];
console.log(`Hello, ${name}!`);

console.log(process.argv);

// Global object for browser is the window, while in node it uses the global name.
// Browser
// console.log(window); // Our global object

// Node
// console.log(global); // Our global object

// process.env is a global variable injected by Node at runtime for the app to use. process.env variable in an object and each of it's properties can be accessed using dot notation (i.e. process.env.{property_name}). You can also console log it at anytime in your code to see what variables are available to use.
// We use process.env.PORT to set our server and database port to automatically handle routing between the two.

// React uses import while node uses require. The latter because it's an old language build on an older engine base. It's recommended to separate the two (even though modern node can use import) as it allows easier differentiation. Require is used to import modules from node_modules folder that gets generated when npm install is run.

// Modules allow us the ability to load JS files into one another.
// In Node, each modules has it's own scope which means the functions in them can't be accessed without exporting them (module.exports).

// module.exports: This is an object that is created by module.

// exports: This is simply a shorthand reference to module.exports.This variable gets assigned the value of module.exports prior to the module being evaluated.

// module.exports vs. exports

// These objects are not able to be used entirely interchangably.It is important to note that if a value is assigned to exports, it does not automatically get bound to module.exports.

// module.exports.hello = true; // Exported from require of module
// exports = { hello: false }; // Not exported, and is only available within the module itself.

// Once the contens of the module have been exported, another module is able to import the module using the previous mentioned require keyword.

// Time to see it in action with quotes.js