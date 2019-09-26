function longestString(inputArray) {
  return inputArray.reduce((longest, str) => {
    return (longest = longest.length > str.length ? longest : str);
  }, "");
}

function allLongestStrings(inputArray) {
  return inputArray.reduce((longest, str) => {
    if (longest.length === 0) {
      longest.push(str);
    } else {
      if (longest[0].length < str.length) {
        longest[0] = str;
      }
      if (longest[0].length === str.length) {
        longest.push(str);
      }
    }
    return longest;
  }, []);
}
console.log(longestString(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
