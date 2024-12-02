import fs from "fs";

const lines = fs
  .readFileSync("data.txt", "utf8")
  .split("\n")
  .filter((line) => line.trim() !== "");

let unsafeReport = 0;
let safeReport = 0;

for (const line of lines) {
  const report = line.split(" ").map(Number);
  let ascend;
  // console.log(report);
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
      // console.log("unsafe: ", report);
      isUnsafe = true;
      break;
    }
  }
  if (!isUnsafe) {
    // console.log("safe: ", report);
    safeReport++;
  }
}
console.log(unsafeReport, safeReport);

// PART 2
