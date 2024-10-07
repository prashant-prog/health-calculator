function calculateLBM() {
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const bodyFatPercentage = parseFloat(document.getElementById('bodyFatPercentage').value);

    let lbm;

    // Calculate Lean Body Mass (LBM)
    if (gender === "male") {
        lbm = weight * (1 - (bodyFatPercentage / 100));
    } else if (gender === "female") {
        lbm = weight * (1 - (bodyFatPercentage / 100));
    }

    // Display the result
    document.getElementById('result').innerHTML = `
        <h2>Your Lean Body Mass (LBM):</h2>
        <p>${lbm.toFixed(2)} kg</p>
    `;
}
