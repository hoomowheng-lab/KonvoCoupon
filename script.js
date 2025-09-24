document.getElementById('calculate-btn').addEventListener('click', function() {
    // Get values from the input fields, defaulting to 0 if empty
    const inputRm1 = parseFloat(document.getElementById('input-rm1').value) || 0;
    const inputRm2 = parseFloat(document.getElementById('input-rm2').value) || 0;
    const inputRm5 = parseFloat(document.getElementById('input-rm5').value) || 0;

    // Perform the individual calculations
    const resultRm1 = inputRm1 * 1;
    const resultRm2 = inputRm2 * 2;
    const resultRm5 = inputRm5 * 5;

    // Sum up all the individual results for the grand total
    const grandTotal = resultRm1 + resultRm2 + resultRm5;

    // Display the results in the appropriate HTML elements
    document.getElementById('result-rm1').textContent = resultRm1.toFixed(2);
    document.getElementById('result-rm2').textContent = resultRm2.toFixed(2);
    document.getElementById('result-rm5').textContent = resultRm5.toFixed(2);
    document.getElementById('grand-total').textContent = grandTotal.toFixed(2);
});
