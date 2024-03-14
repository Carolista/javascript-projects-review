//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
let table = [];
table.push(element1, element2, element26);
console.log(table);

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log(table[1]);
console.log(table[1][1]);

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log(table[0][2]);
console.log(table[1][0]);
console.log(table[2][1]);

//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
let arr1to3 = [1, 2, 3];
let arr4to6 = [4, 5, 6];
let arr7to9 = [7, 8, 9]
let arrAtoE = ["A", "B", "C", "D", "E"];
let arrFtoJ = ["F", "G", "H", "I", "J"];
let numArr = [arr1to3, arr4to6, arr7to9];
let letterArr = [arrAtoE, arrFtoJ];
let numsAndLetters = [numArr, letterArr];

console.log(numsAndLetters);
console.log(numsAndLetters[0][0][0]);
console.log(numsAndLetters[1][1][1]);
