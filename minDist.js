/*function minDistance(array, n, x, y) {
  const n = array.length;
  let i, j;
  let min_dist = Number.MAX_SAFE_INTEGER;
  for (i = 0; i < n; i++) {
    for ( j = i + 1; j < n; j++) {
      if ((x == array[i] && y == array[j] || y == array[i] && x == array[j]) && min_dist > Math.abs(i - j)) {
        min_dist = Math.abs(i-j);
      }
    }
  }
  console.log(min_dist);
}

minDist([3, 5, 6, 2, 4, 5, 6, 6, 5, 4, 8, 3], n, 3, 6);*/

class minimumDistance {
  constructor(data, firstElement, secondElement) {
    this.array = data;
    this.input1 = firstElement;
    this.input2 = secondElement;
  }

  run() {
    let i, j;
    let minDist = Number.MAX_SAFE_INTEGER;
    for (i = 0; i < n; i++) {
      for ( j = i + 1; j < n; j++) {
        if ((this.input1 == this.array[i] && this.input2 == this.array[j] || this.input2 == this.array[i] && this.input1 == this.array[j]) && minDist > Math.abs(i - j)) {
          minDist = Math.abs(i-j);
        }
      }
    }
    return (minDist);
  }
}

const leastDistance = new minimumDistance([3, 5, 6, 2, 4, 5, 6, 6, 5, 4, 8, 3], 3, 6);
console.log(leastDistance);