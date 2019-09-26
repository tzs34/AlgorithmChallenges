function capitalizeFirstLetter([first, ...others]) {
  let str = `${first.toUpperCase()}${others}`;
  return str.replace(/,/gi, "");
}

const arr = ["h", "e", "l", "p"];
console.log(capitalizeFirstLetter("help"));
console.log(capitalizeFirstLetter(arr));
