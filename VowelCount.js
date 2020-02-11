//kata link
//https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
    let v = str.match(/[aeiou]/ig);
    if(v === null){return 0} else {return v.length};
  }

  //I should learn Regex OuO

  //this solution is great for deaking with null returns!!

  // function getCount(str) {
  //   return (str.match(/[aeiou]/ig)||[]).length;
  // }