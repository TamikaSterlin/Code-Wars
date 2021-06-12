/*You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left.*/

function lastSurvivor(letters, coords) {
   letters = letters.split('')
  for(let i =0; i < coords.length; i++){
    letters.splice(coords[i],1)
  }
  return letters.join('')
}
