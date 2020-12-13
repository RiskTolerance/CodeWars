multiplicationTable = function(size) {
    let table = [];
    let row = [];
    
    let initialRow = () => {
      for (i = 1; i <= size; i++) {
        row.push(i);
      }
      table.push(row);
      row = [];
    };
    
    let nextRow = (y) => {
      for (i = 0; i < size; i++) {
        row.push(table[0][i] * y)
      };
      table.push(row);
      row = [];
    };
    
    //create the initial row
    initialRow();
    //create a new row based on each element of the first row, aside from the first element
    table[0].forEach(x => {
      if (x === 1) {
        return
      } else {
        nextRow(x);
      }
    })
    //ship it and cry at the one line answers
    return table;
  }