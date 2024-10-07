function calculateBodyFat() {
    const gender = document.getElementById("gender").value;
    const waist = parseFloat(document.getElementById("waist").value);
    const neck = parseFloat(document.getElementById("neck").value);
    const height = parseFloat(document.getElementById("height").value);
    let bodyFat = 0;

    if (gender === "male") {
        // Body fat percentage formula for males (US Navy Method)
        bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
    } else if (gender === "female") {
        const hips = parseFloat(document.getElementById("hips").value);
        // Body fat percentage formula for females (US Navy Method)
        bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(waist + hips - neck) + 0.22100 * Math.log10(height)) - 450;
    }

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Estimated Body Fat Percentage: ${bodyFat.toFixed(2)}%`;
}

document.getElementById("gender").addEventListener("change", function () {
    const gender = document.getElementById("gender").value;
    const femaleOnlySection = document.getElementById("female-only");

    if (gender === "female") {
        femaleOnlySection.style.display = "block";  // Show hips input for females
    } else {
        femaleOnlySection.style.display = "none";   // Hide hips input for males
    }
});
