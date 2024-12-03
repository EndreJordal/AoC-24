import fs from "fs";

const lines = fs
  .readFileSync("data.txt", "utf8")
  .split("\n")
  .filter((line) => line.trim() !== "");

let unsafeReport = 0;
let safeReport = 0;

/// PART 1
/* for (const line of lines) {
  const report = line.split(" ").map(Number);
  let ascend;
  
  if (report[0] === report[1]) {
    unsafeReport++;
    continue;
  }

  ascend = report[0] < report[1];

  let isUnsafe = false;

  for (let i = 0; i < report.length - 1; i++) {
    if (
      (ascend && report[i] > report[i + 1]) ||
      (!ascend && report[i] < report[i + 1]) ||
      Math.abs(report[i] - report[i + 1]) > 3 ||
      report[i] === report[i + 1]
    ) {
      unsafeReport++;
      
      isUnsafe = true;
      break;
    }
  }
  if (!isUnsafe) {
    
    safeReport++;
  }
} */

/// PART 2

for (const line of lines) {
  const data = line.split(" ").map(Number);
  let isSafe = false;
  for (let i = 0; i < data.length; i++) {
    if (checkSafety(data.toSpliced(i, 1))) {
      isSafe = true;
      break;
    }
  }
  if (isSafe) {
    safeReport++;
  } else {
    unsafeReport++;
  }
}

function checkSafety(report) {
  let ascend = report[0] < report[1];
  for (let i = 0; i < report.length - 1; i++) {
    if (
      (ascend && report[i] > report[i + 1]) ||
      (!ascend && report[i] < report[i + 1]) ||
      Math.abs(report[i] - report[i + 1]) > 3 ||
      report[i] === report[i + 1]
    ) {
      return false;
    }
  }
  return true;
}
console.log(unsafeReport, safeReport);
