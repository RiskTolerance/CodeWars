function ipsBetween(start, end){
    start = start.split(".").reverse();
    end = end.split(".").reverse();
    let calculate = (number, place) => {
      let multiplier = Math.pow(256, place);
      return (number * multiplier);
    }
    let bigNum = calculate(end[0], 0) + calculate(end[1], 1) + calculate(end[2], 2) + calculate(end[3], 3);
    let smolNum = calculate(start[0], 0) + calculate(start[1], 1) + calculate(start[2], 2) + calculate(start[3], 3);
    return bigNum - smolNum;
  };