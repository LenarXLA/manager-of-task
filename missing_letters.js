function fearNotLetter(str) {
  let arr = str.split('');

  let start = arr[0];
  let end = arr[arr.length - 1];
  let startInd = 0;
  let endInd = 0;

  let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  for (let i = 0; i < alphabet.length; i++) {
    if (start == alphabet[i]) {
      startInd = i;
    }
    if (end == alphabet[i]) {
      endInd = i + 1;
    }
  }
  let alphStr = alphabet.slice(startInd, endInd);
  let result = getDiff(alphStr, arr);
  if (result == "") {
    result = undefined;
  }
//---compare arrays---
 function getDiff(arr1, arr2) {
  let diff1 = getFirstDiff(arr1, arr2);
  let diff2 = getFirstDiff(arr2, arr1);
  return [].concat( diff1, diff2 ).join("");
 }

 function getFirstDiff(arr1, arr2) {
	let res = [];
	for (let elem of arr1) {
		if (!inArray(elem, arr2)) {
			res.push(elem);
		 }
	 }
	 return res;
 }

 function inArray(elem, arr) { 
  return arr.indexOf(elem) !== -1;
 }

  return result;
}

console.log(fearNotLetter("abcde"));
