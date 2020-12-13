function isPrime(num) {
    let square = Math.ceil(Math.sqrt(num));
    let prime = true;
  
    if (num < 2) {
      return false
    } else if (num === 2) {
      return true
    }
  
    for (let i = 2; i < square + 1; i++) {
      if (num % i === 0) {
        prime = false
      }
    }
    
    return prime;
  }