// 1. Two SUm

let twoSum = function (nums, target) {
  let indices = [];
  let counter = 0;
  for (let k = 0; k < nums.length; k++) {
    for (let i = nums.length - 1; i > 0; i--) {
      if (nums[counter] + nums[i] == target) {
        indices.push(i);
        indices.push(nums.indexOf(nums[counter]));
        break;
      }
    }
    counter++;
  }
  return indices;
};

console.log(twoSum([2, 7, 11, 15], 9));
