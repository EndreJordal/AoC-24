import fs from "fs";

const grid = fs.readFileSync("data.txt", "utf8").split("\n");
// console.log(grid);
const pos = { x: 0, y: 0 };
const visitedCoordinates = new Set();
for (let i = 0; i < grid.length; i++) {
  const startPos = grid[i].indexOf("^");
  if (startPos !== -1) {
    pos.x = startPos;
    pos.y = i;
    visitedCoordinates.add(`${pos.x}-${pos.y}`);
    break;
  }
}

let direction = "N";
while (pos.x < grid[0].length || pos.y < grid.length) {
  while (true) {
    if (direction === "N") {
      if (grid[pos.y - 1][pos.x] === "#") {
        direction = "W";
        continue;
      } else {
        pos.y--;
        visitedCoordinates.add(`${pos.x}-${pos.y}`);
        break;
      }
    }
    if (direction === "W") {
      if (grid[pos.y][pos.x + 1] === "#") {
        direction = "S";
        continue;
      } else {
        pos.x++;
        visitedCoordinates.add(`${pos.x}-${pos.y}`);
        break;
      }
    }
    if (direction === "S") {
      if (grid[pos.y + 1][pos.x] === "#") {
        direction = "E";
        continue;
      } else {
        pos.y++;
        visitedCoordinates.add(`${pos.x}-${pos.y}`);
        break;
      }
    }
    if (direction === "E") {
      if (grid[pos.y][pos.x - 1] === "#") {
        direction = "N";
        continue;
      } else {
        pos.x--;
        visitedCoordinates.add(`${pos.x}-${pos.y}`);
        break;
      }
    }
  }
}
console.log(visitedCoordinates.length);
