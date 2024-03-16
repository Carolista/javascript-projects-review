let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpTwo = {
  name: "Chad",
  species: "Chimpanzee",
  mass: 11,
  age: 6
};

let beagle = {
  name: "Leroy",
  species: "Beagle",
  mass: 14,
  age: 5
}

let tardigrade = {
  name: "Almina",
  species: "Tardigrade",
  mass: 0.0000000001,
  age: 1
}

// After you have created the other object literals, add the astronautID property to each one.
superChimpOne.astronautID = 1;
salamander.astronautID = 7;
superChimpTwo.astronautID = 2;
beagle.astronautID = 4;
tardigrade.astronautID = 10;

// Keep code DRY by defining this once
function getRandomSteps() {
  // Round down to 0-10
  return Math.floor(11 * Math.random());
}

// Use reference to function above to assign method to each animal
superChimpOne.move = getRandomSteps;
salamander.move = getRandomSteps;
superChimpTwo.move = getRandomSteps;
beagle.move = getRandomSteps;
tardigrade.move = getRandomSteps;

// Create an array to hold the animal objects.
let animals = [superChimpOne, salamander, superChimpTwo, beagle, tardigrade];

// Print out the relevant information about each animal.

function crewReports(animal) {
  return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`;
}

// Test it
console.log(crewReports(superChimpTwo));


// Start an animal race!

function fitnessTest(animalArr) {
  let raceResults = [];
  for (let i=0; i < animalArr.length; i++) {
    let animal = animalArr[i];
    let totalSteps = 0;
    let turns = 0;
    while (totalSteps < 20) {
      totalSteps += animal.move();
      turns++;
    }
    raceResults.push(`${animal.name} took ${turns} turns to take 20 steps.`);
  }
  return raceResults;
}

let results = fitnessTest(animals);

for (let i=0; i < results.length; i++) {
  console.log(results[i]);
}
