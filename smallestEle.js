const array = [11, 3, 5, 6, 7, 8, 76];

function smallestEle (array) {
  let smallest = Number.MAX_SAFE_INTEGER;
	if (array.length < 2) {
  	console.log(" Invalid Input ");
    return;
	}

	for (let i = 0; i < array.length; i++) {
		if ( array[i] < smallest) {
			smallest = array[i];
		}

	}
	console.log(smallest);
}

smallestEle(array);
