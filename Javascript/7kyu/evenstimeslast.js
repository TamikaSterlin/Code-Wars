/*Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

Indexes in sequence start from 0.

If the sequence is empty, you should return 0.*/


function evenLast(numbers) {
  let even = numbers.filter(num => num % 2 === 0)
  console.log(even)
  return even.reduce((a, b) => b * numbers[numbers.length - 1] + a, 0)
}
