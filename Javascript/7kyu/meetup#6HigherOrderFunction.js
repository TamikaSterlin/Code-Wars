/*You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return either:

true if all developers in the list code in the same language; or
false otherwise.
For example, given the following input array:*/


function isSameLanguage(list) {
  // thank you for checking out the Coding Meetup kata :)
  for (let i = 0; i < list.length; i++) {
    if (list[i].language !== list[0].language) {
      return false
    }
  }
  return true
}
