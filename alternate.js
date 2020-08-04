'use strict';

let result = alternate(
	['a', 'b', 'c', 'd', 'e'],
	function(elem) {
		return elem + '!';
	},
	function(elem) {
		return elem + '?';
	},
);

console.log(result); // выведет ['a!', 'b?', 'c!', 'd?', 'e!']

function alternate (arr, callback1, callback2) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		result.push(callback1(arr[i]));
		i++;
		if (i < arr.length) {
			result.push(callback2(arr[i]));
		}
		
	}
	return result;
}