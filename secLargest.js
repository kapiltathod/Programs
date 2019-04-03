const array = [2,3,40,78,55,10];

// writing function for finding second largest number
function secLargest (array) {
  let first = 0;
  let second = 0;

  if (array.length < 2) {
    console.log(" Invalid Input ");
    return;
  }

  for (let i = 0; i < array.length; i++) {
    if(array[i] > first){
      second = first;
      first = array[i];
    } else if (second < array[i] && second != first) {
      second = array [i];
    }
  }
  return second;
}

console.log(secLargest(array));




