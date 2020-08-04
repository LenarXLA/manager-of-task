function pairElement(str) {
  let arr = [];
  let newArr = [];
  arr = str.split('');
  for (let elem of arr) {
    switch (elem) {
      case 'A':
        newArr.push([elem, 'T']);
        break;
      case 'T':
        newArr.push([elem, 'A']);
        break;
      case 'G':
        newArr.push([elem, 'C']);
        break;
      case 'C':
        newArr.push([elem, 'G']);
        break;
    }
  }
  return newArr;
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
