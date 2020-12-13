function getAverage(marks){
    let total = 0;
    marks.forEach(x => total += x)
    return Math.floor(total/marks.length);
  };