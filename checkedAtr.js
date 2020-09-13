let elem = document.querySelector('a');
let but = document.querySelector('#chbx');

elem.addEventListener('click', function() {
    if (!but.hasAttribute('checked')) {
        but.setAttribute('checked', 'checked');
    } else {
        but.removeAttribute('checked', 'checked');
    }
    
});