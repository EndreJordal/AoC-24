import fs from "fs";

const data = fs.readFileSync("data.txt", "utf8");

const horizontalLines = data.split("\n");
const verticalLines = [];
const topLeftToBottomRight = [];
const topRightToBottomLeft = [];

// verticals
for (let i = 0; i < horizontalLines[0].length; i++) {
  let line = "";

  for (let j = 0; j < horizontalLines.length; j++) {
    line += horizontalLines[j][i];
  }
  verticalLines.push(line);
}

// Top-left to bottom-right
for (
  let sum = 0;
  sum < verticalLines.length + verticalLines[0].length - 1;
  sum++
) {
  let diagonal = "";
  for (let row = 0; row < verticalLines.length; row++) {
    const col = sum - row;
    if (col >= 0 && col < verticalLines[0].length) {
      diagonal += verticalLines[row][col];
    }
  }
  if (diagonal) topLeftToBottomRight.push(diagonal);
}

// Top-right to bottom-left
for (
  let diff = -(verticalLines.length - 1);
  diff < verticalLines[0].length;
  diff++
) {
  let diagonal = "";
  for (let row = 0; row < verticalLines.length; row++) {
    const col = row + diff;
    if (col >= 0 && col < verticalLines[0].length) {
      diagonal += verticalLines[row][col];
    }
  }
  if (diagonal) topRightToBottomLeft.push(diagonal);
}

let XMAScount = 0;
for (let lines of [
  horizontalLines,
  verticalLines,
  topLeftToBottomRight,
  topRightToBottomLeft,
]) {
  for (let line of lines) {
    for (let match of line.matchAll(/XMAS/g)) {
      XMAScount++;
    }
    for (let match of line.split("").reverse().join("").matchAll(/XMAS/g)) {
      XMAScount++;
    }
  }
}
console.log(XMAScount);
