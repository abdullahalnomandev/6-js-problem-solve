const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumEvenNumbers(arr) {
  return arr.reduce((sum, num) => {
    return num % 2 === 0 ? sum + num : sum;
  }, 0);
}

const result = sumEvenNumbers(numbers);
// console.log(result);
