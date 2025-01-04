function toFeet(inch) {
   const feet = inch / 12;
   return feet
}
// const feet = toFeet(68);
// console.log(feet);

function size(inInch) {
    const feetFraction = inInch / 12;
    const feet = parseInt(feetFraction);
    const inchFraction = inInch % 12;
    const inch = parseInt(inchFraction);
    const total = feet + " Feet " + inch + " Inch "
    return total;
}
const result = size(60);
console.log(result);



