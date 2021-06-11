function findMissing(arr){
  //find the missing term
  let prev = arr[0];
  const multiplier= arr[1]/prev;
  for(let i =1; i<arr.length;i++){
    if(prev*multiplier !== arr[i]){
      return multiplier*prev;
    }
    prev = arr[i];
  }

}
