https://www.codewars.com/kata/5a995c2aba1bb57f660001fd

//solution

function scrollingText(text){
    let newArr = [];
    for (let i = 0; i < text.length; i++) {
      newArr.push(text.substr(i,text.length).toUpperCase() + text.substr(0,i).toUpperCase());
    }
    return newArr;
  }