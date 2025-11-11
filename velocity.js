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
 * Updates a widget card with the calculated data.
 * @param {string} type - 'sales' or 'payment'
 * @param {number} currentAvg - The average for the current period
 * @param {number} recordCount - The number of records used for the average
 */
function updateWidget(type, currentAvg, recordCount) {
    const valueEl = document.getElementById(`${type}-velocity-value`);
    const contextEl = document.getElementById(`${type}-velocity-context`);
    
    if (!valueEl || !contextEl) {
        console.error(`Elements for type '${type}' not found.`);
        return;
    }

    // Update DOM
    valueEl.textContent = `${currentAvg} Days`;
    // contextEl.textContent = `Based on ${recordCount} records`; // Removed this line
    // contextEl.style.color is already set to gray in the CSS
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

// Run the calculations and update the widgets when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Calculate Sales Velocity
    const salesAvg = calculateAverageVelocity(mockSalesData, 'created_time', 'closing_date');
    updateWidget('sales', salesAvg, mockSalesData.length);

    // Calculate Payment Velocity
    const paymentAvg = calculateAverageVelocity(mockPaymentData, 'invoice_date', 'paid_date');
    updateWidget('payment', paymentAvg, mockPaymentData.length);
});