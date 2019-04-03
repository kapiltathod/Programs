function freqOfSmallest(array, n) {
  let minEle = array[0];
  const n = array.length;
  let freq;
  for (let i = 1; i < n; i++) {
    if (array[i] < minEle) {
      minEle = array[i];
      freq = 1;
    } else if (minEle == array[i]) {
      freq++;
    }
  }
  return freq;
}

console.log(freqOfSmallest([2,3,4,67,8,3,2,2,9], n));

function freqOfSmallest1(array) {
  let frequency = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[1] === array[i]) {
      return frequency++;
    }
  }
}

console.log([2,3,4,67,2,2,2,2,9]);


