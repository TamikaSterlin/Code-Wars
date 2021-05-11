//Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.


function longest(words) {
  let length = 0
  for(let i =0; i <words.length; i++){
    if(length < words[i].length){
      length = words[i].length
    }
  }
  return length
}
