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
  