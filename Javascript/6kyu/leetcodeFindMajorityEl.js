//Given an array nums of size n, return the majority element.

//The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


var majorityElement = function(nums) {
nums.sort((a,b) => a-b)
    console.log(nums)
const l = nums.length
if(l %2=== 0){
    return nums[l/2]
} else {
    return nums[(l -1)/2]
}
};
