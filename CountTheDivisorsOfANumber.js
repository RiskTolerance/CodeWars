function getDivisorsCnt(n){
    let count = 0;
    for (let i = 1; i <= 500000; i++) {
      if (n%i===0) {
        count += 1;
      }
    }
    return count;
}