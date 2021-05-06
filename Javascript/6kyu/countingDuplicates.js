//Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.


function duplicateCount(text){
  //...
   text = text.toLowerCase()
  let obj = {}
  let counter = 0
  for(let i = 0; i < text.length; i++){
    if(!obj[text[i]]){
      obj[text[i]] = 1
    } else if(obj[text[i]] != 'counted') {
    obj[text[i]] = 'counted'
      counter ++
    }
  }
//   for(const char in obj){
//     if(obj[char] > 1){
//       counter ++
//     }
//   }
return counter
}
last weekRefactor
