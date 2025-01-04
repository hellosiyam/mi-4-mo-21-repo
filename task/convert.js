function celsiusToFahrenheit(temperature) {
    const fahrenheit = temperature * 9/5 + 32;
    return fahrenheit;
}
const convert = celsiusToFahrenheit(24);
console.log(convert);
