function isPrime(n) {
    if (n >= 1) {
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
  
  console.log(isPrime(4));
//Big O = O(n)  