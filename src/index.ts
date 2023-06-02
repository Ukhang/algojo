// ================= Serching Algorithms =================
/**
 * @name: Linear Search
 * @param  {Array} array The array to search.
 * @param  {number} value The value to search for.
 * @return {number} The index of the value in the array, or -1 if the value is not found.
 */
export function linearSearch(arr: Array<number>, value: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }

  return -1;
};

/**
 * @name: Binary Search
 * @param  {Array} array The array to search.
 * @param  {number} value The value to search for.
 * @return {number} The index of the value in the array, or -1 if the value is not found.
 */
export function binarySearch(array: number[], value: number): number {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = (low + high) >> 1;

    if (array[mid] === value) {
      return mid;
    } else if (array[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
};