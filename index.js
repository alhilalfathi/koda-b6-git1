import { celciusToFahrenheit, celciusToKelvin, celciusToReamur } from "./suhu.js";

const celcius = 30;
const fahrenheit = celciusToFahrenheit(celcius);
const kelvin = celciusToKelvin(celcius);
const reamur = celciusToReamur(celcius);

console.log(`Suhu celcius: ${celcius} menjadi ${fahrenheit} Fahrenheit`);
console.log(`Suhu celcius: ${celcius} menjadi ${kelvin} Kelvin`);
console.log(`Suhu celcius: ${celcius} menjadi ${reamur} Reamur`);