//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

//Note that you must do this in-place without making a copy of the array.

let arr = []
for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 0) {
    arr.push(i)
  }
}
for (let i = arr.length - 1; i >= 0; i--) {
  nums.splice(arr[i], 1)
  nums.push(0)
}
}
