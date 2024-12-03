import fs from "fs";

const data = fs.readFileSync("data.txt", "utf8"); //.split("\n");

/* const validPattern = /mul\(\d{1,3},\d{1,3}\)/g;

let multiplicationSum = 0;
for (const match of data.matchAll(validPattern)) {
  const nums = match[0].slice(4, -1).split(",");
  multiplicationSum += nums[0] * nums[1];
}
console.log(multiplicationSum); */

/// PART 2

const validPattern = /(mul\(\d{1,3},\d{1,3}\))|(do\(\))|(don't\(\))/g;
let multiplicationSum = 0;
let performOperation = true;
for (const match of data.matchAll(validPattern)) {
  if (match[0] === "do()") {
    performOperation = true;
  } else if (match[0] === "don't()") {
    performOperation = false;
  } else {
    if (performOperation) {
      const nums = match[0].slice(4, -1).split(",");
      multiplicationSum += nums[0] * nums[1];
    }
  }
}
console.log(multiplicationSum);
