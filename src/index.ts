// ================= Serching Algorithms =================
/**
 * @name: Linear Search
 * @param  {Array} array The array to search.
 * @param  {number} value The value to search for.
 * @return {number} The index of the value in the array, or -1 if the value is not found.
*/
export function linearSearch(arr: Array<number>, value: number): number { 

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }

  return -1;
  
}