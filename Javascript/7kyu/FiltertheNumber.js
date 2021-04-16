//Oh no! The number has been mixed up with the text. Your goal is to retreive
//the number from the text, can you return the number back to it's original state?

var FilterString = function(value) {
  console.log(value)
  return parseInt(value.match(/\d+/g).join(''))
}
