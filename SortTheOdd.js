function sortArray(array) {
    if (array.length === 0) {
      return [];
    }
    let sortedArray = [...array];
    let oddArray = [];
    sortedArray.map(e => {
      if (e % 2 === 1) {
        oddArray.push(e);
      }
    })
    oddArray.sort((a, b) => a - b);
    let doThing = (e, i, a) => {
      if (e % 2 !== 0) {
        sortedArray.splice(i, 1, oddArray[0])
        oddArray.shift();
      };
    };
    array.forEach(doThing);
  
    return sortedArray;
  };

  //top answer:
  //jesus what is happening
  function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
  }