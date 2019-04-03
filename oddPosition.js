data = [1,2,3,4,5,6,7];

function oddPosition () {

	for (let i = 0; i < data.length; i++) {
		if (i %2 ==1) {
			console.log(data[i]);
		}
	}
}

oddPosition();