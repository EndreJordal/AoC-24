import fs from "fs";

const data = fs.readFileSync("data.txt", "utf8").split("\n");

const cleanedData = data
  .map(e =>
    e
      .replace(":", "")
      .split(" ")
      .map(e => Number(e))
  )
  .map(e => {
    const [result, ...rest] = e;
    return {
      res: result,
      values: rest,
    };
  });

let totalCalibration = 0;

for (let equation of cleanedData) {
  const validResult = equationValidation(equation);
  if (validResult) {
    totalCalibration += validResult;
  }
}

function equationValidation(eq) {
  const operators = generateOperatorPermutations(eq.values.length - 1);

  for (let j = 0; j < operators.length; j++) {
    let result = eq.values[0];
    for (let i = 0; i < operators[j].length; i++) {
      if (operators[j][i] === "+") {
        result += eq.values[i + 1];
      } else if (operators[j][i] === "*") {
        result *= eq.values[i + 1];
      }
    }
    if (result === eq.res) {
      return result;
    }
  }
  return 0;
}

function generateOperatorPermutations(N) {
  if (N === 0) return [""]; // Base case: return an empty string for N = 0

  const smallerPermutations = generateOperatorPermutations(N - 1);
  const result = [];

  for (let perm of smallerPermutations) {
    result.push(perm + "+");
    result.push(perm + "*");
  }

  return result;
}

console.log(totalCalibration);
