function nextId(ids){
    ids.sort(function(a, b){return a - b});
    for (let i = 0; i < ids.length; i++) {
      if (ids[0] != 0) {
        return 0;
      } else if (ids[i] - ids[i+1] < -1) {
        return ids[i] + 1;
      };
    };
    return ids[ids.length-1]+1;
  }