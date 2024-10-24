const mixedNumbers = [
  1, 2, 3, 66, 67, 68, 69, 70, 71, 9, 10, 23, 81, 82, 83, 84, 24, 25, 26, 54,
  55, 56, 19, 20, 21, 22, 57, 58, 59, 60, 6, 65, 85, 86, 87, 88, 4, 95, 96, 97,
  98, 99,
];

function separateNumbers(array) {
  // NEW MASSIVE

  let odd = [];
  let even = [];

  for (let i = 0; i <= array.length; i++) {
    if (array[i] % 2 === 0) {
      even.push(array[i]);
    } else {
      odd.push(array[i]);
    }
  }
  return { odd, even };
}

let result = separateNumbers(mixedNumbers);

console.log("Odd numbers:", result.odd);
console.log("Even numbers:", result.even);
