document.addEventListener("DOMContentLoaded", function () {
    const calcButton = document.getElementById("calc");
    calcButton.addEventListener("click", calculateBMI);
});

function calculateBMI(event) {
    event.preventDefault();

    const ageInput = document.getElementById("age");
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");

    const age = parseFloat(ageInput.value);
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (isNaN(age) || isNaN(weight) || isNaN(height) || age <= 0 || weight <= 0 || height <= 0) {
        displayResult("Invalid input. Please enter valid age, weight, and height.");
        return;
    }

    const bmi = calculateBMIValue(weight, height);
    displayResult(`Your BMI is: ${bmi.toFixed(2)}`);
}

function calculateBMIValue(weight, height) {
    // BMI formula: weight (kg) / (height (m) * height (m))
    return weight / ((height / 100) * (height / 100));
}

function displayResult(result) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = result;
}
