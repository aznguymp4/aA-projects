function selectionSort(arr) {
  // Copy the original array
  let copy = Array.from(arr)
  // Create an array to store the sorted values
  let sorted = []
  // While the array is not empty...
  while(copy.length) {
    // Do not move this console.log
    console.log(sorted.join(","));
    
    // Find the index of the minimum value in the unsorted half
    let min = 0
    for(let i=0;i<copy.length;i++) {
      if(copy[min] > copy[i]) min = i
    }

    // Save and remove the value at the min index
    // Add the min value to the end of the sorted array
    sorted.push(copy.splice(min,1)[0])
  }
  return sorted
}

function selectionSortInPlace(arr) {
  // Set a pointer at zero diving the array into sorted and unsorted halves
  let divider = 0
  while(divider !== arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));
    
    // Find the index of the minimum value in the unsorted half
    let min = 0
    for(let i=arr.length;i>=divider;i--) {
      if(arr[min] > arr[i]) min = i
      min = arr.indexOf(Math.min(...arr.slice(divider, arr.length)))
    }

    // Save the min value
    let saved = arr[min]
    
    // Shift every unsorted value to the left of the min value to the right by 1
    for(let i=min;i>0;i--) {
      let pos = i
      while(arr[pos-1] > arr[pos]) {
        [arr[pos-1], arr[pos]] = [arr[pos], arr[pos-1]]
        pos--
      }
    }

    // Put the min value at the divider
    arr[divider] = saved //-
    
    // Increment the divider and repeat
    divider++
  }
}


module.exports = [selectionSort, selectionSortInPlace];
