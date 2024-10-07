function calculateBMR() {
    const gender = document.getElementById("gender").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const age = parseInt(document.getElementById("age").value);
    const activity = parseFloat(document.getElementById("activity").value);

    let bmr;

    if (gender === "male") {
        // BMR formula for men
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === "female") {
        // BMR formula for women
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Calculate total daily calorie needs based on activity level
    const dailyCalories = bmr * activity;

    // Display the result
    document.getElementById("result").innerHTML = `
        <p>Your BMR is: <strong>${bmr.toFixed(2)} kcal/day</strong></p>
        <p>To maintain your current weight, you need: <strong>${dailyCalories.toFixed(2)} kcal/day</strong></p>
    `;
}
