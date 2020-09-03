// Дан инпут. В него вводится дата в формате 31.12.2016. 
// По потери фокуса узнайте день недели (словом),
//  который приходится на эту дату.

/* 
<input type="text" name="" id="elem"> 
*/

let elem = document.querySelector('#elem');
elem.addEventListener('blur', function() {
    let arr = this.value.split('.');
    let time = new Date(arr[2], arr[1] - 1, arr[0]);
    let week = ['Воскр', 'Пон', 'Вт', 'Ср', 'Чт', 'Пт', 'Субб'];
    this.value = week[time.getDay()];
});