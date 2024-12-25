//For n steps in stairs give number of different ways to reach to the top you can take either 1 or 2 steps.

const climbingStairCase = (steps) => {
    let ways = [1, 2];
    for (let i = 2; i < steps; i++) {
      ways[i] = ways[i - 1] + ways[i - 2];
    }
    return ways[steps - 1];
  };
  
  console.log(climbingStairCase(4));