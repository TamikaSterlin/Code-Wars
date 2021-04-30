// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
let newArr = ages.sort((a,b) => b -a).splice(0,2).reverse()
console.log(newArr)
return newArr

}
