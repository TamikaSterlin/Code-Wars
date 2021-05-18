/*Given an array of integers, return a new array such that each element at index i
of the new array isthe product of all the numbers in the original array except the one at i.
For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
If our input was [3, 2, 1], the expected output would be [2, 3, 6].*/

function intProducts(num){
 //created new array
 let array = []
 //loop through array of num using forEach method
 num.forEach((item, index) => {
  //use slice and concat method to delete an element each time and I used concat to get the middle elements
 let left = num.slice(0,index )
 let right =  num.slice(index + 1)
  console.log(left, right)
  let newEl = left.concat(right)
  //use reduce to multiply the remaining elements and push it into the new array
  array.push(newEl.reduce((acc, int) => acc * int, 1 ))
 })
 return array
}

console.log(intProducts([1,2,3,4,5]))
