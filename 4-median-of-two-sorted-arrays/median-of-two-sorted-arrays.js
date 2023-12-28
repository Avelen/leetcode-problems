/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  let m = nums1.length;
  let n = nums2.length;
  let start = 0;
  let end = m;

  while (start <= end) {
    let partitionX = (start + end) >> 1;
    let partitionY = ((m + n + 1) >> 1) - partitionX;

    let maxLeftX = (partitionX == 0) ? -Infinity : nums1[partitionX - 1];
    let minRightX = (partitionX == m) ? Infinity : nums1[partitionX];
    let maxLeftY = (partitionY == 0) ? -Infinity : nums2[partitionY - 1];
    let minRightY = (partitionY == n) ? Infinity : nums2[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((m + n) % 2 == 0) {
        return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
      } else {
        return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) {
      end = partitionX - 1;
    } else {
      start = partitionX + 1;
    }
  }
}
