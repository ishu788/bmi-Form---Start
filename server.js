const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'bmi.html'));
});

app.post('/calculate', (req, res) => {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        res.send('Invalid input. Please enter valid weight and height.');
        return;
    }

    const bmi = calculateBMI(weight, height);
    res.send(`Your BMI is: ${bmi.toFixed(2)}`);
});

function calculateBMI(weight, height) {
    return weight / (height * height);
}

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
