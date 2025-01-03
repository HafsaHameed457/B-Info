//take adjacent elements compare them and swap
// after completion of each iteration check if the current iteration includes any swaps 
// if yes repeat the above process
const bubbleSort = (arr) => {
    let sortAgain = true;
    while (sortAgain) {
      sortAgain = false;
      for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          sortAgain = true;
        }
      }
    }
    return arr;
  };
  
  console.log(bubbleSort([3, 2, 1, 4, 5]));

  //Ascending order BIG 0 =0(n^2)