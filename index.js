const celciusE1 = document.getElementById("Celcius");
const fahrenheitE1 = document.getElementById("Fahrenheit");
const kelvinE1 = document.getElementById("Kelvin");

function computeTemp() {
    const currentValue = +event.target.value;


    switch (event.target.name) {
        case "Celcius":
            kelvinE1.value = currentValue + 273.15
            fahrenheitE1.value = currentValue * 1.8 + 32
            break;
        
        case "Fahrenheit":
            celciusE1.value = (currentValue -32) / 1.8
            kelvinE1.value = (currentValue - 32) /1.8 + 273.15
            break;

        case "Kelvin":
            celciusE1.value = currentValue - 273.15
            fahrenheitE1.value = (currentValue - 273.15) * 1.8 + 32
            break;
        default:
            break;
    }
}