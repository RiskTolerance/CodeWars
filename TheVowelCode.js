const vowels = ['a','e','i','o','u'];
const numbers = ['1','2','3','4','5']

function encode(string) {
  let encoded = '';
  for (let i = 0; i < string.length; i++){
    let currentCharacter = string.charAt(i);
    if (currentCharacter.match(/[aeiou]/gi)) {
    vowels.forEach(e => {
      if (e == currentCharacter) {
        encoded = encoded.concat(numbers[vowels.indexOf(e)]);
      } 
    });
    } else {
      encoded = encoded.concat(currentCharacter);
    }
  }
  return encoded;
}

function decode(string) {
  let decoded = '';
  for (let i = 0; i < string.length; i++){
    let currentCharacter = string.charAt(i);
    if (currentCharacter.match(/\d+/g)) {
      numbers.forEach(e => {
      if (e == currentCharacter) {
        decoded = decoded.concat(vowels[numbers.indexOf(e)]);
      } 
    });
    } else {
      decoded = decoded.concat(currentCharacter);
    }
  }
  return decoded;
}

// Top solution:
// And this is why I need to do these every day. I forgot replace exsists D:
// turn vowels into numbers
function encode(string){
    return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
  }
  
  //turn numbers back into vowels
  function decode(string){
    return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
  }