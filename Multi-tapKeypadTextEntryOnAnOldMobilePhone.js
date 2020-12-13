function presses(phrase) {
    let presses = 0;
    let keyBlocks = ['1','ABC2','DEF3','GHI4','JKL5','MNO6','PQRS7','TUV8','WXYZ9','*',' 0','#'];
    let phraseLetters = phrase.toUpperCase().split('');
    phraseLetters.forEach(x => {
      keyBlocks.forEach(y => {
        if (y.indexOf(x) > -1){
          presses += y.indexOf(x) + 1;
        };
      });
    });
    return presses;
  };