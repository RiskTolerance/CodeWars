function getGrade (s1, s2, s3) {
    let mean = ((s1+s2+s3)/3);
    let score = Math.round(mean);
    switch(true) {
    case score >= 90: return 'A';
      break;
    case score >= 80: return 'B';
      break;
    case score >= 70: return 'C';
      break;
    case score >= 60: return 'D';
      break;
    case score >= 0: return 'F';
      break;
    }
  }