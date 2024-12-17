function povof2(n) {
    if (n >= 2) {
      while (n >= 2) {
        if (n % 2 != 0) {
          return false;
        } else {
          n /= 2;
        }
      }
      return true;
    }
    return false;
  }
  
  console.log(povof2(4));
// Big 0 = O(log n)  


function bitWisePower(n) {
    if (n < 1) {
      return false;
    }
    return (n & (n - 1)) === 0;
  }

  //Big O = O(1)