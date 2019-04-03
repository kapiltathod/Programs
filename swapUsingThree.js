var a = 23;
var b = 54;
// defining function
function swap (a,b) {
  var temp;
  console.log("Before swapping");
  console.log("The value of a and b:", a,b);
  temp = a;
  a = b;
  b = temp;
  console.log("After swapping");
  console.log("The value of a and b:", a,b);
}

swap(a,b);
