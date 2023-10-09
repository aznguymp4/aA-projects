
function bubbleSort(arr) {
  let sorting = true
  while(sorting) {
    // Iterate through the array
    let didASwap = false
    for(let i=arr.length;i>=0;i--) {
      // If the current value is greater than its neighbor to the right
      // Swap those values
      if(arr[i] < arr[i-1]) {
        [arr[i],arr[i-1]] = [arr[i-1],arr[i]]
        didASwap = true
        break
      }
    }
    // Do not move this console.log
    console.log(arr.join(","));
    
    // If you get to the end of the array and no swaps have occurred, return
    sorting = didASwap && sorting
    // Otherwise, repeat from the beginning
  }
}

module.exports = bubbleSort;