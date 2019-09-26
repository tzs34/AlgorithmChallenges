function absoluteValuesSumMinimization(numbers) {
  //get median value
  let length = numbers.length;
  if (length % 2 === 0) {
    let index = length / 2 - 1;
    return numbers[index];
  }
  let index = Math.floor(length / 2);
  return numbers[index];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 6, 7]));
