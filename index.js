let isDOBOpen = false;
let dateOfBirth;
const settingCog = document.getElementById("settingIcon");
const settingContent = document.getElementById("settingContent");
const initial = document.getElementById("initial");
const after = document.getElementById("after");
const dobButton = document.getElementById("dobButton");
const dobInput = document.getElementById("dobInput");

const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const makeTwoDigitNumber = (number) => {
    return number > 9 ? number : `0${number}`;
};

const toggleDobSelector = () => {
    if (isDOBOpen){
        settingContent.classList.add("hide");
    } else{
        settingContent.classList.remove("hide");
    }
    isDOBOpen = !isDOBOpen;

    };
    const updateAge =() => {
        const currentDate = new Date();
        const dateDiff = currentDate-dateOfBirth;
        const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
        const month = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365)) %12;
        const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24 )) % 30;
        const hour = Math.floor(dateDiff / (1000 * 60 * 60 )) % 24;
        const minute = Math.floor(dateDiff / (1000 * 60 )) % 60;
        const second = Math.floor(dateDiff / (1000 )) % 60;
        
        yearEl.innerHTML = makeTwoDigitNumber(year);
        monthEl.innerHTML = makeTwoDigitNumber(month);
        dayEl.innerHTML = makeTwoDigitNumber(day);
        hourEl.innerHTML = makeTwoDigitNumber(hour);
        minuteEl.innerHTML = makeTwoDigitNumber(minute);
        secondEl.innerHTML = makeTwoDigitNumber(second);

    };
    const localStorageGetter =() =>{
        const year = localStorage.getItem('year');
        const month = localStorage.getItem('month');
        const date = localStorage.getItem('date');
        const hour = localStorage.getItem('hour');
        const minute = localStorage.getItem('minute');
        const second = localStorage.getItem('second');
        if (year && month && date && hour && minute && second){
            dateOfBirth = new Date(year,month,date,hour,minute,second)
        }
        updateAge();
    };
    const contentToggler = () => {
        updateAge();
        if(dateOfBirth){
            initial.classList.add("hide");
            after.classList.remove("hide");
         
        }

        else{
            after.classList.add("hide");
            initial.classList.remove("hide");
        }
    };
    const setDob = () =>{
        const dateString = dobInput.value;
        dateOfBirth = dateString ? new Date(dateString) :null;
        if(dateOfBirth){
            localStorage.setItem("year",dateOfBirth.getFullYear());
            localStorage.setItem("month",dateOfBirth.getMonth());
            localStorage.setItem("date",dateOfBirth.getDate());
            localStorage.setItem("hour",dateOfBirth.getHours());
            localStorage.setItem("minute",dateOfBirth.getMinutes());
            localStorage.setItem("second",dateOfBirth.getSeconds());
        }
            contentToggler();
            setInterval(()=>updateAge(),1000)
        
    };
    localStorageGetter();
    
 settingCog.addEventListener('click',toggleDobSelector);
 dobButton.addEventListener('click',setDob);