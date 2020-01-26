// kata link
// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/javascript

function minSum(arr) {
    let sortedArr = arr.sort((a,b) => (a - b));
    let redThisArr = [];
    for (let i = 0;i < (arr.length/2);i++) {
      redThisArr.push(sortedArr[i]*sortedArr[arr.length - 1 - i]);
    }
    return redThisArr.reduce((a,b) => (a+b));
  }

  //ahhh it's so messy D: