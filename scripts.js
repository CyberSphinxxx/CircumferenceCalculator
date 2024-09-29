document.getElementById('submit_button').onclick = function() {
    let radius = parseFloat(document.getElementById('number_input_box').value);
    let pi = 3.14159;
    let selectedCalculator = document.getElementById('calculator_selector').value;

    if (radius > 0) {
        if (selectedCalculator === 'circumference') {
            let circumference = 2 * pi * radius;
            document.getElementById('answer').textContent = 'Circumference: ' + circumference.toFixed(2);
        }
        
        else if (selectedCalculator === 'area') {
            let area = pi * radius * radius;
            document.getElementById('answer').textContent = 'Area: ' + area.toFixed(2);
        }
    }
    
    else {
        document.getElementById('answer').textContent = 'Please enter a valid radius';
    }
};

document.getElementById('calculator_selector').addEventListener('change', function() {
    let selectedCalculator = this.value;
    let inputBox = document.getElementById('number_input_box');
    
    if (selectedCalculator === 'circumference') {
        inputBox.placeholder = 'Enter radius for circumference';
    } else if (selectedCalculator === 'area') {
        inputBox.placeholder = 'Enter radius for area';
    }
});

document.getElementById('reset_button').onclick = function() {
    document.getElementById('number_input_box').value = '';
    document.getElementById('answer').textContent = '';
    document.getElementById('calculator_selector').selectedIndex = 0;
};
