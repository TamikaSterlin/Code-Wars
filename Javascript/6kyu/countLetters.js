//refactor

function letterCount(s){
  //your code here
  let obj = {}
  let arr = s.split('')
  for(let i =0; i < arr.length; i++){
   if(!obj[arr[i]]){
     obj[arr[i]] = 1
   } else {
     obj[arr[i]] += 1
   }
  }
  return obj
}
