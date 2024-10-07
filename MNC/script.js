function calculateMacros() {
    const calories = parseFloat(document.getElementById('calories').value);
    const proteinPercentage = parseFloat(document.getElementById('proteinPercentage').value);
    const fatPercentage = parseFloat(document.getElementById('fatPercentage').value);
    const carbsPercentage = parseFloat(document.getElementById('carbsPercentage').value);

    // Calculate grams for each macro nutrient
    const proteinGrams = (calories * (proteinPercentage / 100)) / 4;  // 4 calories per gram of protein
    const fatGrams = (calories * (fatPercentage / 100)) / 9;          // 9 calories per gram of fat
    const carbsGrams = (calories * (carbsPercentage / 100)) / 4;      // 4 calories per gram of carbohydrate

    // Display the result
    document.getElementById('result').innerHTML = `
        <h2>Your Macro Nutrients:</h2>
        <p>Protein: ${proteinGrams.toFixed(2)} g</p>
        <p>Fat: ${fatGrams.toFixed(2)} g</p>
        <p>Carbohydrates: ${carbsGrams.toFixed(2)} g</p>
    `;
}
