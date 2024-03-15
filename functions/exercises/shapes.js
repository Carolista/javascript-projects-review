const newline = "\n";
const defaultChar = "#";
const space = " ";

function makeLine(size, char = defaultChar) {
  return char.repeat(size);
}

function makeSquare(size, char = defaultChar) {
  // let shape = "";
  // for (let i=1; i <= size; i++) {
  //   shape += makeLine(size);
  //   if (i < size) {
  //     shape += newline;
  //   }
  // }
  // return shape;

  return makeRectangle(size, size, char);
}

function makeRectangle(width, height, char = defaultChar) {
  let shape = "";
  for (let i=1; i <= height; i++) {
    shape += makeLine(width, char);
    if (i < height) {
      shape += newline;
    }
  }
  return shape;
}

function makeDownwardStairs(height, char = defaultChar) {
  let shape = "";
  for (let i=1; i <= height; i++) {
    shape += makeLine(i, char);
    if (i < height) {
      shape += newline;
    }
  }
  return shape;
}

function makeSpaceLine(numSpaces, numChars, char = defaultChar) {
  let spaces = space.repeat(numSpaces);
  return spaces + makeLine(numChars, char) + spaces;
}

function makeIsoscelesTriangle(height, char = defaultChar) {
  let shape = "";
  for (let i=0; i < height; i++) {
    let spaces = height - i - 1;
    let chars = 2 * i + 1;
    shape += makeSpaceLine(spaces, chars, char);
    if (i < height - 1) {
      shape += newline;
    }
  }
  return shape;
}

function makeDiamond(height, char = defaultChar) {
  let top = makeIsoscelesTriangle(height, char);
  let bottom = top.split("").reverse().join("");
  return top + newline + bottom;
}

// Test each function with default char

console.log("\nLine");
console.log(makeLine(8));

console.log("\nSquare");
console.log(makeSquare(5));

console.log("\nRectangle");
console.log(makeRectangle(6, 3));

console.log("\Downward Stairs");
console.log(makeDownwardStairs(7));

console.log("\nSpace Line");
console.log(makeSpaceLine(2, 5));

console.log("\nIsosceles Triangle");
console.log(makeIsoscelesTriangle(8));

console.log("\nDiamond");
console.log(makeDiamond(5));


// Test each function with different char

console.log("\nLine");
console.log(makeLine(8, "O"));

console.log("\nSquare");
console.log(makeSquare(5, "H"));

console.log("\nRectangle");
console.log(makeRectangle(6, 3, "+"));

console.log("\nDownward Stairs");
console.log(makeDownwardStairs(7, "*"));

console.log("\nSpace Line");
console.log(makeSpaceLine(2, 5, "@"));

console.log("\nIsosceles Triangle");
console.log(makeIsoscelesTriangle(8, "~"));

console.log("\nDiamond");
console.log(makeDiamond(5, "$"));
