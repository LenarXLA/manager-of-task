'use strict';

function getGreates (arr) {
	let val = 0;
	for (let elem of arr) {
		if (elem > val) {
			val = elem;
		}
	}
	return val;
}

function isPerfect (num1, num2) {
	if (getGreates (getDivisor (num1, num2)) == 1) {
		return "is perfect numbers";
	} else {
		return "is not perfect numbers";
	}
}

function getDivisor (num1, num2) {
	let arr = [1];
	let num = 0;
	if(num1 < num2) {
		num = num1;
	} else {
		num = num2;
	}

	for (let i = 2; i <= num; i++) {
		if (num1 % i == 0 & num2 % i == 0) {
			arr.push(i);
		}
	}
	return arr;
}

console.log(isPerfect (5, 7));