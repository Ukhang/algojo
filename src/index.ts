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
 * @name: Selection Sort
 * @param  {Array} array The array to sort.
 * @return {Array} The sorted array.
 */
/*
| Case | Time Complexity |
|---|---|
| Best Case | Ω(n^2) |
| Worst Case | O(n^2) |
| Average Case | Θ(n^2) |
*/
/**
| Case | Space Complexity |
|---|---|
| Worst Case | O(1) |
*/
export function selectionSort(arr: Array<number>): Array<number> {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    // Find the minimum element in the unsorted subarray.
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the minimum element with the first element in the unsorted subarray.
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
};


/**
 * @name: Insertion Sort
 * @param  {Array} arr The array to sort.
 * @return {Array} The sorted array in ascending order.
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
export function insertionSort(arr: number[]): number[] {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    const key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}


/**
 * @name: Merge Sort
 * @param  {Array} arr The array to sort.
 * @return {Array} The sorted array in ascending order.
 */
/*
| Case | Time Complexity |
|---|---|
| Best Case | Ω(n log(n)) |
| Worst Case | O(n log(n)) |
| Average Case | Θ(n log(n)) |
*/
/**
| Case | Space Complexity |
|---|---|
| Worst Case | O(n) |
*/
export function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  const merged: number[] = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    merged.push(left[i]);
    i++;
  }

  while (j < right.length) {
    merged.push(right[j]);
    j++;
  }

  return merged;
}
/**
 * @name: Bubble Sort
 * @param  {Array} arr The array to sort.
 * @return {Array} The sorted array in ascending order.
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
export function bubbleSort(arr: number[]): number[] {
  const len = arr.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}