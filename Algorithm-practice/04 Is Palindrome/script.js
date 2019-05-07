function isPalindrome(word) {
	var rword = ""; // container for the end result of the reversed word
	var tempWordArr = []; // Array container to temporarily hold each letter of the supplied word during word iteration

	for(var i = 0; i<word.length; i++) { // word iteration
		tempWordArr = [...tempWordArr, word[i]]; // push each letter into tempWordArr
	}

	for(var i = 0; i<word.length; i++) {  // word iteration
		rword += tempWordArr.pop(); // pop and add each tempWordArr letter to rword
	}

	if(word === rword) console.log(word + ' is a Palindrome'); // word is Palindrome
	else console.log(word + ' is not Palindrome'); // word is not Palindrome
}

isPalindrome("racecar"); // invoke method