import { celciusToFahrenheit, celciusToKelvin, celciusToReamur } from "./suhu.js";

console.log("Masukkan suhu dalam Celcius:");
export function inputHandler(){
    process.stdin.on("data", (data) => {
    const input = data.toString().trim();
    // console.log(typeof input);
    const celcius = Number(input);

    // console.log(typeof celcius);
    if(isNaN(celcius)){
        const err = new Error("Input harus berupa number");
        throw err;
    }
        
    // try {
        console.log(`Suhu yang akan dikonversi ${celcius} Celcius`);
        const fahrenheit = celciusToFahrenheit(celcius);
        console.log(`Suhu dalam Fahrenheit = ${fahrenheit}`);
        const kelvin = celciusToKelvin(celcius);
        console.log(`Suhu dalam Kelvin = ${kelvin}`);
        const reamur = celciusToReamur(celcius);
        console.log(`Suhu dalam Reamur = ${reamur}`);
        
    // } catch (err) {
    //     console.log(err);
    //     inputHandler();
    // }

    process.stdin.pause();
});
}

