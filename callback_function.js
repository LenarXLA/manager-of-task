'use strict';

function each(arr, callback) {
	let result = [];
	
	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк
	}
	
	return result;
}

function reverseStr (str) {
	return str.split("").reverse().join("");
}

function uppreCaseOne (str) {
	let arr = str.split('');
	arr.splice(0, 1, arr[0].toUpperCase());
	return arr.join('');
}
console.log(each(['leo','komputer', 'google'], uppreCaseOne))



