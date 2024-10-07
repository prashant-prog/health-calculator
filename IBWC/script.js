function calculateIBW() {
    const gender = document.getElementById("gender").value;
    const heightCm = parseFloat(document.getElementById("height").value);

    if (!gender || isNaN(heightCm)) {
        document.getElementById("result").innerHTML = "Please fill in all fields correctly.";
        return;
    }

    // Convert height from cm to inches
    const heightInches = heightCm / 2.54;
    let ibw = 0;

    // Ideal body weight calculation using Devine formula
    if (gender === "male") {
        ibw = 50 + 2.3 * (heightInches - 60);
    } else if (gender === "female") {
        ibw = 45.5 + 2.3 * (heightInches - 60);
    }

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Your Ideal Body Weight: ${ibw.toFixed(2)} kg`;
}
