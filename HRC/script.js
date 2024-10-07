function calculateHeartRate() {
    const age = parseInt(document.getElementById('age').value);
    const restingHeartRate = parseInt(document.getElementById('restingHeartRate').value);
    const activityLevel = parseFloat(document.getElementById('activityLevel').value);

    // Calculate maximum heart rate
    const maxHeartRate = 220 - age;

    // Calculate target heart rate range
    const targetHeartRateLow = Math.round(((maxHeartRate - restingHeartRate) * 0.6) + restingHeartRate);
    const targetHeartRateHigh = Math.round(((maxHeartRate - restingHeartRate) * 0.8) + restingHeartRate);

    // Calculate adjusted target heart rate based on activity level
    const adjustedTargetLow = Math.round(targetHeartRateLow * activityLevel);
    const adjustedTargetHigh = Math.round(targetHeartRateHigh * activityLevel);

    // Display the result
    document.getElementById('result').innerHTML = `
        <h2>Your Target Heart Rate:</h2>
        <p>Low End: ${adjustedTargetLow} bpm</p>
        <p>High End: ${adjustedTargetHigh} bpm</p>
    `;
}
