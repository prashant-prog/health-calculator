function calculateWHR() {
    const waist = parseFloat(document.getElementById('waist').value);
    const hip = parseFloat(document.getElementById('hip').value);
    
    if (!waist || !hip || hip === 0) {
        document.getElementById('result').innerText = 'Please enter valid waist and hip measurements.';
        return;
    }
    
    const whr = (waist / hip).toFixed(2);
    
    let resultText = `Your Waist-to-Hip Ratio (WHR) is: ${whr}. `;
    
    if (whr < 0.85) {
        resultText += "You are in the healthy range.";
    } else if (whr >= 0.85 && whr < 0.95) {
        resultText += "You are in the moderate risk range.";
    } else {
        resultText += "You are in the high risk range.";
    }
    
    document.getElementById('result').innerText = resultText;
}
