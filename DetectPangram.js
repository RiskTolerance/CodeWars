function isPangram(string){
    //return false if the string couldn't possibly contain the alphabet;
    if (string.length < 21) {
      return false;
    };
    //
    const all = string.toLowerCase()
    const alpha = "abcdefghijklmnopqrxyz";
    let i = alpha.length;
    let count = 0;
    //for each matching letter of the alphabet, count the match;
    while (i--) {
      if (all.search(`${alpha[i]}`) > -1) {
        count++;
      }
    }
    //if all letters are acounted for, return true
    return (count === 21 ? true : false);
  }