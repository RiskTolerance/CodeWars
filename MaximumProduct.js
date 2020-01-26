//kata link
//https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/javascript?collection=playing-with-lists-slash-arrays

function adjacentElementsProduct(array) {
    let maxNumber = -10000000000;
    for (let i = 0;i < (array.length - 1); i++) {
      let multiply = array[i]*array[i+1];
      if (multiply > maxNumber) {
        maxNumber = multiply;
      }
    }
    return maxNumber;
  }

  //this could have been easier using Math.max() on a new array containing the products of multiply