function search(n, number) {
    for (let i = 0; i < n.length; i++) {
      if (number === n[i]) {
        return i;
      }
    }
    return -1;
  }
  
  console.log(search([1, 2, 3, 4, 20], 20));
  