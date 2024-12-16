const input = "0 4 4979 24 4356119 914 85734 698829";

const initialStones = input.split(" ").map(e => Number(e));

// Part 1 - Recursive

/* let blinks = 0;

function blink(stones) {
  const updatedStones = [];
  for (let i = 0; i < stones.length; i++) {
    if (stones[i] === 0) {
      updatedStones.push(1);
    } else if (stones[i].toString().length % 2 === 1) {
      updatedStones.push(stones[i] * 2024);
    } else {
      const stoneString = stones[i].toString();
      const center = stoneString.length / 2;
      const firstStone = parseInt(stoneString.slice(0, center));
      const secondStone = parseInt(stoneString.slice(center));
      updatedStones.push(firstStone, secondStone);
    }
  }
  if (blinks === 25) {
    return stones;
  } else {
    blinks++;
  }

  return blink(updatedStones);
}
const finalStones = blink(initialStones);

console.log(finalStones.length); */

// PART 2 - Iterative approach

function blink(stones, totalBlinks) {
  let blinks = 1;

  while (blinks <= totalBlinks) {
    const updatedStones = [];
    for (let i = 0; i < stones.length; i++) {
      if (stones[i] === 0) {
        updatedStones.push(1);
      } else if (stones[i].toString().length % 2 === 1) {
        updatedStones.push(stones[i] * 2024);
      } else {
        const stoneString = stones[i].toString();
        const center = stoneString.length / 2;
        const firstStone = parseInt(stoneString.slice(0, center));
        const secondStone = parseInt(stoneString.slice(center));
        updatedStones.push(firstStone, secondStone);
      }
    }
    blinks++;

    // Monitor size and handle limits
    console.log(`Blink ${blinks}: Array size = ${updatedStones.length}`);
    if (updatedStones.length > 1e6) {
      // Adjust limit as needed
      console.warn(
        "Array size too large, stopping to prevent memory overflow."
      );
      return updatedStones;
    }

    stones = updatedStones; // Update stones for the next iteration
  }

  return stones;
}

const finalStones = blink(initialStones, 75);
console.log(finalStones);
