/*In this kata, you've to count lowercase letters in a given string and return the letter count in
a hash with 'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby and 'char'
instead of string in Crystal.*/



function letterCount(s) {
  //your code here
  let obj = {}
  for (let i = 0; i < s.length; i++) {
    let letter = s[i]
    if (obj[letter]) {
      obj[letter]++
    } else {
      obj[letter] = 1
    }
  }
  return obj
}
