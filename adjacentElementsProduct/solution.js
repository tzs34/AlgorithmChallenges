function adjacentElementsProduct(inputArray) {
  return inputArray.reduce(
    (acc, num) => {
      let { prev, sum } = acc;
      let next = prev * num;
      acc.sum = next > prev ? next : sum;
      acc.prev = num;
      return acc;
    },
    { prev: 0, sum: 0 }
  ).sum;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
