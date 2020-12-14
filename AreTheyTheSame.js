function comp(array1, array2){
    if (array1 === null || array2 === null){
      return false;
    };
    let compare = (a, b) => {
      return a - b;
    }
    //square the elemenst of the first array
    let squaredArray = [];
    array1.forEach((e) => {
      squaredArray.push(e*e);
    })
    //sort the arrays
    squaredArray = squaredArray.sort(compare);
    let sortedArray = array2.sort(compare);
    //compare the arrays
    for (let i = 0; i <= array2.length; i++) {
      if (squaredArray[i] !== sortedArray[i]){
        return false;
      } 
    }
    return true;
  }

//Optimal solution
//
function comp(array1, array2) {
    if(array1 == null || array2 == null) return false;
    //I should have put the compare function inside the sort
    //I didn't need to define new variables for the sorted arrays
    array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
    //learn more about .every 
    return array1.map(v => v * v).every((v, i) => v == array2[i]);
  }