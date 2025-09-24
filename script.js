document.getElementById('calculate-btn').addEventListener('click', function() {
    // Get values from the input fields
    const input1 = parseFloat(document.getElementById('input1').value) || 0;
    const input2 = parseFloat(document.getElementById('input2').value) || 0;
    const input3 = parseFloat(document.getElementById('input3').value) || 0;

    // Perform the calculation
    const result = (input1 * 1) + (input2 * 2) + (input3 * 5);

    // Display the result
    document.getElementById('result').textContent = result;
});
