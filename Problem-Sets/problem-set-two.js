// 1. Two SUm

// create a function that takes two arguements
// nums
// target
// determine which elements add to target number
// loop through each element
// choose the first element and last element

// return thier indexes
// add them to an array

let twoSum = function (nums, target) {
  let indices = [];
  let counter = 0;
  for (let k = 0; k < nums.length; k++) {
    for (let i = nums.length - 1; i > i; i--) {
      if (nums[counter] + nums[i] == target) {
        indices.push(i);
        indices.push(nums.indexOf(nums[counter]));
      } else counter++;
    }
  }
};
