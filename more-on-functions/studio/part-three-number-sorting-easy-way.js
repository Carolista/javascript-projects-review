// Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

// Sort each array in ascending order.

// Define in place, same function every time though...
nums1.sort(function (a, b) {
  return a - b;
});
nums2.sort(function (a, b) {
  return a - b;
});
nums3.sort(function (a, b) {
  return a - b;
});

console.log(nums1);
console.log(nums2);
console.log(nums3);

// Sort each array in decending order.

// Create a single function definition this time to DRY code
function sortDesc(a, b) {
  return b - a;
}

nums1.sort(sortDesc);
nums2.sort(sortDesc);
nums3.sort(sortDesc);

console.log(nums1);
console.log(nums2);
console.log(nums3);
