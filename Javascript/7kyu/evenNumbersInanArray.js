//Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.






function evenNumbers(array, number) {
  // good luck
  console.log(number)
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newArr.push(array[i])
    }
  }
  return newArr.splice(newArr.length - number, number)
}
