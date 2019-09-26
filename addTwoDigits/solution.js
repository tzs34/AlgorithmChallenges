function addTwoDigits(num) {
  return num
    .toString()
    .split("")
    .reduce((acc, num) => (acc += +num), 0);
}

console.log(addTwoDigits(29));
