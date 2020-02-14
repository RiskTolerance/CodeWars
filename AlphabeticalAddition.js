//This was tough! I'm sure I went about it the worng way, but I'm happy I solved it without defining each letter of the alphabet as a number. 
//link to kata: 

function addLetters(...char) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let total = 0;
    for (let it = 0;it < char.length;it++) {
    total = total + (alphabet.indexOf(alphabet.find(ele => ele === char[it]))+1);
    }
    if (total%26 > 0){return alphabet[total%26 - 1]} else {return 'z'}
  }


//best answer from Codewars... went about it in a far better way.
//   var alphabet = 'abcdefghijklmnopqrstuvwxyz';
// function addLetters(...letters) {
//   var sum = 25;
//   for (var letter of letters) // <-- the hell is this?
//     sum += alphabet.indexOf(letter) + 1;
//   return alphabet[sum % 26];  
// }

