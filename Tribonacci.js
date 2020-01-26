//kata link
//https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

function tribonacci(signature,n){
    if (n == 0) {
      return []
    } else if (n == 1) {
      return [signature[0]];
    } else if (n == 2) {
      return [signature[0],signature[1]];
    } else {
      let newArr = [signature[0],signature[1],signature[2]];
      for (let i=0;i<=`${n - 4}`;i++) {
        let c = newArr[newArr.length - 1];
        let b = newArr[newArr.length - 2];
        let a = newArr[newArr.length - 3];
        newArr.push(a + b + c);
      }
      return newArr;
    }
  }