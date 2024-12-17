function finbonacciNumber(n) {
    let fibonacciData = {
      sum: 0,
      lastValue: 1,
    };
    let series = [];
    for (let i = 1; i <= n; i++) {
      series.push(fibonacciData.sum);
      fibonacciData.lastValue += fibonacciData.sum;
  
      fibonacciData.sum = fibonacciData.lastValue - fibonacciData.sum;
    }
  
    return series;
  }
  
  console.log(finbonacciNumber(7));
  
  // Big O = O(N)
  
  function fibonacciRecursive(n) {
    if (n < 2) {
      return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }
  console.log(fibonacciRecursive(3));