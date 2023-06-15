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
    let mid =
      low + ((high - low) * (value - array[low])) / (array[high] - array[low]);

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
 * @name: Fibonacci Search
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
export function fibonacciSearch(array: Array<number>, value: number): number {
  let fibs: number[] = [];
  fibs[0] = 0;
  fibs[1] = 1;
  for (let i = 2; i < array.length; i++) {
    fibs[i] = fibs[i - 1] + fibs[i - 2];
  }

  let fib = fibs.find((fib: number) => fib >= array.length);

  if (fib !== undefined) {
    let lo = 0;
    let hi = array.length - 1;

    let mid;
    if (fib !== undefined) {
      mid =
        lo + ((hi - lo) * (value - array[lo])) / (array[fib - 1] - array[lo]);
    } else {
      mid = -1;
    }

    if (array[mid] === value) {
      return mid;
    } else if (array[mid] < value) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return -1;
};

// ========================== Sorting Algorithms ==========================
/**
 * @name: Bubble Search
 * @param  {Array} array The array to search.
 * @param  {number} value The value to search for.
 * @return {number} The index of the value in the array, or -1 if the value is not found.
 */
/*
| Case | Time Complexity |
|---|---|
| Best Case | Ω(n) |
| Worst Case | O(n^2) |
| Average Case | Θ(n^2) |
*/
/**
| Case | Space Complexity |
|---|---|
| Worst Case | O(1) | 
*/
export function bubbleSearch(arr: Array<number>, value: number): number {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] === value) {
        return j;
      }
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return -1;
};