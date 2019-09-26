function capitalizeFirstLetter([first, ...others]) {
  let str = `${first.toUpperCase()}${others}`;
  return str.replace(/,/gi, "");
}

function toUpperCase(str){
  return str.toUpperCase()
}

function regexCapitalizeFirstLetter(str){
  return str.replace(/^(?<first>\w)/g, toUpperCase)
}

const arr = ["h", "e", "l", "p"];

console.log(capitalizeFirstLetter("help"));
console.log(regexCapitalizeFirstLetter('help'));
console.log(capitalizeFirstLetter(arr));
