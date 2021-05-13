//Write a function that combines two arrays by alternatingly taking elements from each array in turn.




function mergeArrays(a, b) {
  // your code here
  let newArr = []
  let longest = a.length > b.length ? a: b
   for (let i = 0; i < longest.length; i ++){
if(a[i])  newArr.push(a[i])
if(b[i]) newArr.push(b[i])

   }
  return newArr
}
