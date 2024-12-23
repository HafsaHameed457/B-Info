const insertionSort = (arr) => {
    let sortedIndex = 0;
    let newArray = [arr[0]];
    for (let i = sortedIndex + 1; i <= arr.length - 1; i++) {
      if (arr[i] > newArray[sortedIndex]) {
        newArray.push(arr[i]);
        sortedIndex++;
      } else {
        for (let j = sortedIndex - 1; j >= 0; ) {
          if (arr[i] > newArray[j]) {
            newArray.splice(j + 1, 0, arr[i]);
            console.log(newArray);
            j = -1;
          } else {
            if (j === 0) {
              newArray.splice(0, 0, arr[i]);
            }
  
            j--;
          }
        }
      }
    }
    return newArray;
  };
  
  console.log(insertionSort([2, 3, 4, 5, 1, 7, 0]));
  