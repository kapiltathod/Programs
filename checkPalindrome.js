function checkPalindrome (string) {
  var string = "naman";
  var start = 0;
  var end = string.length-1;
  var temp = 0;
  while (end > start){
    if (string[start ++] == string[end --]) {
    } else {
      console.log("String is not a Palindrome");
      temp = 1;
    }
  }

  if (temp === 0){
    console.log("String is a Palindrome");
  }
}

function checkPalindrome (data) {
  var start = 0;
  var end = data.length-1;
  while (end > start){
    if (data[start ++] !== data[end --]) {
      console.log("String is not a Palindrome");
      return;
    }
  }
  console.log("String is a Palindrome");
}

checkPalindrome("gamma");
function checkPalindrome (string) {
  outer: {
    let start = 0;
    let end = string.length-1;
    while (end > start){
      if (string[start ++] !== string[end --]) {
        console.log("String is not a Palindrome");
        break outer;
      }
    }
    console.log("String is a Palindrome");
  }
}

function isPalindrome (dataString) {
  return dataString === dataString.reverse()
}

checkPalindrome ("string");
