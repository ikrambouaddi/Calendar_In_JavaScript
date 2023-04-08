const currData = document.querySelector('.curr-Date'),
daysTag = document.querySelector('.days'),
prevIconsNext = document.querySelectorAll('.icons span');


let date = new Date(),
currYear = date.getFullYear(),
curMouth = date.getMonth();

console.log(date)
const mouth = ['january', 'February','march','April','May','June','July',
