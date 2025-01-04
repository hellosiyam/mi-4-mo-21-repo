// function leapYear(year) {
//    if (year % 100 !== 0 && year % 4 === 0) {
//     const leap = "This Year is leap Year " + year
//     return leap;
//    } 
//    else if(year % 400 === 0 && year % 100 === 0){
//     const leap = "This Year is leap Year " + year
//     return leap;
//    }
//    else{
//     const noLeap= "This is not leap Year " + year 
//     return noLeap
// }
// }
// const check = leapYear(2000);
// console.log(check);

function  leapYear(year) {
    if (year % 100 !==0 && year % 4 === 0) {
        return true;
    }
    else if(year % 400 === 0){
        return true;
    }
    else{
        return false
    }
}
const check = leapYear(2000);
console.log(check);
