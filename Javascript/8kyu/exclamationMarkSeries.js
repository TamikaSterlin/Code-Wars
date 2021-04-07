//Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

function replace(s){
  //coding and coding....
  let vowel = ['a', 'e', 'i', 'o', 'u']
  let char = s.split('')
  let newChar = '!'
  for(let i=0; i < char.length; i++){
    if(vowel.includes(char[i].toLowerCase())){
  char[i] = newChar
    }
  }
  return char.join('')
  }
  
