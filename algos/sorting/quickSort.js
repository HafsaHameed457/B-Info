// Take a pivot element compare all elemts in array and divide them into left(lesser elemnts) and right(greater elements)
//do recursiion to sort

const quickSort = (arr) => {
    let leftArr = [],
      rightArr = [];
    let pivotElement;
    if (arr.length === 0) {
      return arr;
    } else {
      pivotElement = arr[arr.length - 1];
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > pivotElement) {
          rightArr.push(arr[i]);
        } else if (arr[i] < pivotElement) {
          leftArr.push(arr[i]);
        }
      }
      return [...quickSort(leftArr), pivotElement, ...quickSort(rightArr)];
    }
  };
  
  console.log(quickSort([2, 3, 4, 5, 1, 7, 0]));
    //Worst case complexity is= O(N^2) comparing every ELEMT TO EVERY OTHER LOOP FOR EACH ELEMENT

    // avg case is = bIG o(nlog n)


  