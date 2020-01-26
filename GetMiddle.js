let s = 'AODJhbgksdjbgkdjs';

function getMiddle(s) {
    let m = s.length/2;
    if (s.length % 2 === 0) { 
      return s.slice(m-1, m+1);
    } else { 
      return s.slice(m, m+1); //could be string.charAt(middleIndex);
    }
  }

getMiddle();