function swapWithoutThird (a,b) {
  var a = 34;
  var b = 56;
  console.log("Before Swapping");
  console.log("The value of a and b :", a, b);
  a = a + b;
  b = a - b;
  a = a - b;
  console.log("After Swapping");
  console.log("The value of a and b :", a, b);	
}

swapWithoutThird (a,b);
