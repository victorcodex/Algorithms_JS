function fizzBuzz(num) {
	for(var i = 1; i<num; i++) { // iterate over each number starting from 1 to num
		if(i % 15 === 0) console.log('FizzBuzz'); // number is divisible by 3 and 5 ----- 3 * 5 = 15
		else if(i % 3 === 0) console.log('Fizz'); // number is divisible by 3 and 5
		else if(i % 5 === 0) console.log('Buzz'); // number is divisible by 3 and 5
		else console.log(i); // number is not divisible by neither 3 nor 5
	}
}

fizzBuzz(20); // invoke method