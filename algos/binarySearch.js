const binarySearch = (arr, target) => {
    let startIndex = 0,
      endIndex = arr.length - 1;
    let midIndex = 0;
    if (arr.length === 0) return -1;
    while (startIndex < endIndex) {
      midIndex =
        arr.length % 2 === 0
          ? (startIndex + endIndex) / 2 - 1
          : (startIndex + endIndex) / 2;
      if (arr[midIndex] === target) {
        return midIndex;
      } else if (arr[midIndex] > target) {
        endIndex = midIndex-1
      } else {
        startIndex = midIndex+1;
      }
    }
    return -1;
  };
  
  console.log(binarySearch([1, 2, 3, 4, 5], 5));
  
  //Big O = O(log n)


  const recursiveSearch