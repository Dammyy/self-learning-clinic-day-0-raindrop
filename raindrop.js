"use strict"
let primeNumber = require("./prime.js");
 module.exports = {

 raindrop: (number) => {
    let strng = "";
	const three =  "Pling";
	const five  = "Plang";
	const seven = "Plong";
	 
	if(!number) {
		return "please enter a number";
	}
	else if(typeof(number) !='number') {
		return "undefined";
	}
	else if(number < 1) {
		return "invalid input";
	}
	else {

	for(let i = 2; i < number; i++) {
	
		let prime = primeNumber.getPrimeNumber(i);
		
		if(number % prime === 0 && prime == 3) {
			strng += three;
		}
		else if(number % prime === 0 && prime == 5) {
			strng += five
		}
		else if(number % prime === 0 && prime == 7) {
			strng += seven;
		}
	}

	if(!strng) {
		return number;
	}

	return strng;
}
}
}

