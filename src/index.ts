// ================= Serching Algorithms =================
/**
 * @name: Linear Search
 * @param  {Array} array The array to search.
 * @param  {number} value The value to search for.
 * @return {number} The index of the value in the array, or -1 if the value is not found.
*/
/*
| Case | Time Complexity |
|---|---|
| Best Case | Ω(1) |
| Worst Case | O(n) |
| Average Case | Θ(n) |
*/
/**
| Case | Space Complexity |
|---|---|
| Worst Case | O(1) | 
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
/*
| Case | Time Complexity |
|---|---|
| Best case | Ω(1) |
| Worst case | O(log n) |
| Average case | Θ(log n) |
*/
/*
| Case | Space Complexity |
|---|---|
| Worst Case | O(1) |
*/
export function binarySearch(array: Array<number>, value: number): number {
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

/**
 * @name: Jump Search
 * @param  {Array} array The array to search.
 * @param  {number} value The value to search for.
 * @return {number} The index of the value in the array, or -1 if the value is not found.
*/
/*
| Case | Time Complexity |
|---|---|
| Best case | Ω(√n) |
| Worst case | O(n) |
| Average case | Θ(√n) |
*/
/*
| Case | Space Complexity |
|---|---|
| Worst Case | O(1) |
*/
export function jumpSearch(array: Array<number>, value: number): number {
  const length = array.length;
  const step = Math.floor(Math.sqrt(length));
  let low = 0;

  while (low < length) {
    if (array[low] >= value) {
      break;
    }
    low += step;
  }

  for (let i = low; i < length && array[i] <= value; i += step) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
};

/**
 * @name: interpolation Search
 * @param  {Array} array The array to search.
 * @param  {number} value The value to search for.
 * @return {number} The index of the value in the array, or -1 if the value is not found.
*/
/*
| Case | Time Complexity |
|---|---|
| Best case | Ω(1) |
| Worst case | O(log n) |
| Average case | Θ(log log n) |
*/
/*
| Case | Space Complexity |
|---|---|
| Worst Case | O(1) |
*/
export function interpolationSearch(array: Array<number>, value: number): number {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = low + (high - low) * (value - array[low]) / (array[high] - array[low]);

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