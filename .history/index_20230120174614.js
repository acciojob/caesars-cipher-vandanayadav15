const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M'
};


function rot13(str) {
  var alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', " ", "-", "_", ".", "&", "?", "!", "@", "#", "/"];
  var alphabets13 = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', " ", "-", "_", ".", "&", "?", "!", "@", "#", "/"]; var resultStr = []; for (let i = 0; i < str.length; i++){ for (let j = 0; j < alphabets.length; j++){ if (str[i] === alphabets[j]) { resultStr.push(alphabets13[j]); } } } return resultStr.join("");
};

function rot13(str) { var alphabets =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", "-", "_", ".", "&","?", "!", "@", "#", "/"]; var alphabets13 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M', " ", "-", "_", ".", "&","?", "!", "@", "#", "/"]; var resultStr = []; for(let i=0; i<str.length; i++){ for(let j =0; j<alphabets.length; j++){ if(str[i] === alphabets[j]){ resultStr.push(alphabets13[j]); } } } return resultStr.join(""); };


// function rot13(encodedStr){
//   const codeArr = encodedStr.split("");  // String to Array
//   let decodedArr = ""; // Your Result goes here
//    for (var i = 0; i < encodedStr.length; i++) {
//      var temp = encodedStr.charAt(i);
//     //  console.log(temp)
//      if (temp !== " " || temp !== "!" || temp !== "?") {
//       //  console.log("hi")
//        decodedArr += String.fromCharCode(13 + encodedStr.charCodeAt(temp));
//      } else {
//        decodedArr += temp;
//      }
//    }
// //  console.log(decodedArr);
//    return decodedArr;
  
  // Only change code below this line
  // your code here
  // Only change code above this line
  // return decodedArr.join(""); // Array to String
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(rot13("SERR YBIR? NPPVBWBO"));

// module.exports = rot13;

