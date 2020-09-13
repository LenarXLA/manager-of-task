let elem = document.querySelector('#elem');
let inp = document.querySelector('#inp');

inp.addEventListener('keyup', function() {
    elem.innerHTML = (Number(inp.value) - 32) * 5/9 + ' C';
});