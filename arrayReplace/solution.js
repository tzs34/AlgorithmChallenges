const testArray = [1,2,3,1,4,5,1,6]


function arrayReplace(inputArray, elemToReplace, substitutionElem){

  return inputArray.reduce((acc, num) => {
    num === elemToReplace ? acc.push(substitutionElem) : acc.push(num)
    return acc
  }, [])
}

console.log(arrayReplace(testArray, 1, 9))