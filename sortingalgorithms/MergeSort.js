const MergeSort = (arr, l, h) => {
  // Base condition: if the low index is equal to the high index, the array is already sorted
  if (l >= h) return;

  // Calculate the middle point of the array
  let mid = Math.floor((l + h) / 2);

  // Recursively call MergeSort on the left half of the array
  MergeSort(arr, l, mid);

  // Recursively call MergeSort on the right half of the array
  MergeSort(arr, mid + 1, h);

  // Merge the two sorted halves
  Merge(arr, l, mid, h);
}

// Function to merge two sorted halves of the array
function Merge(arr, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;

  // Merge elements from both halves into the temp array
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  // Add any remaining elements from the left half
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  // Add any remaining elements from the right half
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  // Copy the sorted elements back into the original array
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }

  return arr;
}

// Example usage:
let arr = [38, 27, 43, 3, 9, 82, 10];
MergeSort(arr, 0, arr.length - 1);
console.log(arr); // [3, 9, 10, 27, 38, 43, 82]
