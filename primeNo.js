let data = 51;

function primeOrNot(data) {
	for (var i = 2; i < data ; i ++){
		if (data %= i) {
			console.log("The number is a prime");
			return;
		}
			console.log("Number is not prime");
	}
}

primeOrNot(data);