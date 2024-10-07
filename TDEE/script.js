function calculateTDEE() {
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const activityLevel = parseFloat(document.getElementById('activity').value);

    let bmr;

    // Calculate BMR using the Harris-Benedict Equation
    if (gender === "male") {
        bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else if (gender === "female") {
        bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }

    // Calculate Total Daily Energy Expenditure (TDEE)
    const tdee = bmr * activityLevel;

    // Display the result
    document.getElementById('result').innerHTML = `
        <h2>Your Total Daily Energy Expenditure (TDEE):</h2>
        <p>${tdee.toFixed(2)} calories/day</p>
    `;
}
