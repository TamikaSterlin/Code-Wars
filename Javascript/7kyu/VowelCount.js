/*Description:
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/

function getCount(str) {
  var vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}
