let counter = 0
let string = 'abcde'
//O(n) - big O of n - n is the number of characters, generally how much input do we have to process
for (let i =0; i < string.length; i++){
  counter++
}
console.log(counter, string.length);

//if i had to do the above loop twice it would be big O of 2n
counter = 0
//O(n^2) big O of n squared
for (let i =0; i < string.length; i++){
  for (let j =0; j < string.length; j++){
    counter++
  }
}
console.log(counter, string.length);
