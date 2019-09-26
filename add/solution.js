function add(a, b) {
  return a + b;
}

function add2(...rest) {
  return rest.reduce((acc, num) => {
    return (acc += num);
  }, 0);
}

console.log(add(9, 1));
console.log(add2(1, 2, 3, 4));
