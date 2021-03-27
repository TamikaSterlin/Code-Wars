/*You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

Your task is to return the number of JavaScript developers coming from Europe.

For example, given the following list:*/

//title of codewar Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe

function countDevelopers(list) {
  console.log(list)
  let num = 0
  list.forEach( x => {
    if(x.continent === 'Europe' && x.language === 'JavaScript'){
      num++
    }
  })
  return num
}
