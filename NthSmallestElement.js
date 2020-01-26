//kata link
// https://www.codewars.com/kata/5a512f6a80eba857280000fc/train/javascript?collection=playing-with-lists-slash-arrays

function nthSmallest(arr, pos){
    let arr2 = arr.sort((a, b) => {return a - b});
    return arr2[pos-1];
  }

  //I'm sure this isn't optimal, but I'm happy with it