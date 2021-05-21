function largestPairSum(numbers)
{
  //TODO: Write your Code here
  let largest = numbers.sort((a,b) => a - b).slice(-2).reduce((a,b)=> a + b, 0)
  console.log(largest)
  return largest
}
