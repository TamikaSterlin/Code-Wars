/*Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.*/




function spinWords(string){
  //TODO Have fun :)
  let array = string.split(' ')
  let newArray = []
  array.forEach(word => {
    if(word.length >= 5){
      newArray.push(word.split('').reverse().join(''))
    } else {
      newArray.push(word)
    }
  })
  return newArray.join(' ')
}
