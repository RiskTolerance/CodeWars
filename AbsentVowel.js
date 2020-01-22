function absentVowel(x) {
    if (x.indexOf("a") < 0) {
      return 0;
    } else if (x.indexOf("e") < 0) {
      return 1;
    } else if (x.indexOf("i") < 0) {
      return 2;
    } else if (x.indexOf("o") < 0) {
      return 3;
    } else if (x.indexOf("u") < 0){
      return 4;
    }
  }