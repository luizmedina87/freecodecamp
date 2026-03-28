// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return [];
  }

  let positiveCount = 0;
  let negativeSum = 0;

  for (i of input) {
    switch (true) {
      case i > 0:
        positiveCount++;
        break;
      case i < 0:
        negativeSum += i;
        break;
    }
  }

  if (!positiveCount && !negativeSum) {
    return [];
  }

  return [positiveCount, negativeSum];
}

console.log(countPositivesSumNegatives([0, 0]));
