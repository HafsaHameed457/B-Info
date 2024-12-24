// Selection Sort is a comparison-based sorting algorithm. It sorts an array by repeatedly selecting the smallest (or largest) element from the unsorted portion and swapping it with the first unsorted element. This process continues until the entire array is sorted.

// First we find the smallest element and swap it with the first element. This way we get the smallest element at its correct position.
// Then we find the smallest among remaining elements (or second smallest) and swap it with the second element.
// We keep doing this until we get all elements moved to correct position.

const selectionSort = (arr) => {
    if (arr.length === 0 || arr.length === 1) {
      return arr;
    } else {
      for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] < arr[minIndex]) {
            let temp = arr[minIndex];
            arr[minIndex] = arr[j];
            arr[j] = temp;
          }
        }
      }
      return arr;
    }
  };
  
  console.log(selectionSort([2, 3, 4, 5, 1, 7, 0]));