var capitals = function (word) {
  // Write your code here
  let array = []
  for(let i = 0; i < word.length; i++){
    if (word[i] === word[i].toUpperCase() ){
      array.push(i)
    }
  }
 return array
};
