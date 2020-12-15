//first garbage solution
function game(n) {
    let answer = [];
    let total = 0;
    let val = 0.5;
    if (n === 1) {return [1,2]};
    for (let i = 1; i <= n; i++){
      total += val;
      val += 1;
    };
    total = total.toString().split('.')
    if (total.length === 1) {
      return [Number(total)];
    } else {
      return [Number(total[0])*2+1, 2]
    };
  };

//refined solution after I realized my brain is smooth

function game(n) {
    let total = 0;
    let val = 0.5;
    for (let i = 1; i <= n; i++){
      total += val;
      val += 1;
    };
    return (total % 2 ? [total*2, 2] : [total]);
  };