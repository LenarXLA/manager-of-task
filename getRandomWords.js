let elem = document.querySelector('#elem');
let but = document.querySelector('#button');

let arrAlph = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 
            'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 
            'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 
            'щ','ъ', 'ы', 'ь', 'э', 'ю', 'я'];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

let str = ' ';
but.addEventListener('click', function() {
    for(let num = 0; num <= 8; num++) {
        let el = arrAlph[getRandomIntInclusive(0, 32)];
        str += el;
    }
    elem.value = str;
});