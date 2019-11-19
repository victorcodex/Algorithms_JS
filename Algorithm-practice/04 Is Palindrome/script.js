function isPalindrome(word) {
	var rword = ""; // container for the end result of the reversed word
	
	for(var i = word.length - 1; i >= 0; i--) {  // word iteration
		rword += word[i];
	}

	if(word === rword) console.log(word + ' is a Palindrome'); // word is Palindrome
	else console.log(word + ' is not Palindrome'); // word is not Palindrome
}

isPalindrome("racecar"); // invoke method
