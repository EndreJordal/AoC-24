import fs from "fs";

const rules = fs
  .readFileSync("dataRules.txt", "utf8")
  .split("\n")
  .map((e) => [...e.split("|").map((e) => Number(e))]);
const updates = fs
  .readFileSync("dataLines.txt", "utf8")
  .split("\n")
  .map((e) => [...e.split(",").map((e) => Number(e))]);
// console.log(rules);

let middlePageCount = 0;
for (let i = 0; i < updates.length; i++) {
  let validUpdate = true;
  updates[i].forEach((page, index) => {
    const precedingPages = updates[i].slice(0, index);
    const currentRules = rules.filter((e) => e[0] === page).map((e) => e[1]);
    for (let j = 0; j < precedingPages.length; j++) {
      if (currentRules.includes(precedingPages[j])) {
        validUpdate = false;
      }
    }
  });
  if (validUpdate) {
    middlePageCount += updates[i][Math.floor(updates[i].length / 2)];
  }
}
console.log(middlePageCount);
