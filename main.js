const currData = document.querySelector('.curr-Date'),
daysTag = document.querySelector('.days'),
prevIconsNext = document.querySelectorAll('.icons span');


let date = new Date(),
currYear = date.getFullYear(),
curMouth = date.getMonth();

console.log(date)
const mouth = ['january', 'February','march','April','May','June','July',
'August', 'Semptember','October','November','December']


const renderCalender = () =>{ 
    console.log(curMouth)
    let firstDayOfMouth = new Date(currYear ,curMouth, 1).getDay(),
    lastDateOfMouth = new Date(currYear ,curMouth + 1 , 0).getDate(),
    lastDay= new Date(currYear ,curMouth,lastDateOfMouth).getDay(),
    lastDateOfLastMouth = new Date(currYear ,curMouth, 0).getDate();

    console.log('good1',firstDayOfMouth)

    let newDate = '';
        for(let i= firstDayOfMouth; i>0 ;i--){

        newDate += `<li class="inactive">${lastDateOfLastMouth - i +1}</li>`;
    }
    for (let i =1;i<=lastDateOfMouth;i++){
        let actilaDay = i === date.getDate() && curMouth === new Date().getMonth()

    }

}