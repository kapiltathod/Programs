function checkForLeap (year) {
  if ((year % 400 === 0 ) || year % 100 !== 0 && year % 4 === 0) {
    console.log("The year is a leap year");
  }	else {
    console.log("The year is a non leap year")
  }
}


// check number is divisible by 100 or not


checkForLeap (1900);