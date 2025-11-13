/**
 * Calculates the average time in days between two dates for a list of items.
 * @param {Array} data - An array of objects.
 * @param {string} dateField1 - The name of the property holding the start date (e.g., 'created_time' or 'invoice_date')
 * @param {string} dateField2 - The name of the property holding the end date (e.g., 'closing_date' or 'paid_date')
 * @returns {number} The average number of days, rounded to one decimal.
 */
function calculateAverageVelocity(data, dateField1, dateField2) {
    if (!data || data.length === 0) {
        return 0;
    }

    const oneDay = 24 * 60 * 60 * 1000; // Milliseconds in a day
    let totalDays = 0;

    data.forEach(item => {
        const createdDate = new Date(item[dateField1]); // Use dynamic field name
        const closingDate = new Date(item[dateField2]); // Use dynamic field name
        
        // Check for valid dates
        if (!isNaN(createdDate) && !isNaN(closingDate)) {
            const diffTime = Math.abs(closingDate - createdDate);
            const diffDays = diffTime / oneDay;
            totalDays += diffDays;
        }
    });

    return parseFloat((totalDays / data.length).toFixed(1));
}

/**
 * Animates text into an element word by word.
 * @param {HTMLElement} element - The DOM element (the <span>) to update.
 * @param {string} text - The full text to animate.
 */
function animateValue(element, text) {
    if (!element) return; // Add a check
    element.innerHTML = ''; // Use innerHTML
    const words = text.split(' '); // Split "27.1 Days" into ["27.1", "Days"]
    let index = 0;

    function addWord() {
        if (index < words.length) {
            let wordToAdd = words[index];

            // If it's the last word ("Days"), wrap it in a span
            if (index === words.length - 1) {
                wordToAdd = `<span class="metric-unit">${wordToAdd}</span>`;
            }

            // Add the next word (with a space if it's not the first word)
            element.innerHTML += (index > 0 ? ' ' : '') + wordToAdd;

            index++;
            setTimeout(addWord, 200); // 200ms delay between words
        }
    }
    addWord();
}
/**
 * Updates a widget card with the calculated data and comparison.
 * @param {string} type - 'buying' or 'payment'
 * @param {number} currentAvg - The average for the current period
 * @param {number} industryAvg - The industry average to compare against
 */
function updateWidget(type, currentAvg, industryAvg) {
    // Get the new element IDs
    const valueElText = document.getElementById(`${type}-velocity-value`);
    const valueElArrow = document.getElementById(`${type}-velocity-arrow`);
    const contextEl = document.getElementById(`${type}-velocity-context`);

    if (!valueElText || !contextEl || !valueElArrow) {
        console.error(`Elements for type '${type}' not found.`);
        return;
    }

    // 1. Calculate percentage difference
    let percentageDiff = 0;
    let status = 'avg'; // 'faster', 'slower', 'avg'
    let statusText = `vs ${industryAvg} Days avg`; // Default text
    let arrowIcon = 'bi-dash-lg'; // Default neutral icon

    if (currentAvg < industryAvg) {
        // Faster (good)
        percentageDiff = ((industryAvg - currentAvg) / industryAvg) * 100;
        status = 'faster';
        statusText = `${percentageDiff.toFixed(0)}% Faster than average`;
        arrowIcon = 'bi-arrow-up'; // Green UP arrow
    } else if (currentAvg > industryAvg) {
        // Slower (bad)
        percentageDiff = ((currentAvg - industryAvg) / industryAvg) * 100;
        status = 'slower';
        statusText = `${percentageDiff.toFixed(0)}% Slower than average`;
        arrowIcon = 'bi-arrow-down'; // Red DOWN arrow
    }

    // 2. Update DOM
    animateValue(valueElText, `${currentAvg} Days`); // Animate the text
    contextEl.textContent = statusText; // Set context text

    // 3. Reset and apply classes for Arrow and Context
    valueElArrow.classList.remove('metric-faster', 'metric-slower', 'bi-arrow-up', 'bi-arrow-down', 'bi-dash-lg');
    contextEl.classList.remove('metric-faster', 'metric-slower');

    valueElArrow.classList.add(arrowIcon); // Add the correct icon class

    if (status === 'faster') {
        contextEl.classList.add('metric-faster');
        valueElArrow.classList.add('metric-faster'); // Color the arrow green
    } else if (status === 'slower') {
        contextEl.classList.add('metric-slower');
        valueElArrow.classList.add('metric-slower'); // Color the arrow red
    }
}

// --- MOCK DATA & INITIALIZATION ---

// Mock data for "Sales Velocity" (Avg. Lead to Customer)
// Using 5 records as requested
const mockSalesData = [
    { created_time: '2025-10-01T09:00:00Z', closing_date: '2025-10-29T17:00:00Z' }, // 28 days
    { created_time: '2025-10-05T10:00:00Z', closing_date: '2025-11-10T11:00:00Z' }, // 36 days
    { created_time: '2025-10-15T11:00:00Z', closing_date: '2025-11-05T14:00:00Z' }, // 21 days
    { created_time: '2025-10-02T00:00:00Z', closing_date: '2025-10-22T00:00:00Z' }, // 20 days
    { created_time: '2025-10-08T00:00:00Z', closing_date: '2025-11-07T00:00:00Z' }  // 30 days
]; // Avg: 27.0 days

// Mock data for "Payment Velocity" (Avg. Time to Payment)
// Using 5 records as requested and new field names
const mockPaymentData = [
    { invoice_date: '2025-10-29T17:00:00Z', paid_date: '2025-11-10T17:00:00Z' }, // 12 days
    { invoice_date: '2025-11-10T11:00:00Z', paid_date: '2025-11-25T11:00:00Z' }, // 15 days
    { invoice_date: '2025-11-05T14:00:00Z', paid_date: '2025-11-20T14:00:00Z' }, // 15 days
    { invoice_date: '2025-10-10T00:00:00Z', paid_date: '2025-10-18T00:00:00Z' }, // 8 days
    { invoice_date: '2025-10-15T00:00:00Z', paid_date: '2025-10-25T00:00:00Z' }  // 10 days
]; // Avg: 12.0 days

// === START: NEW DUMMY INDUSTRY AVERAGES ===
const INDUSTRY_AVG_SALES = 35.0;
const INDUSTRY_AVG_PAYMENT = 10.0;
// === END: NEW DUMMY INDUSTRY AVERAGES ===


// Run the calculations and update the widgets when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Calculate Sales Velocity
    const salesAvg = calculateAverageVelocity(mockSalesData, 'created_time', 'closing_date');
    // Pass the industry average instead of the record count
    updateWidget('buying', salesAvg, INDUSTRY_AVG_SALES);

    // Calculate Payment Velocity
    const paymentAvg = calculateAverageVelocity(mockPaymentData, 'invoice_date', 'paid_date');
    // Pass the industry average instead of the record count
    updateWidget('payment', paymentAvg, INDUSTRY_AVG_PAYMENT);
});