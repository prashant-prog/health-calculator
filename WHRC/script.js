function calculateRatio() {
    const waist = parseFloat(document.getElementById('waist').value);
    const height = parseFloat(document.getElementById('height').value);

    // Calculate the waist-to-height ratio
    const ratio = (waist / height).toFixed(2);

    // Determine health risk based on the ratio
    let healthRisk = "";
    if (ratio < 0.35) {
        healthRisk = "Low risk";
    } else if (ratio >= 0.35 && ratio < 0.49) {
        healthRisk = "Moderate risk";
    } else {
        healthRisk = "High risk";
    }

    // Display the result
    document.getElementById('result').innerHTML = `
        <h2>Your Waist-to-Height Ratio:</h2>
        <p>${ratio}</p>
        <h3>Health Risk Level: ${healthRisk}</h3>
    `;
}
