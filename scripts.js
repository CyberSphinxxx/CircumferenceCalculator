document.getElementById('submit_button').onclick = function() {
    let radius = document.getElementById('number_input_box').value;
    let pi = 3.14159;
    
    if (radius > 0) {
        let circumference = 2 * pi * radius;
        document.getElementById('answer').textContent = 'Circumference: ' + circumference;
    }
    
    else {
        document.getElementById('answer').textContent = 'Please enter a valid radius';
    }
};