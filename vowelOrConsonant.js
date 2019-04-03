function vowelOrConsonant (p) {
  console.log("Enter an alphabet");
  console.log(alphabet);

  isLowerCase = (p == "a" || p == "e" || p == "i" || p == "o" || p == "u");
  isUpperCase = (p == "A" || p == "E" || p == "I" || p == "O" || p == "U");

  if (isLowerCase || isUpperCase) {
  	console.log("Alphabet is a vowel");
  	return;
  }
    console.log("Alphabet is not a vowel")
}

vowelOrConsonant(u);