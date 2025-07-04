// healthScore.js

// healthScore.js

/**
 * Updates the display of the health score widget based on the given score.
 * This function dynamically changes the circle's background color,
 * the textual status (Excellent, Good, Poor), and the accompanying icon.
 *
 * It relies on the following global DOM element variables to be defined and assigned
 * in another script (e.g., script.js) before this function is called:
 * - healthScoreCircle (HTML div for the circular background)
 * - healthScoreValue (HTML span for the numeric score)
 * - healthScoreStatus (HTML span for the status text like 'Excellent')
 * - healthScoreCheck (HTML i tag for the Bootstrap icon)
 *
 * @param {number} score The health score value (e.g., 87, 75, 45).
 */
function updateHealthScore(score) {
    // Perform null checks to ensure DOM elements are available before attempting to manipulate them.
    // If any element is null, log an error and exit the function.
    if (!healthScoreValue || !healthScoreCircle || !healthScoreStatus || !healthScoreCheck) {
        console.error('Health score elements not found. Cannot update health score display. Ensure they are correctly initialized in initializeDOMElements() in script.js and that healthScore.js is loaded BEFORE script.js in index.html.');
        return; // Exit if elements are missing
    }

    // Set the numeric value of the health score in the designated span.
    healthScoreValue.textContent = score;

    // --- Reset all existing dynamic classes before applying new ones ---
    // This prevents residual styles from previous score updates.
    healthScoreCircle.classList.remove('health-score-green-gradient', 'health-score-yellow-gradient', 'health-score-red-gradient');
    healthScoreStatus.classList.remove('text-success', 'text-warning', 'text-danger');
    // Also remove existing icon classes and text colors.
    healthScoreCheck.classList.remove('bi-check-circle-fill', 'bi-exclamation-triangle-fill', 'bi-x-circle-fill', 'text-success', 'text-warning', 'text-danger');


    // --- Apply styles and text based on the score range ---
    if (score >= 70) {
        // Score is Healthy (70-100)
        healthScoreCircle.classList.add('health-score-green-gradient'); // Apply green gradient
        healthScoreStatus.textContent = 'Healthy'; // Set status text
        healthScoreStatus.classList.add('text-success'); // Apply Bootstrap success text color
        healthScoreCheck.classList.add('bi-check-circle-fill', 'text-success'); // Apply green checkmark icon
        healthScoreCheck.style.display = 'inline-block'; // Ensure the icon is visible
    } else if (score >= 40) {
        // Score is At Risk (40-69)
        healthScoreCircle.classList.add('health-score-yellow-gradient'); // Apply yellow gradient
        healthScoreStatus.textContent = 'At Risk'; // Set status text
        healthScoreStatus.classList.add('text-warning'); // Apply Bootstrap warning text color
        healthScoreCheck.classList.add('bi-exclamation-triangle-fill', 'text-warning'); // Apply yellow warning icon
        healthScoreCheck.style.display = 'inline-block'; // Ensure the icon is visible
    } else {
        // Score is Critical (< 40)
        healthScoreCircle.classList.add('health-score-red-gradient'); // Apply red gradient
        healthScoreStatus.textContent = 'Critical'; // Set status text
        healthScoreStatus.classList.add('text-danger'); // Apply Bootstrap danger text color
        healthScoreCheck.classList.add('bi-x-circle-fill', 'text-danger'); // Apply red 'x' icon
        healthScoreCheck.style.display = 'inline-block'; // Ensure the icon is visible
    }
}