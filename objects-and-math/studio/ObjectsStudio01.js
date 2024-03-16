// Code your selectRandomEntry function here:
function selectRandomEntry(arr) {
  let randomIndex = Math.floor(arr.length * Math.random());
  return arr[randomIndex];
}

// Code your buildCrewArray function here:
function buildCrewArray(selectedIds, candidates) {
  let crew = [];
  for (let i = 0; i < candidates.length; i++) {
    if (selectedIds.includes(candidates[i].astronautID)) {
      crew.push(candidates[i]);
    }
  }
  return crew;
}

let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];

// Note from Carrie: the functions you wrote at the top have to be called down here because of where idNumbers and animals have been declared!

let selectedIdNums = [];

while (selectedIdNums.length < 3) {
  // Use selectRandomEntry function to get a random ID number
  let randomEntry = selectRandomEntry(idNumbers);
  if (!selectedIdNums.includes(randomEntry)) {
    selectedIdNums.push(randomEntry);
  }
}

console.log(selectedIdNums); // Test to make sure it worked

let selectedCrew = buildCrewArray(selectedIdNums, animals);


// Code your template literal and console.log statements:

console.log(`${selectedCrew[0].name}, ${selectedCrew[1].name}, and ${selectedCrew[2].name} are going to space!`);
