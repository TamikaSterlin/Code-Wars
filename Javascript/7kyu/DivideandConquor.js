//Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

//Return as a number.

function divCon(x) {
  console.log(x)
  const numTotal = x.filter(num => typeof num === 'number').reduce((a, b) => a + b, 0)

  console.log(numTotal)
  const stringTotal = x.filter(num => typeof num === 'string').map(n => parseInt(n)).reduce((a, b) => a + b, 0)
  console.log(stringTotal)

  let result = numTotal - stringTotal

  return result

}
