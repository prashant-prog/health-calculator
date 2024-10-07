function calculateCalories() {
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const activityLevel = parseFloat(document.getElementById('activity').value);

    let bmr;

    if (gender === "male") {
        bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else if (gender === "female") {
        bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }

    const calorieIntake = bmr * activityLevel;

    document.getElementById('result').innerHTML = `
        <h2>Your Daily Calorie Intake:</h2>
        <p>${calorieIntake.toFixed(2)} calories/day</p>
    `;
}
