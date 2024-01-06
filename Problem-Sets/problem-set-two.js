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
  // for each element create a new iteration
  for (let k = 0; k < nums.length; k++) {
    // create counter to record index

    // create a for loop that adds each element and determines if equals target
    for (let i = nums.length - 1; i > i; i--) {
      // Determine if two values equal target
      if (nums[counter] + nums[i] == target) {
        indices.push(i);
        indices.push(nums.indexOf(nums[couter]));
      }
    }
  }
};
