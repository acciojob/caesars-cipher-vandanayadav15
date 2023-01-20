const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M'
};

function rot13(encodedStr) {
  const codeArr = encodedStr.split("").map(b => {
    var num = 0;
    if (b.search(/[^a-zA-Z\d\s:]/g)) {
          
      return String.fromCharCode((b.charCodeAt() - 65 + 13) % 26 + 65);
    } else {
      return b;
    }
  }
  ).join("");

}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line
console.log(rot13("SERR YBIR? NPPVBWBO"));

module.exports = rot13;
