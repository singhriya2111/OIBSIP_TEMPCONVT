function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const resultElement = document.getElementById('result');
    let result;

    if (isNaN(temperature)) {
        resultElement.textContent = 'Please enter a valid number';
        resultElement.classList.add('show');
        return;
    }

    if (fromUnit === toUnit) {
        result = temperature;
    } else if (fromUnit === 'celsius') {
        if (toUnit === 'fahrenheit') {
            result = (temperature * 9/5) + 32;
        } else if (toUnit === 'kelvin') {
            result = temperature + 273.15;
        }
    } else if (fromUnit === 'fahrenheit') {
        if (toUnit === 'celsius') {
            result = (temperature - 32) * 5/9;
        } else if (toUnit === 'kelvin') {
            result = (temperature - 32) * 5/9 + 273.15;
        }
    } else if (fromUnit === 'kelvin') {
        if (toUnit === 'celsius') {
            result = temperature - 273.15;
        } else if (toUnit === 'fahrenheit') {
            result = (temperature - 273.15) * 9/5 + 32;
        }
    }

    resultElement.textContent = `${temperature} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
    resultElement.classList.add('show');
}