let arr = [];
function func(prevPrevNum, prevNum) {
	
	let fibon = prevPrevNum + prevNum;
	
	arr.push(fibon);
	if (arr.length < 10) {
	func(prevNum, fibon);
	}
	return arr;
}

console.log(func(1, 2)); // вызываем функцию с первыми двумя числами