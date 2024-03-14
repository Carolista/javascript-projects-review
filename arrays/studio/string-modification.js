const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let modifiedStr = str.slice(3) + str.slice(0, 3);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The string '${str}' has been converted to '${modifiedStr}.'`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let userNum = input.question('How many characters should be moved? ');

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

let tooLong = false;

if (userNum > str.length) {
  userNum = 3;
  tooLong = true;
}

let userModifiedStr = str.slice(userNum) + str.slice(0, userNum);

let result = `The string '${str}' has been converted to '${modifiedStr}.'`

if (tooLong) {
  result += " (The number you provided was bigger than the length of the word, so we moved only the first 3 letters.)";
}

console.log(result);
