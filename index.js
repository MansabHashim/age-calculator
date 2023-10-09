const dayval = document.getElementById("dayval");
const monthval = document.getElementById("monthval");
const yearval = document.getElementById("yearval");

const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");


console.log(myForm)
myForm.onsubmit = (e)=>{
    e.preventDefault();
    // console.log(day.value, month.value,  year.value);

    const totalDays = parseInt(day.value);
const totalDays2 = parseInt(month.value*30.5);
const totalDays3 = parseInt((2023-year.value) * 365);

const allDays = (parseInt(totalDays + totalDays2 + totalDays3));





// console.log(totalDays);

//     console.log(month.value*30);
// console.log((2023-year.value) * 365);
//     console.log(totalDays);



dayval.innerText = allDays;
monthval.innerText = Math.round(allDays/30.5);
yearval.innerText = Math.round(allDays/365);
}

