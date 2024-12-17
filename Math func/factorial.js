function factorial(n) {
    if (n === 1) {
      return n;
    }
    return n * factorial(n - 1);
  }
  
  function nFactorial(n) {
    let product = 1;
    for (let i = 1; i <= n; i++) {
      product *= i;
    }
    return product;
  }
  
  //Big O (N)
  console.warn(factorial(5));
  console.warn(nFactorial(5));
  