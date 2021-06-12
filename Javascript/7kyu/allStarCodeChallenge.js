/*All Star Code Challenge #20

Create a function called addArrays() that combines two arrays of equal length, summing each element of the first with the corresponding element in the second, returning the "combined" summed array.
Raise an error if input arguments are not of equal length.*/

function addArrays(array1, array2) {
  //code here
  if (array1.length != array2.length) return error
  let arr = []
  for (let i = 0; i < array1.length; i++) {
    arr.push(array1[i] + array2[i])
  }
  return arr
}
