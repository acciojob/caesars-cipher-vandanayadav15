const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M'
};

function rot13(encodedStr){
  const codeArr = encodedStr.split("");  // String to Array
  let decodedArr = []; // Your Result goes here
  for (i = 0; i < encodedStr.length; i++) {
    var newArr = abc.indexOf(str[i]) + 13;
    if (abc.indexOf(encodedStr[i]) == -1) {
      decodedArr.push(str[i]);
    } else {
      decodedArr.push(abc[newArr]);
    }
  }
  // Only change code below this line
  // your code here
  // Only change code above this line
  return decodedArr.join(""); // Array to String
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

module.exports = rot13;

