document.getElementById('calculate-btn').addEventListener('click', function() {
    // Get values from the input fields, defaulting to 0 if empty
    const inputRm5 = parseFloat(document.getElementById('input-rm5').value) || 0;
    const inputRm2 = parseFloat(document.getElementById('input-rm2').value) || 0;
    const inputRm1 = parseFloat(document.getElementById('input-rm1').value) || 0;

    // Perform the individual calculations
    const resultRm5 = inputRm5 * 5;
    const resultRm2 = inputRm2 * 2;
    const resultRm1 = inputRm1 * 1;

    // Sum up all the individual results for the grand total
    const grandTotal = resultRm5 + resultRm2 + resultRm1;

    // Display the results in the appropriate HTML elements, with two decimal places
    document.getElementById('result-rm5').textContent = resultRm5.toFixed(2);
    document.getElementById('result-rm2').textContent = resultRm2.toFixed(2);
    document.getElementById('result-rm1').textContent = resultRm1.toFixed(2);
    document.getElementById('grand-total').textContent = grandTotal.toFixed(2);
});
