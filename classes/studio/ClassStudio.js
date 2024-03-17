// Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

// Part 1
class CrewCandidate {

  constructor(name, mass, scores) {
    this.name = name;
    this.mass = mass;
    this.scores = scores; // array of numbers
  }

  //Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

  // Part 2
  addScore(newScore) {
    this.scores.push(newScore);
  }

  // Part 3
  average() {
    let sum = 0;
    for (let i=0; i < this.scores.length; i++) {
      sum += this.scores[i];
    }
    let average = sum / this.scores.length;
    return Math.round(10 * average) / 10;
  }

  status() {
    let avg = this.average();
    if (avg >= 90) {
      return "Accepted";
    } else if (avg >= 80) {
      return "Reserve";
    } else if (avg >= 70) {
      return "Probationary";
    } else {
      return "Rejected";
    }
  }

}

// Part 1
let bubba = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merry = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let glad = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

console.log(bubba);
console.log(merry);
console.log(glad);

// Part 2
bubba.addScore(83);
console.log(bubba);

// Part 3
console.log(merry.average());

// console.log(`${bubba.name} earned an average test score of ${bubba.average()}% and has a status of ${bubba.status()}.`);
// console.log(`${merry.name} earned an average test score of ${merry.average()}% and has a status of ${merry.status()}.`);
// console.log(`${glad.name} earned an average test score of ${glad.average()}% and has a status of ${glad.status()}.`);

// DRY 
let candidates = [bubba, merry, glad];
for (let i=0; i < candidates.length; i++) {
  console.log(`${candidates[i].name} earned an average test score of ${candidates[i].average()}% and has a status of ${candidates[i].status()}.`);
}

// Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

let testCount = 0;

while (glad.status() === "Probationary") {
  glad.addScore(100);
  testCount++;
}

console.log(`It will take at least ${testCount} tests for Glad Gator to reach 'Reserve' status.`);

while (glad.status() === "Reserve") {
  glad.addScore(100);
  testCount++;
}

console.log(`It will take at least ${testCount} tests for Glad Gator to reach 'Accepted' status.`);
