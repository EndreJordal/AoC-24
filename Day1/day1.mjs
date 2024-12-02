import fs from "fs";

const lines = fs.readFileSync("data.txt", "utf8").split("\n");
const left = [];
const right = [];

for (let line of lines) {
  const nums = line.split("   ");
  left.push(+nums[0]);
  right.push(+nums[1]);
}
left.sort((a, b) => a - b);
right.sort((a, b) => a - b);

let totalDistance = 0;

for (let i = 0; i < left.length; i++) {
  totalDistance += Math.abs(left[i] - right[i]);
}
console.log(totalDistance);

// Part 2
let similarityScore = 0;

for (let leftNum of left) {
  similarityScore += leftNum * right.filter((e) => e === leftNum).length;
}
console.log(similarityScore);
