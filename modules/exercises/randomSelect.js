function randomFromArray(arr){
  let randomIndex = Math.floor(arr.length * Math.random());
  return arr[randomIndex];
}

//TODO: Export the randomFromArray function.
module.exports = randomFromArray;
