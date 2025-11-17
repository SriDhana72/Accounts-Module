/**
 * Updates the display of the health score widget based on the given score.
 * This function dynamically changes the circle's background color,
 * the textual status, and the accompanying icon based on new ranges.
 *
 * @param {number} score The health score value (e.g., 87, 75, 45).
 */
function updateHealthScore(score) {
    // Perform null checks to ensure DOM elements are available
    if (!healthScoreValue || !healthScoreCircle || !healthScoreStatus || !healthScoreCheck) {
        console.error('Health score elements not found. Cannot update health score display.');
        return; // Exit if elements are missing
    }

    // Set the numeric value of the health score
    healthScoreValue.textContent = score;

    // --- Reset all existing dynamic classes before applying new ones ---
    healthScoreCircle.classList.remove('health-score-green-gradient', 'health-score-yellow-gradient', 'health-score-red-gradient', 'health-score-highrisk-gradient');    healthScoreStatus.classList.remove('text-success', 'text-warning', 'text-danger');
    healthScoreCheck.classList.remove('bi-check-circle-fill', 'bi-exclamation-triangle-fill', 'bi-x-circle-fill', 'text-success', 'text-warning', 'text-danger');


    // --- Apply styles and text based on the NEW score ranges ---
    if (score >= 80) {
        // Healthy (80-100)
        healthScoreCircle.classList.add('health-score-green-gradient');
        healthScoreStatus.textContent = 'Healthy';
        healthScoreStatus.classList.add('text-success');
        healthScoreCheck.classList.add('bi-check-circle-fill', 'text-success');
        healthScoreCheck.style.display = 'inline-block';
    } else if (score >= 60) {
        // At Risk (60-79)
        healthScoreCircle.classList.add('health-score-yellow-gradient');
        healthScoreStatus.textContent = 'At Risk';
        healthScoreStatus.classList.add('text-warning');
        healthScoreCheck.classList.add('bi-exclamation-triangle-fill', 'text-warning');
        healthScoreCheck.style.display = 'inline-block';
    } else if (score >= 40) {
        // High Risk (40-59)
        healthScoreCircle.classList.add('health-score-highrisk-gradient'); // NEW Dark Orange gradient
        healthScoreStatus.textContent = 'High Risk';
        healthScoreStatus.classList.add('text-danger'); // Keep text red
        healthScoreCheck.classList.add('bi-exclamation-octagon-fill', 'text-danger'); // NEW Octagon icon, keep it red
        healthScoreCheck.style.display = 'inline-block';
    } else {
        // Critical (0-39)
        healthScoreCircle.classList.add('health-score-red-gradient');
        healthScoreStatus.textContent = 'Critical';
        healthScoreStatus.classList.add('text-danger');
        healthScoreCheck.classList.add('bi-x-circle-fill', 'text-danger'); // Red 'x' icon
        healthScoreCheck.style.display = 'inline-block';
    }
}
/**
 * Updates the display of the NPS score widget based on the average score.
 *
 * @param {Array} data The dataset of apps (e.g., allAppsFilteredData) to calculate the avg NPS from.
 */
function updateNpsScore(data) {
    if (!npsScoreValue || !npsScoreStatus || !npsScoreCheck || !npsScoreCircle) {
        console.error('NPS score elements not found. Cannot update NPS display.');
        return; // Exit if elements are missing
    }

    // 1. Calculate average NPS
    let totalNps = 0;
    let count = 0;
    data.forEach(app => {
        if (typeof app.npsScore === 'number') {
            totalNps += app.npsScore;
            count++;
        }
    });

    const avgNps = (count > 0) ? (totalNps / count) : 0;
    const avgNpsFixed = avgNps.toFixed(1); // e.g., "6.7"

    // 2. Set the numeric value
    npsScoreValue.textContent = avgNpsFixed;

    // 3. Reset all dynamic classes
    npsScoreCircle.classList.remove('health-score-high-gradient', 'health-score-fair-gradient', 'health-score-low-gradient', 'health-score-neutral-gradient');
    npsScoreStatus.classList.remove('text-success', 'text-warning', 'text-danger');
    npsScoreCheck.classList.remove('bi-check-circle-fill', 'bi-exclamation-triangle-fill', 'bi-x-circle-fill', 'text-success', 'text-warning', 'text-danger');

    // 4. Apply styles and text based on the average score
    if (avgNps > 5) {
        // High satisfaction
        npsScoreCircle.classList.add('health-score-high-gradient');
        npsScoreStatus.textContent = 'High satisfaction';
        npsScoreStatus.classList.add('text-success');
        npsScoreCheck.classList.add('bi-check-circle-fill', 'text-success');
        npsScoreCheck.style.display = 'inline-block';
    } else if (avgNps >= 2) {
        // Fair satisfaction (2-5 inclusive)
        npsScoreCircle.classList.add('health-score-fair-gradient');
        npsScoreStatus.textContent = 'Fair satisfaction';
        npsScoreStatus.classList.add('text-warning');
        npsScoreCheck.classList.add('bi-exclamation-triangle-fill', 'text-warning');
        npsScoreCheck.style.display = 'inline-block';
    } else {
        // Low satisfaction (< 2)
        npsScoreCircle.classList.add('health-score-low-gradient');
        npsScoreStatus.textContent = 'Low satisfaction';
        npsScoreStatus.classList.add('text-danger');
        npsScoreCheck.classList.add('bi-x-circle-fill', 'text-danger');
        npsScoreCheck.style.display = 'inline-block';
    }
}
/**
 * Gets the current time in the format YYYY-MM-DD HH:MM AM/PM
 * @returns {string} The formatted timestamp
 */
function getFormattedCurrentTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    const strHours = hours.toString().padStart(2, '0');
    
    return `${year}-${month}-${day} ${strHours}:${minutes} ${ampm}`;
}
/**
 * Finds all tickets with cross-sell tags.
 * @returns {Array} An array of ticket objects.
 */
function findCrossSellTickets() {
    // Define which tags are considered cross-sell opportunities
    const crossSellTags = [
        'Subscription Upgrade Request',
        'Integration / Roadmap enquiry',
        'New Team/Dept Expansion',
        'Feature Purchase'
    ];

    const opportunities = [];
    // Iterate through all departments and their tickets
    ticketDetailsData.forEach(dept => {
        dept.tickets.forEach(ticket => {
            // Check if any of a ticket's tags are in our cross-sell list
            if (ticket.tags.some(tag => crossSellTags.includes(tag))) {
                opportunities.push(ticket);
            }
        });
    });
    return opportunities;
}
let appData = [
{
id: 1,
application: 'CRM Plus',
category: 'Sales',
usage: 'Medium',
seats: 28,
license: `Downgraded in M6`,
paymentFailureCount: 0,
pauseScheduledCount: 0,
competitors: [],
details: [],
relevantDepartmentId: 'dept-sales-ops',
createdTime: '2023-01-15T10:00:00Z',
lastInvoiceDate: '2025-07-01', // Dummy data for recent purchase
npsScore: 7,
nextRenewalDate: '2025-10-15', // Dummy data for next renewal
monthlyData: [
    { month: 'M1', seats: 30, change: '0', revenue: 1500, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
    { month: 'M2', seats: 30, change: '0', revenue: 1500, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
    { month: 'M3', seats: 29, change: '-1', revenue: 1450, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
    { month: 'M4', seats: 29, change: '0', revenue: 1450, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
    { month: 'M5', seats: 29, change: '0', revenue: 1450, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
    { month: 'M6', seats: 28, change: '-1', revenue: 1400, revenueChange: '-50', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
],
inactiveMonths: 3, // Added inactive months
cancellationReason: 'Found a cheaper alternative with similar features.' // Added cancellation reason
},
{
id: 2,
application: 'Voice',
category: 'Sales',
usage: 'Low',
seats: 21,
license: 'Downgraded in M6',
paymentFailureCount: 3,
pauseScheduledCount: 0,
competitors: [],
details: [],
relevantDepartmentId: 'dept-sales-ops',
createdTime: '2023-02-01T11:00:00Z',
lastInvoiceDate: '2025-06-20',
npsScore: 8,
nextRenewalDate: '2025-11-01',
monthlyData: [
    { month: 'M1', seats: 25, change: '0', revenue: 1250, revenueChange: '0', competitorIntegrations: 'Medium' },
    { month: 'M2', seats: 24, change: '-1', revenue: 1200, revenueChange: '-50', competitorIntegrations: 'High' },
    { month: 'M3', seats: 23, change: '-1', revenue: 1150, revenueChange: '-50', competitorIntegrations: 'High' },
    { month: 'M4', seats: 22, change: '-1', revenue: 1100, revenueChange: '-50', competitorIntegrations: 'High' },
    { month: 'M5', seats: 22, change: '0', revenue: 1100, revenueChange: '0', competitorIntegrations: 'High' },
    { month: 'M6', seats: 21, change: '-1', revenue: 1050, revenueChange: '-50', competitorIntegrations: 'High' },
],
inactiveMonths: 6, // Added inactive months
cancellationReason: 'Product did not meet performance expectations.' // Added cancellation reason
},
{
id: 3,
application: 'One',
category: 'Sales',
usage: 'High',
seats: 33,
license: 'Upgraded in M6',
paymentFailureCount: 0,
pauseScheduledCount: 0,
competitors: [],
details: [],
relevantDepartmentId: 'dept-sales-ops',
createdTime: '2023-03-10T12:00:00Z',
lastInvoiceDate: '2025-05-10',
npsScore: 8,
nextRenewalDate: '2026-03-10',
monthlyData: [
    { month: 'M1', seats: 30, change: '0', revenue: 3000, revenueChange: '0', competitorIntegrations: 'Low' },
    { month: 'M2', seats: 31, change: '+1', revenue: 3100, revenueChange: '+100', competitorIntegrations: 'Low' },
    { month: 'M3', seats: 31, change: '0', revenue: 3100, revenueChange: '0', competitorIntegrations: 'Low' },
    { month: 'M4', seats: 32, change: '+1', revenue: 3200, revenueChange: '+100', competitorIntegrations: 'Medium' },
    { month: 'M5', seats: 32, change: '0', revenue: 3200, revenueChange: '0', competitorIntegrations: 'Medium' },
    { month: 'M6', seats: 33, change: '+1', revenue: 3300, revenueChange: '+100', competitorIntegrations: 'Medium' },
]
},
{
id: 4,
application: 'Desk',
category: 'Marketing',
usage: 'Medium', // This will make it inactive
seats: 41,
license: 'No changes',
paymentFailureCount: 0,
pauseScheduledCount: 0,
competitors: ['Mailchimp'],
details: [],
relevantDepartmentId: 'dept-it-support',
createdTime: '2023-04-05T13:00:00Z',
lastInvoiceDate: '2025-04-01',
npsScore: 1,
nextRenewalDate: '2025-09-05',
monthlyData: [
    { month: 'M1', seats: 41, change: '0', revenue: 410, revenueChange: '0', competitorIntegrations: 'Mailchimp', zohoConversionOpportunities: 'High' },
    { month: 'M2', seats: 41, change: '0', revenue: 410, revenueChange: '0', competitorIntegrations: 'Mailchimp', zohoConversionOpportunities: 'High' },
    { month: 'M3', seats: 41, change: '0', revenue: 410, revenueChange: '0', competitorIntegrations: 'Mailchimp', zohoConversionOpportunities: 'High' },
    { month: 'M4', seats: 41, change: '0', revenue: 410, revenueChange: '0', competitorIntegrations: 'Mailchimp', zohoConversionOpportunities: 'High' },
    { month: 'M5', seats: 41, change: '0', revenue: 410, revenueChange: '0', competitorIntegrations: 'High' },
    { month: 'M6', seats: 41, change: '0', revenue: 410, revenueChange: '0', competitorIntegrations: 'Mailchimp', zohoConversionOpportunities: 'High' },
],
inactiveMonths: 2, // Added inactive months
cancellationReason: 'Service no longer required due to internal process changes.' // Added cancellation reason
},
{
id: 5,
application: 'Inventory',
category: 'Marketing',
usage: 'High',
seats: 46,
license: 'Downgraded in M6', // This will make it inactive
paymentFailureCount: 6,
pauseScheduledCount: 0,
competitors: ['MailChimp'],
details: [],
relevantDepartmentId: 'dept-it-support',
createdTime: '2023-05-20T14:00:00Z',
lastInvoiceDate: '2025-03-15',
npsScore: 8,
nextRenewalDate: '2025-08-20',
monthlyData: [
    { month: 'M1', seats: 50, change: '0', revenue: 2500, revenueChange: '0', competitorIntegrations: 'Mailchimp', zohoConversionOpportunities: 'High' },
    { month: 'M2', seats: 49, change: '-1', revenue: 2450, revenueChange: '-50', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
    { month: 'M3', seats: 48, change: '-1', revenue: 2400, revenueChange: '-50', competitorIntegrations: 'High' },
    { month: 'M4', seats: 47, change: '-1', revenue: 2350, revenueChange: '-50', competitorIntegrations: 'High' },
    { month: 'M5', seats: 47, change: '0', revenue: 2350, revenueChange: '0', competitorIntegrations: 'High' },
    { month: 'M6', seats: 46, change: '-1', revenue: 2300, revenueChange: '-50', competitorIntegrations: 'High' },
],
inactiveMonths: 4, // Added inactive months
cancellationReason: 'Integration issues with existing systems.' // Added cancellation reason
},
{
id: 6,
application: 'FSM',
category: 'Marketing',
usage: 'High',
seats: 29,
license: 'Upgraded in M6',
paymentFailureCount: 0,
pauseScheduledCount: 0,
competitors: ['Mailchimp', 'Active campaign'],
details: [],
relevantDepartmentId: 'dept-it-support',
createdTime: '2023-06-10T15:00:00Z',
lastInvoiceDate: '2025-02-28',
npsScore: 6,
nextRenewalDate: '2025-09-10',
monthlyData: [
    { month: 'M1', seats: 25, change: '0', revenue: 1250, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
    { month: 'M2', seats: 26, change: '+1', revenue: 1300, revenueChange: '+50', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
    { month: 'M3', seats: 27, change: '+1', revenue: 1350, revenueChange: '+50', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
    { month: 'M4', seats: 28, change: '+1', revenue: 1400, revenueChange: '+50', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
    { month: 'M5', seats: 28, change: '0', revenue: 1400, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
    { month: 'M6', seats: 29, change: '+1', revenue: 1450, revenueChange: '+50', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
]
},
{
id: 7,
application: 'People Plus',
category: 'Support',
usage: 'High',
seats: 46,
license: 'Upgraded in M6',
paymentFailureCount: 0,
pauseScheduledCount: 0,
competitors: [],
details: [],
relevantDepartmentId: 'dept-it-support',
createdTime: '2023-07-01T16:00:00Z',
lastInvoiceDate: '2025-01-20',
npsScore: 6,
nextRenewalDate: '2025-12-01',
monthlyData: [
    { month: 'M1', seats: 40, change: '0', revenue: 2000, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
    { month: 'M2', seats: 41, change: '+1', revenue: 2050, revenueChange: '+50', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
    { month: 'M3', seats: 42, change: '+1', revenue: 2100, revenueChange: '+50', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
    { month: 'M4', seats: 44, change: '+2', revenue: 2200, revenueChange: '+100', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
    { month: 'M5', seats: 45, change: '+1', revenue: 2250, revenueChange: '+50', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
    { month: 'M6', seats: 46, change: '+1', revenue: 2300, revenueChange: '+50', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
]
},
{
id: 13,
application: 'CRM',
category: 'Operations',
usage: 'High',
seats: 47,
license: 'Upgraded in M6',
paymentFailureCount: 0,
pauseScheduledCount: 0,
competitors: [],
details: [],
relevantDepartmentId: 'dept-it-support',
createdTime: '2024-01-10T12:00:00Z',
lastInvoiceDate: '2025-07-05',
npsScore: 10,
nextRenewalDate: '2025-10-10',
monthlyData: [
    { month: 'M1', seats: 45, change: '0', revenue: 4500, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
    { month: 'M2', seats: 46, change: '+1', revenue: 4600, revenueChange: '+100', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
    { month: 'M3', seats: 46, change: '0', revenue: 4600, revenueChange: '0', competitorIntegrator: 'None', zohoConversionOpportunities: 'Low' },
    { month: 'M4', seats: 47, change: '+1', revenue: 4700, revenueChange: '+100', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
    { month: 'M5', seats: 47, change: '0', revenue: 4700, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
    { month: 'M6', seats: 47, change: '0', revenue: 4700, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
]
},
{
id: 14,
application: 'BooksZohoGST',
category: 'Operations',
usage: 'High',
seats: 29,
license: 'No changes',
paymentFailureCount: 0,
pauseScheduledCount: 0,
competitors: [],
details: [],
relevantDepartmentId: 'dept-it-support',
createdTime: '2024-02-14T13:00:00Z',
lastInvoiceDate: '2025-06-10',
npsScore: 7,
nextRenewalDate: '2026-02-14',
monthlyData: [
    { month: 'M1', seats: 29, change: '0', revenue: 2900, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
    { month: 'M2', seats: 29, change: '0', revenue: 2900, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
    { month: 'M3', seats: 29, change: '0', revenue: 2900, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
    { month: 'M4', seats: 29, change: '0', revenue: 2900, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
    { month: 'M5', seats: 29, change: '0', revenue: 2900, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
    { month: 'M6', seats: 29, change: '0', revenue: 2900, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
]
},
{
id: 16,
application: 'WorkDrive',
category: 'Productivity',
usage: 'High',
seats: 120,
license: 'Upgraded in M6',
paymentFailureCount: 0,
pauseScheduledCount: 0,
competitors: ['Dropbox', 'Google Drive'],
details: [],
relevantDepartmentId: 'dept-it-support',
createdTime: '2024-04-20T15:00:00Z',
lastInvoiceDate: '2025-07-22',
npsScore: 9,
nextRenewalDate: '2025-09-20',
monthlyData: [
    { month: 'M1', seats: 100, change: '0', revenue: 500, revenueChange: '0', competitorIntegrations: 'Dropbox', zohoConversionOpportunities: 'High' },
    { month: 'M2', seats: 105, change: '+5', revenue: 525, revenueChange: '+25', competitorIntegrations: 'Dropbox', zohoConversionOpportunities: 'High' },
    { month: 'M3', seats: 110, change: '+5', revenue: 550, revenueChange: '+25', competitorIntegrations: 'Google Drive', zohoConversionOpportunities: 'High' },
    { month: 'M4', seats: 115, change: '+5', revenue: 575, revenueChange: '+25', competitorIntegrations: 'Google Drive', zohoConversionOpportunities: 'High' },
    { month: 'M5', seats: 120, change: '+5', revenue: 600, revenueChange: '+25', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
    { month: 'M6', seats: 120, change: '0', revenue: 600, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
]
},
{
id: 17,
application: 'Sites',
category: 'Communication',
usage: 'Medium', // This will make it inactive
seats: 75,
license: 'No changes',
paymentFailureCount: 0,
pauseScheduledCount: 0,
competitors: ['Zoom', 'Microsoft Teams'],
details: [],
relevantDepartmentId: 'dept-it-support',
createdTime: '2024-05-01T16:00:00Z',
lastInvoiceDate: '2025-01-05',
npsScore: 6,
nextRenewalDate: '2026-05-01',
monthlyData: [
    { month: 'M1', seats: 75, change: '0', revenue: 7500, revenueChange: '0', competitorIntegrations: 'Medium' },
    { month: 'M2', seats: 75, change: '0', revenue: 7500, revenueChange: '0', competitorIntegrations: 'Medium' },
    { month: 'M3', seats: 75, change: '0', revenue: 7500, revenueChange: '0', competitorIntegrations: 'Medium' },
    { month: 'M4', seats: 75, change: '0', revenue: 7500, revenueChange: '0', competitorIntegrations: 'Medium' },
    { month: 'M5', seats: 75, change: '0', revenue: 7500, revenueChange: '0', competitorIntegrations: 'Medium' },
    { month: 'M6', seats: 75, change: '0', revenue: 7500, revenueChange: '0', competitorIntegrations: 'Medium' },
],
inactiveMonths: 8, // Added inactive months
cancellationReason: 'Switched to a different platform for website management.' // Added cancellation reason
},
{
id: 18,
application: 'Sign',
category: 'Productivity',
usage: 'High',
seats: 50,
license: 'Upgraded in M6',
paymentFailureCount: 0,
pauseScheduledCount: 0,
competitors: [],
details: [],
relevantDepartmentId: 'dept-it-support',
createdTime: '2024-06-10T17:00:00Z',
lastInvoiceDate: '2025-07-12',
npsScore: 9,
nextRenewalDate: '2025-08-10',
monthlyData: [
    { month: 'M1', seats: 45, change: '0', revenue: 450, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
    { month: 'M2', seats: 46, change: '+1', revenue: 460, revenueChange: '+10', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
    { month: 'M3', seats: 47, change: '+1', revenue: 470, revenueChange: '+10', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
    { month: 'M4', seats: 48, change: '+1', revenue: 480, revenueChange: '+10', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
    { month: 'M5', seats: 49, change: '+1', revenue: 490, revenueChange: '+10', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
    { month: 'M6', seats: 50, change: '+1', revenue: 500, revenueChange: '+10', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
]
},
{
id: 19,
application: 'Meeting',
category: 'Communication',
usage: 'Medium', // This will make it inactive
seats: 80,
license: 'No changes',
paymentFailureCount: 0,
pauseScheduledCount: 0,
competitors: ['Google Meet'],
details: [],
relevantDepartmentId: 'dept-it-support',
createdTime: '2024-07-01T18:00:00Z',
lastInvoiceDate: '2025-07-01',
npsScore: 5,
nextRenewalDate: '2025-09-01',
monthlyData: [
    { month: 'M1', seats: 80, change: '0', revenue: 800, revenueChange: '0', competitorIntegrations: 'Google Meet', zohoConversionOpportunities: 'High' },
    { month: 'M2', seats: 80, change: '0', revenue: 800, revenueChange: '0', competitorIntegrations: 'Google Meet', zohoConversionOpportunities: 'High' },
    { month: 'M3', seats: 80, change: '0', revenue: 800, revenueChange: '0', competitorIntegrations: 'Google Meet', zohoConversionOpportunities: 'High' },
    { month: 'M4', seats: 80, change: '0', revenue: 800, revenueChange: '0', competitorIntegrations: 'Google Meet', zohoConversionOpportunities: 'High' },
    { month: 'M5', seats: 80, change: '0', revenue: 800, revenueChange: '0', competitorIntegrations: 'Google Meet', zohoConversionOpportunities: 'High' },
    { month: 'M6', seats: 80, change: '0', revenue: 800, revenueChange: '0', competitorIntegrations: 'Google Meet', zohoConversionOpportunities: 'High' },
],
inactiveMonths: 1, // Added inactive months
cancellationReason: 'Prefer in-person meetings over virtual tools.' // Added cancellation reason
},
{
id: 20,
application: 'Mail Suite',
category: 'Communication',
usage: 'High',
seats: 150,
license: 'Upgraded in M6',
paymentFailureCount: 0,
pauseScheduledCount: 0,
competitors: ['Outlook', 'Gmail'],
details: [],
relevantDepartmentId: 'dept-it-support',
createdTime: '2024-07-15T19:00:00Z',
lastInvoiceDate: '2025-06-25',
npsScore: 10,
nextRenewalDate: '2025-11-15',
monthlyData: [
    { month: 'M1', seats: 140, change: '0', revenue: 1400, revenueChange: '0', competitorIntegrations: 'Outlook', zohoConversionOpportunities: 'Medium' },
    { month: 'M2', seats: 142, change: '+2', revenue: 1420, revenueChange: '+20', competitorIntegrations: 'Outlook', zohoConversionOpportunities: 'Medium' },
    { month: 'M3', seats: 144, change: '+2', revenue: 1440, revenueChange: '+20', competitorIntegrations: 'Gmail', zohoConversionOpportunities: 'Medium' },
    { month: 'M4', seats: 146, change: '+2', revenue: 1460, revenueChange: '+20', competitorIntegrations: 'Gmail', zohoConversionOpportunities: 'Medium' },
    { month: 'M5', seats: 148, change: '+2', revenue: 1480, revenueChange: '+20', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
    { month: 'M6', seats: 150, change: '+2', revenue: 1500, revenueChange: '+20', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
]
}
];
// Remove "Workplace", "Cliq", "Expense", "Payroll", "Invoice", and "Creator" applications to get 14 apps
appData = appData.filter(app => !['Workplace', 'Cliq', 'Expense', 'Payroll', 'Invoice', 'Creator'].includes(app.application));
// === START: MODIFIED DUMMY NOTIFICATION DATA ===
const dummyNotifications = [
    { text: "CRM Plus status changed to 'Inactive'.", time: "2025-11-03 09:15 AM", isRead: false },
    { text: "A new critical issue 'Revenue declining' was detected for 'Inventory'.", time: "2025-11-03 08:30 AM", isRead: false },
    { text: "NPS Score dropped to '1' for 'Sites'.", time: "2025-11-02 04:20 PM", isRead: false },
    { text: "A new warning 'Seat usage' was detected for 'Desk'.", time: "2025-11-02 02:11 PM", isRead: true },
    { text: "Payment failure detected for 'Voice'.", time: "2025-11-02 10:05 AM", isRead: true },
    { text: "New 'Feature Gap' ticket received for 'CRM Plus'.", time: "2025-11-01 03:00 PM", isRead: true },
    { text: "Competitor 'Dropbox' detected for 'WorkDrive'.", time: "2025-11-01 11:45 AM", isRead: true },
    // --- These will be hidden by "Show More" ---
    { text: "'Voice' status changed to 'Inactive'.", time: "2025-10-31 05:30 PM", isRead: true },
    { text: "'Desk' status changed to 'Inactive'.", time: "2025-10-31 05:30 PM", isRead: true },
    { text: "'Inventory' status changed to 'Inactive'.", time: "2025-10-31 05:30 PM", isRead: true }
];
// === END: MODIFIED DUMMY NOTIFICATION DATA ===
/**
 * Populates the notification panel based on a filter.
 * @param {string} filter - 'all' or 'unread'
 * @param {boolean} showAll - true to ignore the 7-item limit
 */
function renderNotifications(filter = 'all', showAll = false) {
    if (!notificationList || !notificationBadge || !notificationShowMore) return;

    // --- START: NEW BADGE & HIGHLIGHT LOGIC ---

    // 1. Get today's date string
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const todayString = `${year}-${month}-${day}`; // e.g., "2025-11-03"

    // 2. Count "today's" unread notifications for the badge
    const todaysUnreadCount = dummyNotifications.filter(n => n.time.startsWith(todayString) && !n.isRead).length;

    // 3. Set the badge
    notificationBadge.textContent = todaysUnreadCount;
    if (todaysUnreadCount === 0) {
         notificationBadge.style.display = 'none';
    } else {
         notificationBadge.style.display = 'flex';
    }
    // --- END: NEW BADGE & HIGHLIGHT LOGIC ---


    // 4. Filter data for the list
    let filteredData;
    if (filter === 'unread') {
        filteredData = dummyNotifications.filter(n => !n.isRead);
    } else { // 'all'
        filteredData = dummyNotifications;
    }

    // 5. Clear the list
    notificationList.innerHTML = '';

    // 6. Render the new list
    const itemsToRender = showAll ? filteredData : filteredData.slice(0, 7);

    if (itemsToRender.length === 0) {
        notificationList.innerHTML = '<li class="notification-no-items">No notifications to show.</li>';
    }

    itemsToRender.forEach(notif => {
        const li = document.createElement('li');

        // Add 'is-read' class if true
        if (notif.isRead) {
            li.classList.add('is-read');
        }

        // --- ADD 'is-new' CLASS FOR HIGHLIGHT ---
        if (notif.time.startsWith(todayString)) {
            li.classList.add('is-new');
        }

        li.innerHTML = `
            ${notif.text}
            <span class="notification-time">${notif.time}</span>
        `;
        notificationList.appendChild(li);
    });

    // 7. Update "Show More" button
    if (showAll || filter === 'unread' || filteredData.length <= 7) {
        notificationShowMore.style.display = 'none';
    } else {
        notificationShowMore.style.display = 'block';
    }
}
function assignInitialAppStatus(data) {
data.forEach(app => {
if (app.paymentFailureCount > 0 || app.pauseScheduledCount > 0) {
    app.status = 'Renewal risk detected';
} else if (app.license.includes('Downgraded') || app.usage === 'Low' || app.usage === 'Medium') {
    // If already marked as inactive, keep it, otherwise set it
    if (!app.status || app.status !== 'Inactive') {
        app.status = 'Inactive';
    }
} else {
    app.status = 'Active';
}
});
}
assignInitialAppStatus(appData);
function assignTagsFromSummary(summary) {
const tags = [];
const lowerSummary = summary.toLowerCase();
if (lowerSummary.includes('dissatisfaction') || lowerSummary.includes('complaint') || lowerSummary.includes('unhappy') || lowerSummary.includes('frustrated') || lowerSummary.includes('poor service')) {
tags.push('Dissatisfaction/Complaint');
}
if (lowerSummary.includes('escalation') || lowerSummary.includes('urgent') || lowerSummary.includes('critical')) {
tags.push('Escalation Request');
}
if (lowerSummary.includes('repeated follow-up') || lowerSummary.includes('still waiting') || lowerSummary.includes('no response')) {
tags.push('Repeated Follow-up');
}
if (lowerSummary.includes('slow support') || lowerSummary.includes('delay') || lowerSummary.includes('lagging') || lowerSummary.includes('unresponsive') || lowerSummary.includes('pending')) {
tags.push('Slow Support / Delay');
}
if (lowerSummary.includes('feature request') || lowerSummary.includes('missing feature') || lowerSummary.includes('feature gap')) {
tags.push('Feature Gap');
}
if (lowerSummary.includes('cancel') || lowerSummary.includes('churn') || lowerSummary.includes('leaving') || lowerSummary.includes('terminate subscription')) {
tags.push('Cancel Threat/Churn Threat');
}
if (lowerSummary.includes('competitor') || lowerSummary.includes('switching to') || lowerSummary.includes('moving to')) {
tags.push('Competitor Switch');
}
if (lowerSummary.includes('regret') || lowerSummary.includes('disappointed with product') || lowerSummary.includes('not meeting expectations')) {
tags.push('Product Regret');
}
if (lowerSummary.includes('outage') || lowerSummary.includes('down') || lowerSummary.includes('emergency') || lowerSummary.includes('not working') || lowerSummary.includes('service disruption') || lowerSummary.includes('access issue') || lowerSummary.includes('cannot log in') || lowerSummary.includes('connectivity problem') || lowerSummary.includes('unreachable')) {
tags.push('Service Outage/Emergency');
}
if (lowerSummary.includes('security') || lowerSummary.includes('data breach') || lowerSummary.includes('unauthorized access') || lowerSummary.includes('vulnerability') || lowerSummary.includes('trust concern') || lowerSummary.includes('privacy issue')) {
tags.push('Security/Data Breach');
}
if (lowerSummary.includes('evaluating alternatives') || lowerSummary.includes('looking elsewhere') || lowerSummary.includes('considering other options') || lowerSummary.includes('comparing solutions')) {
tags.push('Evaluating Alternatives');
}
// --- NEW CROSS-SELL TAGS ---
if (lowerSummary.includes('increase user count') || lowerSummary.includes('upgrade plan') || lowerSummary.includes('move to enterprise')) {
tags.push('Subscription Upgrade Request');
}
if (lowerSummary.includes('integration') || lowerSummary.includes('connect to') || lowerSummary.includes('roadmap feature')) {
tags.push('Integration / Roadmap enquiry');
 }
if (lowerSummary.includes('new department') || lowerSummary.includes('expand team') || lowerSummary.includes('need access for')) {
tags.push('New Team/Dept Expansion');
}
if (lowerSummary.includes('feature purchase') || lowerSummary.includes('buy add-on') || lowerSummary.includes('license add-on')) {
tags.push('Feature Purchase');
}
return tags;
}
const ticketDetailsData = [
    {
        id: 'dept-it-support',
        department: "IT Support",
        openStatus: 3,
        closedStatus: 2,
        openTicketOwnership: "Loganathan",
        executiveSummary: "High volume of open IT support tickets, with a focus on software bugs and user training requests. Requires urgent attention to reduce backlog.",
        tickets: [
            { id: "TKT-001-IT", summary: "Network connectivity issue in Sales department. Urgent!", url: "#", status: "Open" },
            { id: "TKT-002-IT", summary: "Missing feature: unable to export reports to PDF. Repeated follow-up needed.", url: "#", status: "Open" },
            { id: "TKT-003-IT", summary: "User requested to increase user count from 50 to 100 on their plan.", url: "#", status: "Open" },
            { id: "TKT-CLOSED-001-IT", summary: "Resolved: User account lockout issue.", url: "#", status: "Closed" },
            { id: "TKT-CLOSED-002-IT", summary: "Completed: Software update for design team.", url: "#", status: "Closed" }
        ]
    },
    {
        id: 'dept-sales-ops',
        department: "Sales Operations",
        openStatus: 1,
        closedStatus: 0,
        openTicketOwnership: "Foumin",
        executiveSummary: "A single open ticket related to CRM data synchronization impacting sales reporting accuracy. Critical for end-of-quarter metrics.",
        tickets: [
            { id: "TKT-004-SO", summary: "CRM data sync failure, client asked about integration with their external ERP system on the roadmap feature.", url: "#", status: "Open" }
        ]
    },
    {
        id: 'dept-finance',
        department: "Finance",
        openStatus: 1,
        closedStatus: 0,
        openTicketOwnership: "Dhana",
        executiveSummary: "Outstanding query on invoice reconciliation. Requires clarification to close monthly books.",
        tickets: [
            { id: "TKT-005-FIN", summary: "Query on Q2 invoice reconciliation discrepancies, dissatisfaction with current system.", url: "#", status: "Open" }
        ]
    },
    {
        id: 'dept-development',
        department: "Development",
        openStatus: 3,
        closedStatus: 0,
        openTicketOwnership: "Sivanesan",
        executiveSummary: "Multiple active bugs reported in the latest software release. Prioritization and swift resolution are essential to maintain user satisfaction.",
        tickets: [
            { id: "TKT-006-DEV", summary: "Critical bug in user authentication module leading to service outage. Users experiencing access issue.", url: "#", status: "Open" },
            { id: "TKT-007-DEV", "summary": "UI bug: button misaligned on dashboard page, product regret reported, evaluating alternatives.", url: "#", "status": "Open" },
            { id: "TKT-008-DEV", summary: "New marketing lead needs immediate access for new department launch, need help provisioning.", url: "#", status: "Open" }
        ]
    }
];
ticketDetailsData.forEach(dept => {
dept.tickets.forEach(ticket => {
ticket.tags = assignTagsFromSummary(ticket.summary);
});
});

let applicationTableContainer = null;
let ticketDetailsTableContainer = null;
let applicationTableBody = null;
let applicationTableHeader = null;
let ticketDetailsTableBody = null;
let crossSellBtn = null;
let allAppsBtn = null;
let downgradesBtn = null;
let competitorsBtn = null;
let anomaliesBtn = null;
let ticketDetailsBtn = null;
let crossSellCountSpan = null;
let allAppsCountSpan = null;
let downgradesCountSpan = null;
let competitorsCountSpan = null;
let anomaliesCountSpan = null;
let criticalIssuesCountSpan = null;
let warningSignsCountSpan = null;
let deskTicketsCountSpan = null;
let arrLessThan5kCountSpan = null;
let arrGreaterThan5kCountSpan = null;
let arrLessThan5kSegment = null;
let arrGreaterThan5kSegment = null;
let criticalIssuesCard = null;
let warningSignsCard = null;
let competitorExposureCard = null; // Corrected declaration
let downgradeRisksCard = null; // Corrected declaration
let deskTicketsCard = null;
let healthScoreCircle = null;
let healthScoreValue = null;
let healthScoreStatus = null;
let healthScoreCheck = null;
let competitorExposureCountElement = null;
let downgradeRisksCountElement = null;
let currentOpenDropdown = null;
let currentOpenDropdownToggle = null;
let currentOpenThreatPopup = null;
let currentOpenThreatPopupToggle = null;
let healthScoreFlipper = null;
let npsScoreValue = null;
let npsScoreStatus = null;
let npsScoreCheck = null;
let npsScoreCircle = null;
// === START: ADD NOTIFICATION VARIABLES ===
let notificationBell = null;
let notificationPanel = null;
let notificationList = null;
let notificationShowMore = null;
let notificationBadge = null;
let notificationFilterBtn = null;
let notificationFilterDropdown = null;
const npsScore = 70;
// New elements for popups
let recentPurchasesCountSpan = null;
let nextRenewalsCountSpan = null;
// Removed recentPurchasesPopup, nextRenewalsPopup
let recentPurchasesHoverPopup = null;
let nextRenewalsHoverPopup = null;
let recentPurchasesHoverList = null;
let nextRenewalsHoverList = null;
let crossSellFlashMessageContainer = null;
let crossSellFlashMessagePopup = null;
let crossSellFlashMessageList = null;
let crossSellFlashMessageTrigger = null;

let threatDetailsPopup = null;
let threatListContainer = null;
let threatPopupCloseBtn = null;

let resolveNotesPopup = null;
let resolveNotesTextarea = null;
let resolveNotesSubmitBtn = null;
let resolveNotesCancelBtn = null;
let currentItemToResolve = null; // To store {appId, threatName}


let escalatedTicketsPopup = null;
let escalatedTicketsListContainer = null;
let escalatedTicketsPopupCloseBtn = null;
let inactiveAppPopup = null;
let inactiveAppListContainer = null;
let inactiveAppPopupCloseBtn = null;

let resolvedHistoryPopup = null;
let resolvedHistoryListContainer = null;
let resolvedHistoryPopupCloseBtn = null;
let resolvedItemsHistory = []; // Generic history storage

let expandedRowId = null; // Define expandedRowId
let expandedTicketRowId = null; // Define expandedTicketRowId
let activeSection = 'all-apps'; // Define activeSection
let widgetLoaderOverlay = null; // Loader element
let refreshIcon = null; // Added refresh icon element
let currentArrFilter = 'all'; // Can be 'all', 'lessThan5k', or 'greaterThan5k'
// Global DOM Elements (Ensure these are initialized in initializeDOMElements)
let emailPopupOverlay = null;
let emailPopupTitle = null;
let emailPopupSubject = null;
let emailPopupBodyContent = null;
let emailPopupCopyBtn = null;
let emailPopupCloseBtn = null;
let chatModalHeader = null;
// 1. Function to show the email modal and populate content
function showEmailPopup(type) {
    if (!emailPopupOverlay || !emailPopupTitle || !emailPopupSubject || !emailPopupBodyContent) {
        console.error('Email popup DOM elements are missing!');
        return;
    }

    let title, subject, body;
    const accountName = document.querySelector('.account-details-main-box h5').textContent.trim();
    const healthScore = healthScoreValue ? healthScoreValue.textContent : 'N/A';
    const status = healthScoreStatus ? healthScoreStatus.textContent : 'N/A';
    const totalArr = document.querySelector('.info-section.arr-section .main-value .value').textContent.trim();

    // --- Dynamic Content Drafting Logic ---
    if (type === 'client') {
        title = 'Email to Client';
        subject = `[Action Required] Review of Your Zoho Account Health - Score: ${healthScore} (${status})`;
        body = `Dear ${document.querySelector('.account-details-main-box .fw-bold.text-dark.fs-6').textContent.trim()},\n\n`;
        body += `We recently reviewed the health of your Zoho account, ${accountName}.\n\n`;
        body += `Your current Health Score is **${healthScore}** (${status}).\n\n`;
        body += `Our analysis shows: \n`;
        body += `- Annual Recurring Revenue (ARR): ${totalArr}\n`;
        body += `- Key Activity: [Insert a positive or neutral observation here, e.g., 'High usage of CRM Plus.']\n\n`;
        body += 'To ensure continued success, we recommend a brief check-in to discuss recent usage patterns and upcoming renewals. Please let us know your availability.\n\n';
        body += 'Best regards,\n[Your Name]';

    } else if (type === 'peer') {
        title = 'Email to Peer (Internal)';
        subject = `[Internal Alert] Health Review for ${accountName} - Score: ${healthScore} (${status})`;
        body = `Hi Team,\n\n`;
        body += `Please be advised on the status of **${accountName}** (Current Health Score: ${healthScore} - ${status}).\n\n`;
        body += 'Key Callouts:\n';
        body += `- Status: ${status} (ARR: ${totalArr})\n`;
        body += `- Critical Anomalies: ${anomaliesCriticalOnlyData.length}\n`;
        body += `- Downgrade Risks: ${downgradesFilteredData.length}\n`;
        body += `We need to follow up on the following action item:\n[Insert required action, e.g., 'Re-engage on the BooksZohoGST competitor threat resolution.']\n\n`;
        body += 'Thanks,\n[Your Name]';
    } else {
        return; // Exit if type is invalid
    }

    // Populate the modal elements
    emailPopupTitle.textContent = title;
    emailPopupSubject.textContent = subject;
    emailPopupBodyContent.value = body;

    // Show the modal
    emailPopupOverlay.style.display = 'flex';
}

// 2. Function to close the email modal
function closeEmailPopup() {
    if (emailPopupOverlay) {
        emailPopupOverlay.style.display = 'none';
    }
}

// 3. Function to handle the copy action
function copyEmailContent() {
    const subject = emailPopupSubject.textContent.trim();
    const body = emailPopupBodyContent.value;
    
    // Combine subject and body into a format suitable for pasting into an email client
    const fullContent = `Subject: ${subject}\n\n${body}`;

    navigator.clipboard.writeText(fullContent).then(() => {
        alert('Email content copied to clipboard! You can now paste it into your mail client.');
        closeEmailPopup();
    }).catch(err => {
        console.error('Could not copy text: ', err);
        alert('Failed to copy content. Please select and copy the text manually.');
    });
}

function showWidgetLoader() {
if (widgetLoaderOverlay) {
widgetLoaderOverlay.classList.add('show');
}
}
function hideWidgetLoader() {
if (widgetLoaderOverlay) {
widgetLoaderOverlay.classList.remove('show');
}
}
function closeAllDropdowns() {
if (currentOpenDropdown) {
currentOpenDropdown.classList.remove('show');
currentOpenDropdown.querySelectorAll('.glass-button').forEach(button => {
    button.style.animation = '';
});
if (currentOpenDropdown.id === 'need-help-dropdown-menu' && currentOpenDropdownToggle) {
    currentOpenDropdownToggle.classList.remove('show-arrow');
}
currentOpenDropdown = null;
currentOpenDropdownToggle = null;
}
}
function closeAllThreatPopups() {
if (currentOpenThreatPopup) {
currentOpenThreatPopup.classList.remove('show');
currentOpenThreatPopup = null;
currentOpenThreatPopupToggle = null;
}
}
function initializeDOMElements() {
applicationTableContainer = document.getElementById('applicationTableContainer');
ticketDetailsTableContainer = document.getElementById('ticketDetailsTableContainer');
applicationTableBody = document.getElementById('applicationTableBody');
applicationTableHeader = document.querySelector('#applicationTable thead');
ticketDetailsTableBody = document.getElementById('ticketDetailsTableBody');
crossSellBtn = document.getElementById('crossSellBtn');
allAppsBtn = document.getElementById('allAppsBtn');
downgradesBtn = document.getElementById('downgradesBtn');
competitorsBtn = document.getElementById('competitorsBtn');
anomaliesBtn = document.getElementById('anomaliesBtn');
ticketDetailsBtn = document.getElementById('ticketDetailsBtn');
crossSellCountSpan = document.getElementById('crossSellCount');
allAppsCountSpan = document.getElementById('allAppsCount');
downgradesCountSpan = document.getElementById('downgradesCount');
competitorsCountSpan = document.getElementById('competitorsCount');
anomaliesCountSpan = document.getElementById('anomaliesCount');
criticalIssuesCountSpan = document.getElementById('criticalIssuesCount');
warningSignsCountSpan = document.getElementById('warningSignsCount');
arrLessThan5kCountSpan = document.getElementById('arrLessThan5kCount');
arrGreaterThan5kCountSpan = document.getElementById('arrGreaterThan5kCount');
arrLessThan5kSegment = document.getElementById('arrLessThan5kSegment');
arrGreaterThan5kSegment = document.getElementById('arrGreaterThan5kSegment');
criticalIssuesCard = document.getElementById('criticalIssuesCard');
warningSignsCard = document.getElementById('warningSignsCard');
competitorExposureCard = document.getElementById('competitorExposureCard');
downgradeRisksCard = document.getElementById('downgradeRisksCard');
deskTicketsCard = document.getElementById('deskTicketsCard');
const openTicketsCountInCard = document.getElementById('openTicketsCount');
const closedTicketsCountInCard = document.getElementById('closedTicketsCount');
healthScoreCircle = document.getElementById('healthScoreCircle');
healthScoreValue = document.getElementById('healthScoreValue');
healthScoreStatus = document.getElementById('healthScoreStatus');
healthScoreCheck = document.getElementById('healthScoreCheck');
// START: ADD THESE NEW LINES
healthScoreFlipper = document.getElementById('healthScoreFlipper');
npsScoreValue = document.getElementById('npsScoreValue');
npsScoreStatus = document.getElementById('npsScoreStatus');
npsScoreCheck = document.getElementById('npsScoreCheck');
npsScoreCircle = document.getElementById('npsScoreCircle');
subscriptionChatModal = document.getElementById('subscriptionChatModal');
closeSubscriptionChatModalBtn = document.getElementById('closeSubscriptionChatModal');
chatRefreshBtn = document.getElementById('chatRefreshBtn');
chatModalBody = document.getElementById('chatModalBody');
chatModalInput = document.getElementById('chatModalInput');
chatModalSendBtn = document.getElementById('chatModalSendBtn');
chatModalHeader = document.querySelector('.subscription-chat-modal-header');
// === START: INITIALIZE NOTIFICATION ELEMENTS ===
notificationBell = document.getElementById('notificationBell');
console.log('Inside initializeDOMElements, notificationBell is:', notificationBell);
notificationPanel = document.getElementById('notificationPanel');
notificationList = document.getElementById('notificationList');
notificationShowMore = document.getElementById('notificationShowMore');
notificationBadge = document.getElementById('notificationBadge');
notificationFilterBtn = document.getElementById('notificationFilterBtn');
notificationFilterDropdown = document.getElementById('notificationFilterDropdown');
// === END: INITIALIZE NOTIFICATION ELEMENTS ===

competitorExposureCountElement = document.getElementById('competitorExposureCount');
downgradeRisksCountElement = document.getElementById('downgradeRisksCount');
recentPurchasesCountSpan = document.getElementById('recentPurchasesCount');
nextRenewalsCountSpan = document.getElementById('nextRenewalsCount');
recentPurchasesHoverPopup = document.getElementById('recentPurchasesHoverPopup');
nextRenewalsHoverPopup = document.getElementById('nextRenewalsHoverPopup');
recentPurchasesHoverList = document.getElementById('recentPurchasesHoverList');
nextRenewalsHoverList = document.getElementById('nextRenewalsHoverList');
widgetLoaderOverlay = document.getElementById('widgetLoaderOverlay'); // Initialize loader element
executiveSummaryTextElement = document.getElementById('executiveSummaryText'); // Initialize executive summary element
refreshIcon = document.getElementById('refreshIcon'); // Added refresh icon element
threatDetailsPopup = document.getElementById('threatDetailsPopup');
threatListContainer = document.getElementById('threatListContainer');
threatPopupCloseBtn = document.getElementById('threatPopupCloseBtn');

resolveNotesPopup = document.getElementById('resolveNotesPopup');
resolveNotesTextarea = document.getElementById('resolveNotesTextarea');
resolveNotesSubmitBtn = document.getElementById('resolveNotesSubmitBtn');
resolveNotesCancelBtn = document.getElementById('resolveNotesCancelBtn');
escalatedTicketsPopup = document.getElementById('escalatedTicketsPopup');

escalatedTicketsListContainer = document.getElementById('escalatedTicketsListContainer');

escalatedTicketsPopupCloseBtn = document.getElementById('escalatedTicketsPopupCloseBtn');
inactiveAppPopup = document.getElementById('inactiveAppPopup');
inactiveAppListContainer = document.getElementById('inactiveAppListContainer');
inactiveAppPopupCloseBtn = document.getElementById('inactiveAppPopupCloseBtn');
resolvedHistoryPopup = document.getElementById('resolvedHistoryPopup');
resolvedHistoryListContainer = document.getElementById('resolvedHistoryListContainer');
resolvedHistoryPopupCloseBtn = document.getElementById('resolvedHistoryPopupCloseBtn');
crossSellFlashMessageContainer = document.getElementById('crossSellFlashMessageContainer');
crossSellFlashMessageTrigger = document.getElementById('crossSellFlashMessageTrigger');
crossSellFlashMessagePopup = document.getElementById('crossSellFlashMessagePopup');
crossSellFlashMessageList = document.getElementById('crossSellFlashMessageList');
// New elements for Email Popup
emailPopupOverlay = document.getElementById('emailPopupOverlay');
emailPopupTitle = document.getElementById('emailPopupTitle');
emailPopupSubject = document.getElementById('emailPopupSubject');
emailPopupBodyContent = document.getElementById('emailPopupBodyContent');
emailPopupCopyBtn = document.getElementById('emailPopupCopyBtn');
emailPopupCloseBtn = document.getElementById('emailPopupCloseBtn');


if (!applicationTableContainer) {
console.error('Application table container not found!');
return false;
}
if (!applicationTableBody) {
console.error('Application table body not found!');
return false;
}
if (!applicationTableHeader) {
console.error('Application table header (thead) not found!');
return false;
}
if (!subscriptionChatModal) {
console.error('Subscription chat modal element (subscriptionChatModal) not found!');
return false;
}
if (!widgetLoaderOverlay) {
console.error('Widget loader overlay element (widgetLoaderOverlay) not found!');
return false;
}


if (!refreshIcon) {
console.error('Refresh icon element (refreshIcon) not found!');
return false;
}
return true;
}
let allAppsFilteredData = [];
let crossSellFilteredData = [];
let downgradesFilteredData = [];
let competitorsFilteredData = [];
let criticalIssuesFilteredData = [];
let warningSignsFilteredData = [];
let anomaliesFilteredData = [];
let anomaliesCriticalOnlyData = [];
let anomaliesWarningOnlyData = [];
let arrLessThan5kFilteredData = [];
let arrGreaterThan5kFilteredData = [];
let recentPurchasesData = [];
let nextRenewalsData = [];
const originalExecutiveSummaryText = "This account shows strong engagement, but recent usage shifts warrant monitoring. Proactive outreach recommended.";

function typeWriterEffect(element, text, speed) {

if (!element) return;

const words = text.split(' ');

let i = 0;

element.textContent = ''; // Clear existing text

function typeWord() {

if (i < words.length) {

element.textContent += words[i] + ' ';

i++;

setTimeout(typeWord, speed);

}

}

typeWord();

}
function calculateTotalArr(app) {
const currentMonthData = app.monthlyData[app.monthlyData.length - 1];
return currentMonthData ? currentMonthData.revenue : 0;
}
// Helper to check for competitor threats (not cross-sell)
function hasCompetitorThreat(app) {
    const crossSellList = ['mailchimp', 'dropbox']; // Your cross-sell list
    if (!app.competitors || app.competitors.length === 0) {
        return false;
    }
    // A "threat" is any competitor NOT in the cross-sell list
    return app.competitors.some(comp => !crossSellList.includes(comp.toLowerCase()));
}

// Helper to get ticket counts by a specific tag
function getTicketCountByTag(relevantDepartment, tagToFind) {
    if (!relevantDepartment) return 0;
    const normalizedTag = tagToFind.toLowerCase().replace(/ /g, '-').replace(/\//g, '-');
    let count = 0;
    relevantDepartment.tickets.forEach(ticket => {
        if (ticket.status === 'Open' && ticket.tags.some(tag => tag.toLowerCase().replace(/ /g, '-').replace(/\//g, '-') === normalizedTag)) {
            count++;
        }
    });
    return count;
}

// Helper to check for ANY anomaly tickets (Critical or Warning)
function hasAnomalyTickets(relevantDepartment) {
    if (!relevantDepartment) return false;
    const anomalyTags = [
        // Critical Tags
        'cancel threat/churn threat', 'competitor switch', 'product regret', 'service outage/emergency',
        'security/data breach', 'evaluating alternatives',
        // Warning Tags
        'dissatisfaction/complaint', 'escalation request', 'repeated follow-up', 
        'slow support / delay', 'feature gap'
    ];
    return relevantDepartment.tickets.some(tkt =>
        tkt.status === 'Open' && tkt.tags.some(tag => anomalyTags.includes(tag.toLowerCase().replace(/ /g, '-').replace(/\//g, '-')))
    );
}
function filterDataArrays() {
allAppsFilteredData = appData;
// --- START: MODIFIED CROSS-SELL LOGIC ---

// Define the list of competitors that count as "cross-sell" opportunities
const crossSellList = ['mailchimp', 'dropbox'];

// The old logic for finding the initial app is no longer needed for cross-sell,
// but we'll keep it in case it's used elsewhere (though it doesn't seem to be).
let initialSignupApp = null;
let earliestTime = Infinity;
appData.forEach(app => {
    const appCreatedTime = new Date(app.createdTime).getTime();
    if (appCreatedTime < earliestTime) {
        earliestTime = appCreatedTime;
        initialSignupApp = app;
    }
});

// NEW LOGIC: Filter for apps whose competitor list includes an item from crossSellList
crossSellFilteredData = appData.filter(app => 
    app.competitors && app.competitors.some(comp => crossSellList.includes(comp.toLowerCase()))
);
// --- END: MODIFIED CROSS-SELL LOGIC ---
const problematicTicketTagsList = [
"Dissatisfaction/Complaint", "Escalation Request", "Repeated Follow-up",
"Slow Support / Delay", "Feature Gap", "Cancel Threat/Churn Threat",
"Competitor Switch", "Product Regret", "Service Outage/Emergency",
"Security/Data Breach", "Evaluating Alternatives"
].map(tag => tag.toLowerCase().replace(/ /g, '-').replace(/\//g, '-'));
const findDepartment = (deptId) => ticketDetailsData.find(dept => dept.id === deptId);
// Declare totalInactiveApps here
const totalInactiveApps = appData.filter(app => app.status === 'Inactive').length;
const totalOpenTickets = ticketDetailsData.reduce((sum, dept) => sum + dept.openStatus, 0);
// --- START: NEW ADVANCED CRITICAL ISSUE LOGIC ---
anomaliesCriticalOnlyData = (() => { // Use an IIFE to manage scope
    const criticalAppSet = new Set(); // Use a Set to avoid duplicates

    // --- STAGE 1: Identify all "Problem Apps" for multi-app rules ---
    const inactiveApps = [];
    const arrDecline20Apps = [];
    const majorUsageDropApps = [];
    const paymentIssueApps = [];
    const competitorThreatApps = [];
    const lowNPSApps = [];
    const anomalyTicketApps = [];
    const consecutiveUsageDropApps = [];
    const consecutiveArrDropApps = [];
    const arrDecline10Apps = []; // For rules needing "> 10%" drop

    appData.forEach(app => {
        const relevantDepartment = findDepartment(app.relevantDepartmentId);

        // --- Calculate metrics ---
        let usageTrendPercentage = 0;
        if (app.monthlyData.length > 0) {
            const m1Seats = app.monthlyData[0].seats;
            const m6Seats = app.monthlyData[app.monthlyData.length - 1].seats;
            if (m1Seats > 0) {
                usageTrendPercentage = ((m6Seats - m1Seats) / m1Seats) * 100;
            } else if (m6Seats > 0) { usageTrendPercentage = 100.0; }
        }
        
        let revenueChange = 0;
        if (app.monthlyData.length >= 6) {
            const m6Revenue = app.monthlyData[5].revenue;
            const m3Revenue = app.monthlyData[2].revenue;
            if (m3Revenue > 0) {
                revenueChange = (m6Revenue - m3Revenue) / m3Revenue;
            }
        }

        // --- Sort apps into groups ---
        if (app.status === 'Inactive') { inactiveApps.push(app); }
        if (revenueChange < -0.20) { arrDecline20Apps.push(app); }
        if (revenueChange < -0.10) { arrDecline10Apps.push(app); } // For 10% rules
        if (usageTrendPercentage < -10) { majorUsageDropApps.push(app); }
        if (app.paymentFailureCount >= 5 || app.pauseScheduledCount >= 5) { paymentIssueApps.push(app); }
        if (hasCompetitorThreat(app)) { competitorThreatApps.push(app); }
        if (app.npsScore < 2) { lowNPSApps.push(app); } // Use this app's NPS score
        if (hasAnomalyTickets(relevantDepartment)) { anomalyTicketApps.push(app); }

        // Consecutive checks
        if (app.monthlyData.length >= 6) {
            const m4Change = parseInt(app.monthlyData[3].change);
            const m5Change = parseInt(app.monthlyData[4].change);
            const m6Change = parseInt(app.monthlyData[5].change);
            if (m4Change < 0 && m5Change < 0 && m6Change < 0) {
                consecutiveUsageDropApps.push(app);
            }
            
            const m4Revenue = app.monthlyData[3].revenue;
            const m5Revenue = app.monthlyData[4].revenue;
            const m6Revenue = app.monthlyData[5].revenue;
            const m3Revenue = app.monthlyData[2].revenue;
            if (m4Revenue < m3Revenue && m5Revenue < m4Revenue && m6Revenue < m5Revenue) {
                consecutiveArrDropApps.push(app);
            }
        }
    });

    // --- STAGE 2: Check multi-app combinations and populate the Set ---
    
    // Helper to add all apps from a group to the set
    const addGroupToCritical = (appGroup) => {
        appGroup.forEach(app => criticalAppSet.add(app));
    };

    if (inactiveApps.length > 0 && arrDecline20Apps.length > 0) {
        addGroupToCritical(inactiveApps);
        addGroupToCritical(arrDecline20Apps);
    }
    if (inactiveApps.length > 0 && majorUsageDropApps.length > 0) {
        addGroupToCritical(inactiveApps);
        addGroupToCritical(majorUsageDropApps);
    }
    if (arrDecline20Apps.length > 0 && majorUsageDropApps.length > 0) {
        addGroupToCritical(arrDecline20Apps);
        addGroupToCritical(majorUsageDropApps);
    }
    if (inactiveApps.length > 0 && competitorThreatApps.length > 0) {
        addGroupToCritical(inactiveApps);
        addGroupToCritical(competitorThreatApps);
    }
    if (paymentIssueApps.length > 0 && arrDecline10Apps.length > 0) { // Using 10% drop for "ARR Drop"
        addGroupToCritical(paymentIssueApps);
        addGroupToCritical(arrDecline10Apps);
    }
    if (lowNPSApps.length > 0 && anomalyTicketApps.length > 0) {
        addGroupToCritical(lowNPSApps);
        addGroupToCritical(anomalyTicketApps);
    }
    if (consecutiveUsageDropApps.length > 0) {
        addGroupToCritical(consecutiveUsageDropApps);
    }
    if (consecutiveArrDropApps.length > 0) {
        addGroupToCritical(consecutiveArrDropApps);
    }
    
    // --- STAGE 3: Check single-app combinations (Type 1) ---
    appData.forEach(app => {
        // If it's already critical, skip to save time
        if (criticalAppSet.has(app)) return; 

        // Calculate this app's specific metrics
        let usageTrendPercentage = 0;
        if (app.monthlyData.length > 0) {
            const m1Seats = app.monthlyData[0].seats;
            const m6Seats = app.monthlyData[app.monthlyData.length - 1].seats;
            if (m1Seats > 0) {
                usageTrendPercentage = ((m6Seats - m1Seats) / m1Seats) * 100;
            } else if (m6Seats > 0) { usageTrendPercentage = 100.0; }
        }
        const isMajorUsageDrop = usageTrendPercentage < -10;
        const isLicenseDrop20 = usageTrendPercentage < -20;
        const isLicenseDrop10 = usageTrendPercentage < -10;

        let isArrDrop20 = false;
        let isArrDrop10 = false;
        if (app.monthlyData.length >= 6) {
            const m6Revenue = app.monthlyData[5].revenue;
            const m3Revenue = app.monthlyData[2].revenue;
            if (m3Revenue > 0) {
                const revenueChange = (m6Revenue - m3Revenue) / m3Revenue;
                if (revenueChange < -0.20) { isArrDrop20 = true; }
                if (revenueChange < -0.10) { isArrDrop10 = true; }
            }
        }
        
        const relevantDepartment = findDepartment(app.relevantDepartmentId);
        const featureGapCount = getTicketCountByTag(relevantDepartment, 'feature-gap');
        const hasThreat = hasCompetitorThreat(app);
        const hasPaymentIssue = app.paymentFailureCount >= 5 || app.pauseScheduledCount >= 5;

        // Apply "Type 1" (same service) rules
        if ((isArrDrop20 || isLicenseDrop20) && isMajorUsageDrop) { criticalAppSet.add(app); }
        if (isArrDrop10 && featureGapCount >= 2) { criticalAppSet.add(app); }
        if (hasThreat && (isArrDrop10 || isLicenseDrop10)) { criticalAppSet.add(app); }
        if (hasPaymentIssue && hasThreat) { criticalAppSet.add(app); }
        if (hasPaymentIssue && isMajorUsageDrop) { criticalAppSet.add(app); }
    });

    // Finally, return the array of critical apps
    return Array.from(criticalAppSet);
})();
// --- END: NEW ADVANCED CRITICAL ISSUE LOGIC ---
// --- START: NEW WARNING SIGN LOGIC (REVISED) ---
anomaliesWarningOnlyData = appData.filter(app => {
    // We remove this check to allow an app to be in both lists:
    // const isAlreadyCritical = anomaliesCriticalOnlyData.some(criticalApp => criticalApp.id === app.id);
    // if (isAlreadyCritical) return false;
    let isWarning = false;
    // --- Calculate metrics for rules ---
    const isLowNPS = app.npsScore < 2; // Use this app's NPS score
    const relevantDepartment = findDepartment(app.relevantDepartmentId);
    const hasAnyAnomalyTickets = hasAnomalyTickets(relevantDepartment); // Check for anomaly tickets

    // 6-month seat trend % (M6 vs M1)
    let usageTrendPercentage = 0;
    if (app.monthlyData.length > 0) {
        const m1Seats = app.monthlyData[0].seats;
        const m6Seats = app.monthlyData[app.monthlyData.length - 1].seats;
        if (m1Seats > 0) {
            usageTrendPercentage = ((m6Seats - m1Seats) / m1Seats) * 100;
        } else if (m6Seats > 0) { usageTrendPercentage = 100.0; }
    }
    
    // --- Apply ALL Warning Rules ---

    // Rule 1: Reduced usage (Minor decline = -1% to -10%)
    if (usageTrendPercentage >= -10 && usageTrendPercentage < 0) { isWarning = true; }

    // Rule 2: Some disengagement (Exactly 1 inactive app on account)
    if (totalInactiveApps === 1) { isWarning = true; }

    // Rule 3: Support concerns (Warning Tags)
    const warningTags = [
        'dissatisfaction/complaint', 'escalation request', 'repeated follow-up',
        'slow support / delay', 'feature gap'
    ];
    if (relevantDepartment) {
        const openTicketsInDept = relevantDepartment.tickets.filter(tkt => tkt.status === 'Open');
        const hasWarningProblematicTag = openTicketsInDept.some(tkt =>
            tkt.tags.some(tag => warningTags.includes(tag.toLowerCase().replace(/ /g, '-').replace(/\//g, '-')))
        );
        if (hasWarningProblematicTag) { isWarning = true; }
    }

    // Rule 4: Revenue decline (ARR drop <= 40%)
    if (app.monthlyData.length >= 6) {
        const m6Revenue = app.monthlyData[5].revenue;
        const m3Revenue = app.monthlyData[2].revenue;
        if (m3Revenue > 0) {
            const revenueChange = (m6Revenue - m3Revenue) / m3Revenue;
            // Flag as warning if there's a drop, but it's not critical (>= -0.40)
            if (revenueChange < 0 && revenueChange >= -0.40) { isWarning = true; }
        }
    }

    // Rule 5: Seat usage (between 40% and 70%)
    if (app.monthlyData.length >= 6) {
        const seatsInLast6Months = app.monthlyData.slice(-6).map(m => m.seats);
        const maxSeatsLast6Months = Math.max(...seatsInLast6Months);
        if (maxSeatsLast6Months > 0) {
            const usagePercent = app.seats / maxSeatsLast6Months;
            if (usagePercent > 0.40 && usagePercent < 0.70) { isWarning = true; }
        }
    }
    
    // Rule 6: Payment failures (< 5 days)
    if ((app.paymentFailureCount > 0 && app.paymentFailureCount < 5) ||
        (app.pauseScheduledCount > 0 && app.pauseScheduledCount < 5)) {
        isWarning = true;
    }

    // Rule 7: High support volume (15 to 20 open tickets)
    if (totalOpenTickets >= 15 && totalOpenTickets <= 20) { isWarning = true; }

    // Rule 8: Low NPS (ONLY if it's not already a critical "Low NPS + Anomaly" issue)
    if (isLowNPS && !hasAnyAnomalyTickets) { isWarning = true; }

    // Rule 9: Inactive for less than 6 months
    if (app.status === 'Inactive' && app.inactiveMonths < 6) {
        isWarning = true;
    }

    return isWarning;
});
// --- END: NEW WARNING SIGN LOGIC (REVISED) ---
downgradesFilteredData = appData.filter(app => app.license.includes('Downgraded'));
competitorsFilteredData = appData.filter(app => app.competitors && app.competitors.length > 0);
const anomaliesSet = new Set();
anomaliesCriticalOnlyData.forEach(app => anomaliesSet.add(app));
anomaliesWarningOnlyData.forEach(app => anomaliesSet.add(app));
// Check the history and force those apps to stay in the anomalies list
resolvedItemsHistory.forEach(historyItem => {
    const app = appData.find(a => a.application === historyItem.appName);
    if (app) {
        anomaliesSet.add(app);
    }
});
anomaliesFilteredData = Array.from(anomaliesSet);
arrLessThan5kFilteredData = appData.filter(app => calculateTotalArr(app) < 5000);
arrGreaterThan5kFilteredData = appData.filter(app => calculateTotalArr(app) >= 5000);
// Populate recent purchases and next renewals data
const sixMonthsAgo = new Date();
sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
const threeMonthsFromNow = new Date();
threeMonthsFromNow.setMonth(threeMonthsFromNow.getMonth() + 3);
const availableRecentPurchases = appData.filter(app => {
if (app.lastInvoiceDate) {
    const invoiceDate = new Date(app.lastInvoiceDate);
    return invoiceDate >= sixMonthsAgo && invoiceDate <= new Date();
}
return false;
}).map(app => ({
name: app.application,
revenue: app.monthlyData[app.monthlyData.length - 1].revenue
}));
const availableNextRenewals = appData.filter(app => {
if (app.nextRenewalDate) {
    const renewalDate = new Date(app.nextRenewalDate);
    return renewalDate > new Date() && renewalDate <= threeMonthsFromNow;
}
return false;
}).map(app => ({
name: app.application,
date: app.nextRenewalDate,
revenue: app.monthlyData[app.monthlyData.length - 1].revenue
}));
// Fixed numbers for Recent Purchases (2) and Next Renewals (4)
recentPurchasesData = availableRecentPurchases.slice(0, 2);
nextRenewalsData = availableNextRenewals.slice(0, 4);
}
/**
* Handles clicks on the ARR filter segments.
* Toggles the filter, updates the UI, and renders the appropriate data.
* @param {string} filterType - The type of filter clicked ('lessThan5k' or 'greaterThan5k').
*/
function handleArrFilterClick(filterType) {
// If the clicked filter is already active, deactivate it and show all apps.
if (currentArrFilter === filterType) {
currentArrFilter = 'all';
updateDashboard(appData);
if(arrLessThan5kSegment) arrLessThan5kSegment.classList.remove('active-arr-filter');
if(arrGreaterThan5kSegment) arrGreaterThan5kSegment.classList.remove('active-arr-filter');
// Reselect the 'All Apps' button
if(allAppsBtn) allAppsBtn.classList.add('active');
activeSection = 'all-apps';
} else {
// Otherwise, activate the new filter.
currentArrFilter = filterType;
const dataToRender = filterType === 'lessThan5k' ? arrLessThan5kFilteredData : arrGreaterThan5kFilteredData;
updateDashboard(dataToRender);

// Update visual state of filter buttons and clear main category highlight
clearAllButtonHighlights();
if(arrLessThan5kSegment) arrLessThan5kSegment.classList.toggle('active-arr-filter', filterType === 'lessThan5k');
if(arrGreaterThan5kSegment) arrGreaterThan5kSegment.classList.toggle('active-arr-filter', filterType === 'greaterThan5k');
activeSection = 'arr-filter-active'; // A custom state to show no main category is selected
}
}


/**
* Master function to update the entire dashboard based on a given dataset.
* @param {Array} data - The array of application data to use for calculations.
*/
function updateDashboard(data) {
// 1. Update Total ARR
const totalArr = appData.reduce((sum, app) => {
    // Whitelist: Only include revenue from these specific statuses
    if (app.status === 'Active' || app.status === 'Renewal risk detected') {
        return sum + calculateTotalArr(app);
    }
    return sum; // Exclude 'Inactive', 'Resolved Inactive', and empty status
}, 0);
const totalArrValueElement = document.querySelector('.info-section.arr-section .main-value .value');
if (totalArrValueElement) {
totalArrValueElement.textContent = `$${totalArr.toLocaleString()}`;
}

// 2. Update Recent Purchases
const sixMonthsAgo = new Date();
sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
const recentPurchases = data.filter(app => {
if (app.lastInvoiceDate) {
    const invoiceDate = new Date(app.lastInvoiceDate);
    return invoiceDate >= sixMonthsAgo && invoiceDate <= new Date();
}
return false;
});
// Take only the top 2 for display in both count and popup
const recentPurchasesToDisplay = recentPurchases.slice(0, 2);
if (recentPurchasesCountSpan) {
recentPurchasesCountSpan.textContent = recentPurchasesToDisplay.length;
}
recentPurchasesData = recentPurchasesToDisplay.map(app => ({ 
name: app.application, 
revenue: app.monthlyData[app.monthlyData.length - 1].revenue 
}));
// 3. Update Upcoming Renewals
const threeMonthsFromNow = new Date();
threeMonthsFromNow.setMonth(threeMonthsFromNow.getMonth() + 3);
const upcomingRenewals = data.filter(app => {
if (app.nextRenewalDate) {
    const renewalDate = new Date(app.nextRenewalDate);
    return renewalDate > new Date() && renewalDate <= threeMonthsFromNow;
}
return false;
});
// Take only the top 4 for display in both count and popup
const upcomingRenewalsToDisplay = upcomingRenewals.slice(0, 4);
if (nextRenewalsCountSpan) {
nextRenewalsCountSpan.textContent = upcomingRenewalsToDisplay.length;
}
nextRenewalsData = upcomingRenewalsToDisplay.map(app => ({ name: app.application, date: app.nextRenewalDate, revenue: app.monthlyData[app.monthlyData.length - 1].revenue }));

// 4. Update Health Score
let totalScore = 0;
if (data.length > 0) {
const scoreSum = data.reduce((sum, app) => {
    let appScore = 100;
    if (app.usage === 'Low') appScore -= 20;
    if (app.usage === 'Medium') appScore -= 10;
    if (app.license.includes('Downgraded')) appScore -= 15;
    appScore -= (app.paymentFailureCount * 5);
    return sum + Math.max(0, appScore); // Ensure score doesn't go below 0
}, 0);
totalScore = Math.round(scoreSum / data.length);
} else {
totalScore = 100; // Default to 100 if no data
}
updateHealthScore(45);
updateNpsScore(data);

// 5. Update KPI Cards & Filter Button Counts
const dataIds = new Set(data.map(app => app.id));

const criticalCount = anomaliesCriticalOnlyData.filter(app => dataIds.has(app.id)).length;
const warningCount = anomaliesWarningOnlyData.filter(app => dataIds.has(app.id)).length;
const competitorCount = competitorsFilteredData.filter(app => dataIds.has(app.id)).length;
const downgradeCount = downgradesFilteredData.filter(app => dataIds.has(app.id)).length;
const crossSellCount = crossSellFilteredData.filter(app => dataIds.has(app.id)).length;
const anomaliesCount = anomaliesFilteredData.filter(app => dataIds.has(app.id)).length;

if (criticalIssuesCountSpan) criticalIssuesCountSpan.textContent = criticalCount;
if (warningSignsCountSpan) warningSignsCountSpan.textContent = warningCount;
if (competitorExposureCountElement) competitorExposureCountElement.textContent = competitorCount;
if (downgradeRisksCountElement) downgradeRisksCountElement.textContent = downgradeCount;
if (allAppsCountSpan) allAppsCountSpan.textContent = data.length;
if (crossSellCountSpan) crossSellCountSpan.textContent = crossSellCount;
if (downgradesCountSpan) downgradesCountSpan.textContent = downgradeCount;
// Note: The 'npsScore' const (set to 70) is already available globally

// 2. Start with a base score of 100
let calculatedScore = 100;

// 3. Apply Critical Issues penalties
if (criticalCount >= 4) {
    calculatedScore -= 50;
} else if (criticalCount >= 2) { // 2 to 3
    calculatedScore -= 40;
} else if (criticalCount === 1) {
    calculatedScore -= 25;
}

// 4. Apply Warning Signs penalties
if (warningCount >= 9) {
    calculatedScore -= 25;
} else if (warningCount >= 6) { // 6 to 8
    calculatedScore -= 15;
} else if (warningCount >= 3) { // 3 to 5
    calculatedScore -= 10;
} else if (warningCount >= 1) { // 1 to 2
    calculatedScore -= 5;
}

// 5. Apply NPS / Sentiment penalties
if (npsScore < 20) {
    calculatedScore -= 20; // Low satisfaction
} else if (npsScore <= 50) { // 20 to 50
    calculatedScore -= 10; // Neutral to fair
}
// No penalty if NPS > 50 (Healthy)

// 6. Ensure the final score is not below 0
const finalScore = Math.max(0, calculatedScore);

// 7. Update the health score display with the final calculated score
updateHealthScore(finalScore);

updateNpsScore(data); // This updates the flipper
if (competitorsCountSpan) competitorsCountSpan.textContent = competitorCount;
if (anomaliesCountSpan) anomaliesCountSpan.textContent = anomaliesCount;
const relevantDeptIds = new Set(data.map(app => app.relevantDepartmentId));

const relevantTickets = ticketDetailsData.filter(dept => relevantDeptIds.has(dept.id));

const openTickets = relevantTickets.reduce((sum, dept) => sum + dept.openStatus, 0);

const closedTickets = relevantTickets.reduce((sum, dept) => sum + dept.closedStatus, 0);
const totalOpenTickets = ticketDetailsData.reduce((sum, dept) => sum + dept.openStatus, 0);
 
const totalClosedTickets = ticketDetailsData.reduce((sum, dept) => sum + dept.closedStatus, 0);

// Desk tickets based on relevant departments
const openTicketsCountInCard = document.getElementById('openTicketsCount');
const closedTicketsCountInCard = document.getElementById('closedTicketsCount');
if(openTicketsCountInCard) openTicketsCountInCard.textContent = totalOpenTickets;

if(closedTicketsCountInCard) closedTicketsCountInCard.textContent = totalClosedTickets;

updateCounts(anomaliesCount);
// 6. Render the table with the new data
renderApplicationTable(data);
}
function updateArrCapsuleCounts() {
// Update ARR segment counts with parentheses and green color
if (arrLessThan5kCountSpan) {
arrLessThan5kCountSpan.textContent = `(${arrLessThan5kFilteredData.length})`;
arrLessThan5kCountSpan.style.color = '#28a745'; /* Ensure green color */
}
if (arrGreaterThan5kCountSpan) {
arrGreaterThan5kCountSpan.textContent = `(${arrGreaterThan5kFilteredData.length})`;
arrGreaterThan5kCountSpan.style.color = '#28a745'; /* Ensure green color */
}
}
function updateCounts(specificAnomaliesCount = null) {
console.log('Updating counts...');
if (crossSellCountSpan) crossSellCountSpan.textContent = crossSellFilteredData.length;
if (allAppsCountSpan) allAppsCountSpan.textContent = appData.length; // Use appData.length for total apps
if (downgradesCountSpan) downgradesCountSpan.textContent = downgradesFilteredData.length;
if (competitorsCountSpan) competitorsCountSpan.textContent = competitorsFilteredData.length;
if (anomaliesCountSpan) {
if (specificAnomaliesCount !== null) {
    anomaliesCountSpan.textContent = specificAnomaliesCount;
} else {
    anomaliesCountSpan.textContent = anomaliesFilteredData.length;
}
}
if (criticalIssuesCountSpan) criticalIssuesCountSpan.textContent = anomaliesCriticalOnlyData.length;
if (warningSignsCountSpan) warningSignsCountSpan.textContent = anomaliesWarningOnlyData.length;
if (competitorExposureCountElement) {
competitorExposureCountElement.textContent = competitorsFilteredData.length;
}
if (downgradeRisksCountElement) {
downgradeRisksCountElement.textContent = downgradesFilteredData.length;
}
const openTicketsCountSpan = document.getElementById('openTicketsCount');
const closedTicketsCountSpan = document.getElementById('closedTicketsCount');
const totalOpenTickets = ticketDetailsData.reduce((sum, dept) => sum + dept.openStatus, 0);

const totalClosedTickets = ticketDetailsData.reduce((sum, dept) => sum + dept.closedStatus, 0);
if (openTicketsCountSpan) openTicketsCountSpan.textContent = totalOpenTickets;

if (closedTicketsCountSpan) closedTicketsCountSpan.textContent = totalClosedTickets;

if (openTicketsCountSpan) {
openTicketsCountSpan.style.minWidth = '50px';
openTicketsCountSpan.style.textAlign = 'center';
}
if (closedTicketsCountSpan) {
closedTicketsCountSpan.style.minWidth = '50px';
closedTicketsCountSpan.style.textAlign = 'center';
}
// Update ARR segment counts with parentheses and green color
if (arrLessThan5kCountSpan) {
arrLessThan5kCountSpan.textContent = `(${arrLessThan5kFilteredData.length})`;
arrLessThan5kCountSpan.style.color = '#28a745'; /* Ensure green color */
}
if (arrGreaterThan5kCountSpan) {
arrGreaterThan5kCountSpan.textContent = `(${arrGreaterThan5kFilteredData.length})`;
arrGreaterThan5kCountSpan.style.color = '#28a745'; /* Ensure green color */
}
// Update new card counts with fixed numbers
if (recentPurchasesCountSpan) recentPurchasesCountSpan.textContent = recentPurchasesData.length;
if (nextRenewalsCountSpan) nextRenewalsCountSpan.textContent = nextRenewalsData.length;
// Helper function to toggle the class
const toggleBtnHighlight = (btnElement, count) => {
    if (btnElement) { // Check if the button element exists
        
        // !!! DEBUGGING LINE !!!
        console.log(`Checking button: ${btnElement.id}, Count: ${count}`);

        if (count > 0) {
            btnElement.classList.add('btns-highlight');
        } else {
            btnElement.classList.remove('btns-highlight');
        }
    }
};

// Get the counts. We use the array lengths as the source of truth.
const crossSellCount = crossSellFilteredData.length;
const downgradesCount = downgradesFilteredData.length;
const competitorsCount = competitorsFilteredData.length;

// For anomalies, we need to respect the 'specificAnomaliesCount' if it's passed
let anomaliesCount;
if (specificAnomaliesCount !== null) {
    anomaliesCount = specificAnomaliesCount;
} else {
    anomaliesCount = anomaliesFilteredData.length;
}

// Apply the highlight logic to each button
toggleBtnHighlight(crossSellBtn, crossSellCount);
toggleBtnHighlight(downgradesBtn, downgradesCount);
toggleBtnHighlight(competitorsBtn, competitorsCount);
toggleBtnHighlight(anomaliesBtn, anomaliesCount);

// --- END: ADD THIS NEW HIGHLIGHT LOGIC ---
}
function getStatusTagHtml(status) {
    let colorClass = '';
    let displayText = status;

    if (status === 'Active') {
        colorClass = 'status-tag-active';
    } else if (status === 'Inactive') {
        colorClass = 'status-tag-inactive';
    } else if (status === 'Resolved Inactive') {
        colorClass = 'status-tag-inactive'; // Use the standard inactive class
        displayText = 'Inactive <span class="resolved-label">#manually resolved</span>'; // Added the new label
    } else if (status === 'Renewal risk detected') {
        colorClass = 'status-tag-renewal-risk';
        displayText = 'Renewal risk'; // Shorten the text
    }

    return `<span class="status-tag ${colorClass}">${displayText}</span>`;
}
const getRandomUsageValue = () => {
const categories = [
'Major Decline', 
'Minor Decline', 
'Neutral', 
'Minor Increase', 
'Major Increase'
];
const randomCategory = categories[Math.floor(Math.random() * categories.length)];

switch (randomCategory) {
case 'Major Decline':
    // Range: -100 to -11
    return Math.floor(Math.random() * 90) - 100;
case 'Minor Decline':
    // Range: -10 to -1
    return Math.floor(Math.random() * 10) - 10;
case 'Neutral':
    return 0;
case 'Minor Increase':
    // Range: 1 to 10
    return Math.floor(Math.random() * 10) + 1;
case 'Major Increase':
    // Range: 11 to 100
    return Math.floor(Math.random() * 90) + 11;
default:
    return Math.floor(Math.random() * 201) - 100; // Fallback
}
};
function renderApplicationTable(data) {
console.log('Starting to render application table with', data.length, 'items');
if (!applicationTableBody) {
console.error("Application table body element (applicationTableBody) not found!");
return;
}
// --- START: NEW ANOMALY SORTING LOGIC ---
if (activeSection === 'anomalies') {

    const getSortWeight = (app) => {
        // Check if this app has any resolution history
        const isResolved = resolvedItemsHistory.some(item => item.appName === app.application) || app.status === 'Resolved Inactive';

        if (isResolved) {
            return 3;  // 3. Resolved apps go to the very bottom
        }
        if (app.status === 'Inactive') {
            return 2;  // 2. Unresolved Inactive apps are above them
        }
        return 1; // 1. All other active anomalies are at the top
    };

    data.sort((a, b) => {
        const weightA = getSortWeight(a);
        const weightB = getSortWeight(b);

        return weightA - weightB; // Sorts by 1, then 2, then 3
    });
}
// --- END: NEW ANOMALY SORTING LOGIC ---
// === START: ADDING THIS NEW SORTING BLOCK FOR 'all-apps' ===
else if (activeSection === 'all-apps') {
    // This function assigns a "weight" to each status for sorting
    const getStatusWeight = (status) => {
        switch (status) {
            case 'Active':
                return 1;
            case 'Renewal risk detected':
                return 2;
            case 'Inactive':
                return 3;
            default: // 'Resolved Inactive' and ''
                return 4;
        }
    };

    data.sort((a, b) => {
        const weightA = getStatusWeight(a.status);
        const weightB = getStatusWeight(b.status);

        // Primary sort: by status weight
        if (weightA < weightB) {
            return -1; // a comes first
        }
        if (weightA > weightB) {
            return 1; // b comes first
        }

        // Secondary sort: if both are 'Inactive', sort by inactiveMonths
        if (weightA === 3 && weightB === 3 && a.inactiveMonths && b.inactiveMonths) {
            return a.inactiveMonths - b.inactiveMonths; // Ascending order
        }

        return 0; // Keep original order for all other ties
    });
}
// === END: NEW SORTING BLOCK FOR 'all-apps' ===
applicationTableBody.innerHTML = '';
expandedRowId = null;
if (data.length === 0) {
const noDataRow = document.createElement('tr');
noDataRow.innerHTML = `<td colspan="10" class="text-center py-4 text-muted">No data available for this category.</td>`;
applicationTableBody.appendChild(noDataRow);
return;
}
data.forEach((app) => {
const row = document.createElement('tr');
row.setAttribute('data-app-id', app.id);
row.className = 'clickable-row';
const randomId = '1234567890123'; // Static 13-digit placeholder ID
let crossSellCompetitors = [];
let threatCompetitors = [];
const crossSellList = ['Mailchimp', 'Dropbox'];
const threatList = ['Active campaign', 'Zoom', 'Microsoft Teams', 'Google Drive', 'Sqauare POS'];
if (app.competitors && app.competitors.length > 0) {
    app.competitors.forEach(comp => {
        if (crossSellList.includes(comp)) {
            crossSellCompetitors.push(comp);
        } else if (threatList.includes(comp)) {
            threatCompetitors.push(comp);
        } else {
            threatCompetitors.push(comp);
        }
    });
}

const getRandomUsageTrend = () => {
    const trends = [
        { icon: 'bi-graph-up', class: 'text-success' },
        { icon: 'bi-graph-down', class: 'text-danger' },
        { icon: 'bi-dash-lg', class: 'text-muted' }
    ];
    return trends[Math.floor(Math.random() * trends.length)];
};
let monthlyDataHtml = app.monthlyData.map((month, index) => {
    const usageValue = parseInt(month.change); // Use the actual seat change
    const usageTrend = usageValue > 0 ? { icon: 'bi-graph-up', class: 'text-success' } : usageValue < 0 ? { icon: 'bi-graph-down', class: 'text-danger' } : { icon: 'bi-dash-lg', class: 'text-muted' };

    let changeIcon = '';
    let changeClass = 'text-muted';
    if (month.change.includes('+')) {
        changeIcon = `<i class="bi bi-graph-up text-success"></i>`;
        changeClass = 'text-success';
    } else if (month.change.includes('-')) {
        changeIcon = `<i class="bi bi-graph-down text-danger"></i>`;
        changeClass = 'text-danger';
    } else {
        changeIcon = `<i class="bi bi-dash-lg text-muted"></i>`;
    }
    let revenueTrendIcon = '';
    let revenueTrendClass = 'text-muted';
    let revenuePercentageChange = 'N/A';
    if (index > 0) {
        const previousMonthRevenue = app.monthlyData[index - 1].revenue;
        const currentMonthRevenue = month.revenue;
        if (previousMonthRevenue !== 0) {
            const percentage = ((currentMonthRevenue - previousMonthRevenue) / previousMonthRevenue) * 100;
            revenuePercentageChange = `${percentage.toFixed(1)}%`;
            if (percentage > 0) {
                revenueTrendIcon = `<i class="bi bi-graph-up text-success"></i>`;
                revenueTrendClass = 'text-success';
                revenuePercentageChange = `+${revenuePercentageChange}`;
            } else if (percentage < 0) {
                revenueTrendIcon = `<i class="bi bi-graph-down text-danger"></i>`;
                revenueTrendClass = 'text-danger';
            } else {
                revenueTrendIcon = `<i class="bi bi-dash-lg text-muted"></i>`;
                revenueTrendClass = 'text-muted';
            }
        } else if (currentMonthRevenue > 0) {
            revenuePercentageChange = `+Inf%`;
            revenueTrendIcon = `<i class="bi bi-graph-up text-success"></i>`;
            revenueTrendClass = 'text-success';
        } else {
            revenuePercentageChange = `N/A`;
            revenueTrendIcon = `<i class="bi bi-dash-lg text-muted"></i>`;
            revenueTrendClass = 'text-muted';
        }
    } else {
        revenuePercentageChange = 'N/A';
        revenueTrendIcon = `<i class="bi bi-dash-lg text-muted"></i>`;
        revenueTrendClass = 'text-muted';
    }
    return `
<tr>
<td>${month.month}</td>
<td>${usageValue}</td>
<td><i class="bi ${usageTrend.icon} ${usageTrend.class}"></i></td>
<td>${month.seats}</td>
<td class="${changeClass}">${changeIcon} ${month.change}</td>
<td>
<span style="color: #1a2b4d; font-weight: 700;">$${month.revenue}</span><br>
<span class="${revenueTrendClass} arr-percentage-text">${revenuePercentageChange}</span>
</td>
<td>${revenueTrendIcon}</td> <!-- Fixed: Removed revenueTrendClass from td -->
</tr>
`;
}).join('');
let competitorsCellContent = '';
if (crossSellCompetitors.length === 0 && threatCompetitors.length === 0) {
    competitorsCellContent = `<div class="competitors-flex-container justify-content-center">
                    <span class="text-dark">None</span>
                  </div>`;
} else {
    const crossSellTagsHtml = crossSellCompetitors.map(comp => `<span class="competitor-tag cross-sell-tag">${comp}</span>`).join('');
    let threatDisplayHtml = '';
    let threatPopupHtml = '';
    if (threatCompetitors.length > 0) {
        threatDisplayHtml += `<span class="threat-tag-display">${threatCompetitors[0]}</span>`;
        if (threatCompetitors.length > 1) {
            const remainingThreatsCount = threatCompetitors.length - 1;
            threatDisplayHtml += `<span class="threat-more-indicator">+${remainingThreatsCount}</span>`;
            threatPopupHtml = threatCompetitors.map(comp => `<span class="threat-popup-item">${comp}</span>`).join('');
            threatPopupHtml = `
    <div class="threat-popup-container">
        ${threatPopupHtml}
    </div>
`;
        }
    } else {
        threatDisplayHtml = '<span class="text-dark">None</span>';
    }
    competitorsCellContent = `
<div class="competitors-flex-container">
<div class="competitors-cross-sell-section">
    ${crossSellTagsHtml || '<span class="text-dark">None</span>'}
</div>
<span class="vertical-bar-in-table"></span>
<div class="competitors-threat-section">
    <div class="threat-popup-wrapper">
        ${threatDisplayHtml}
        ${threatPopupHtml}
    </div>
</div>
</div>
`;
}
let licenseTrendIconHtml = `<i class="bi bi-dash-lg text-muted"></i>`;
if (app.license.includes('Downgraded')) {
    licenseTrendIconHtml = `<i class="bi bi-graph-down text-danger"></i>`;
} else if (app.license.includes('Upgraded')) {
    licenseTrendIconHtml = `<i class="bi bi-graph-up text-success"></i>`;
} else {
    licenseTrendIconHtml = `<i class="bi bi-dash-lg text-muted"></i>`;
}

// --- START: NEW FIXED USAGE LOGIC ---

let usageCategory = '';
let usageBackgroundColorClass = '';
let trendPercentage = 0;

// 1. Get M1 and M6 seat counts
const m1Seats = app.monthlyData[0].seats;
const m6Seats = app.monthlyData[app.monthlyData.length - 1].seats;

// 2. Calculate percentage change
if (m1Seats > 0) {
    trendPercentage = ((m6Seats - m1Seats) / m1Seats) * 100;
} else if (m6Seats > 0) {
    trendPercentage = 100.0; // Started from 0, so it's a 100% increase
} else {
    trendPercentage = 0.0; // Started at 0 and ended at 0
}

// 3. Assign category and color based on percentage
let styleOverride = '';
if (trendPercentage < -10) {
    usageCategory = 'Major Decline';
    usageBackgroundColorClass = 'bg-usage-Major-Decline';
} else if (trendPercentage < 0) {
    usageCategory = 'Minor Decline';
    usageBackgroundColorClass = 'bg-usage-Minor-Decline';
} else if (trendPercentage === 0) {
    usageCategory = 'Neutral';
    usageBackgroundColorClass = 'bg-usage-Neutral-Usage';
    styleOverride = 'style="width: 65px;"';
} else if (trendPercentage <= 10) {
    usageCategory = 'Minor Increase';
    usageBackgroundColorClass = 'bg-usage-Minor-Increase';
} else { // > 10
    usageCategory = 'Major Increase';
    usageBackgroundColorClass = 'bg-usage-Major-Increase';
}

// 4. Define the trend icon and class based on the same percentage
let trendClass = 'text-muted';
let trendIcon = 'bi-dash-lg';

if (trendPercentage < 0) {
    trendClass = 'text-danger';
    trendIcon = 'bi-graph-down';
} else if (trendPercentage > 0) {
    trendClass = 'text-success';
    trendIcon = 'bi-graph-up';
}

// 5. Build the HTML for the trend icon
const usageTrendHtml = `
    <div class="usage-trend-container ${trendClass}">
        <i class="bi ${trendIcon}"></i>
        <span>${trendPercentage.toFixed(1)}%</span>
    </div>
`;

// 6. Build the final HTML for the "Usage" column cell
const usageHtml = `
    <div class="usage-cell-content">
        <div class="usage-bar-container ${usageBackgroundColorClass}">
            <span class="usage-bar-text">${usageCategory}</span>
        </div>
        ${usageTrendHtml}
    </div>
`;
// --- END: NEW FIXED USAGE LOGIC ---

const currentMonthData = app.monthlyData[app.monthlyData.length - 1];
const currentArr = currentMonthData ? currentMonthData.revenue : 'N/A';
let arrTrendIconHtml = `<i class="bi bi-dash-lg text-muted"></i>`;
let arrPercentageChangeHtml = '';
let arrPercentageClass = 'text-muted';
if (app.monthlyData.length >= 2) {
    const previousMonthData = app.monthlyData[app.monthlyData.length - 2];
    const currentArrValue = currentMonthData.revenue;
    const previousArr = previousMonthData.revenue;
    if (previousArr !== 0) {
        const percentageChange = ((currentArrValue - previousArr) / previousArr) * 100;
        arrPercentageChangeHtml = `${percentageChange.toFixed(1)}%`;
        if (percentageChange > 0) {
            arrTrendIconHtml = `<i class="bi bi-graph-up text-success"></i>`;
            arrPercentageClass = 'text-success';
            arrPercentageChangeHtml = `+${arrPercentageChangeHtml}`;
        } else if (percentageChange < 0) {
            arrTrendIconHtml = `<i class="bi bi-graph-down text-danger"></i>`;
            arrPercentageClass = 'text-danger';
        } else {
            // Replaced dash icon with "Neutral" pill for 0.0% change
            arrTrendIconHtml = `
                <div class="usage-bar-container bg-usage-Neutral-Usage" style="width: 65px; height: 25px;">
                    <span class="usage-bar-text">Neutral</span>
                </div>
            `;
            arrPercentageClass = 'text-muted';
            arrPercentageChangeHtml = '0.0%'; // Ensure it still shows 0.0%
        }
    } else if (currentArrValue > 0) {
        arrPercentageChangeHtml = `+Inf%`;
        arrPercentageClass = 'text-success';
        arrTrendIconHtml = `<i class="bi bi-graph-up text-success"></i>`;
    } else {
        arrPercentageChangeHtml = `N/A`;
        arrPercentageClass = 'text-muted';
    }
} else {
    arrPercentageChangeHtml = 'N/A';
    arrPercentageClass = 'text-muted';
}
const arrRevenueCellContent = `
<span style="color: #1a2b4d; font-weight: 700;">$${currentArr}</span><br>
<span class="${arrPercentageClass} arr-percentage-text">${arrPercentageChangeHtml}</span>
`;
let appStatusArrowHtml = '';
if (app.license.includes('Upgraded')) {
    appStatusArrowHtml = `<i class="bi bi-arrow-up text-success app-status-arrow"></i>`;
} else if (app.license.includes('Downgraded')) {
    appStatusArrowHtml = `<i class="bi bi-arrow-down text-danger app-status-arrow"></i>`;
} else {
    appStatusArrowHtml = `<i class="bi bi-arrow-right text-primary app-status-arrow"></i>`;
}
const appStatus = app.status;

// New: Inactive status and cancellation reason display
let inactiveInfoHtml = '';
if (appStatus === 'Inactive' && app.inactiveMonths && app.cancellationReason) {
    // Check for pluralization (month vs months)
    const monthText = app.inactiveMonths === 1 ? 'month' : 'months';
    
    inactiveInfoHtml = `
        <div class="inactive-info-container">
            <span class="inactive-months-text">${app.inactiveMonths} ${monthText} inactive</span>
            <i class="bi bi-info-circle-fill info-tooltip-icon">
                <div class="cancellation-reason-tooltip">
                    ${app.cancellationReason}
                </div>
            </i>
        </div>
    `;
}
row.innerHTML = `
<td><span class="expand-toggle-arrow">▼</span></td>
<td style="min-width: 200px;">
${appStatusArrowHtml}${app.application} ${getStatusTagHtml(appStatus)}<br>
<span class="application-category">${app.category} <span class="vertical-bar-in-category">|</span> ${randomId}</span>
${inactiveInfoHtml} <!-- Insert inactive info here -->
</td>
<td>${usageHtml}</td>
<td>${arrRevenueCellContent}</td>
<td>${arrTrendIconHtml}</td>
<td>${app.seats}</td>
<td>${licenseTrendIconHtml} ${app.license}</td>
<td class="text-center">
${competitorsCellContent}
</td>
<td>N/A</td>
<td>
<div class="action-dropdown-wrapper">
<i class="bi bi-exclamation-triangle text-danger action-toggle-element"></i>
<div class="action-dropdown-menu">
<button class="glass-button email-peer">
<i class="bi bi-envelope-fill"></i> Email to Peer
</button>
<button class="glass-button email-client">
<i class="bi bi-person-lines-fill"></i> Email to Client
</button>
<button class="glass-button connect-us" data-subscription-id="${app.id}" data-subscription-name="${app.application}">
<i class="bi bi-chat-text-fill"></i> Chat with Agent (<span class="ai-text">AI</span>)
</button>
<button class="glass-button store-link" onclick="window.open('https://store.zoho.com/zstore#customers', '_blank')">
<i class="bi bi-shop"></i> Store
</button>
<button class="glass-button mics-link">
<i class="bi bi-shop"></i></i> MICS
</button>
</div>
</div>
</td>
`;
const actionToggleElement = row.querySelector('.action-toggle-element');
const actionDropdownMenu = row.querySelector('.action-dropdown-menu');
if (actionToggleElement && actionDropdownMenu) {
actionToggleElement.addEventListener('click', (event) => {
event.stopPropagation();
if (currentOpenDropdown && currentOpenDropdown !== actionDropdownMenu) {
    closeAllDropdowns();
}
closeAllThreatPopups();
actionDropdownMenu.classList.toggle('show');
if (actionDropdownMenu.classList.contains('show')) {
    currentOpenDropdown = actionDropdownMenu;
    currentOpenDropdownToggle = actionToggleElement;
} else {
    closeAllDropdowns();
}
});
// Find this block inside the renderApplicationTable function and replace it.
actionDropdownMenu.querySelectorAll('.glass-button').forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevents the row from collapsing

        // ADDED: Check which email button was clicked
        if (button.classList.contains('email-peer')) {
            showEmailPopup('peer');
        } else if (button.classList.contains('email-client')) {
            showEmailPopup('client');
        } 
        // This part for the chat button was already there
        else if (button.classList.contains('connect-us')) {
            const subscriptionId = button.dataset.subscriptionId;
            const subscriptionName = button.dataset.subscriptionName;
            openSubscriptionChatModal(subscriptionId, subscriptionName, event.target);
        }
        
        closeAllDropdowns(); // Close dropdown after action
    });
});
}
const threatPopupWrapper = row.querySelector('.threat-popup-wrapper');
if (threatPopupWrapper) {
const threatTrigger = threatPopupWrapper.querySelector('.threat-tag-display') || threatPopupWrapper.querySelector('.threat-more-indicator');
const threatPopup = threatPopupWrapper.querySelector('.threat-popup-container');
if (threatTrigger && threatPopup) {
threatTrigger.addEventListener('click', (event) => {
    event.stopPropagation();
    if (currentOpenThreatPopup && currentOpenThreatPopup !== threatPopup) {
        closeAllThreatPopups();
    }
    closeAllDropdowns();
    threatPopup.classList.toggle('show');
    if (threatPopup.classList.contains('show')) {
        currentOpenThreatPopup = threatPopup;
        currentOpenThreatPopupToggle = threatTrigger;
    } else {
        closeAllThreatPopups();
    }
});
}
}
row.addEventListener('click', (event) => {
if (event.target.closest('.action-dropdown-wrapper') || event.target.closest('.threat-popup-wrapper')) {
return;
}
closeAllDropdowns();
closeAllThreatPopups();
const appId = app.id;
const currentExpandedId = expandedRowId;
const arrowSpan = row.querySelector('.expand-toggle-arrow');
if (appId === currentExpandedId) {
const expandedRowElement = document.querySelector(`tr.expanded-row[data-parent-app-id="${appId}"]`);
if (expandedRowElement) {
    expandedRowElement.remove();
}
expandedRowId = null;
if (arrowSpan) arrowSpan.textContent = '▼';
} else {
if (currentExpandedId !== null) {
    const previousExpandedRowElement = document.querySelector(`tr.expanded-row[data-parent-app-id="${currentExpandedId}"]`);
    if (previousExpandedRowElement) {
        previousExpandedRowElement.remove();
    }
    const previousArrow = document.querySelector(`tr[data-app-id="${currentExpandedId}"] .expand-toggle-arrow`);
    if (previousArrow) previousArrow.textContent = '▼';
}
const expandedRow = document.createElement('tr');
expandedRow.className = 'expanded-row';
expandedRow.setAttribute('data-parent-app-id', appId);

const isAnomalous = anomaliesFilteredData.some(item => item.id === app.id);
let actionsSectionHtml = '';
let usageLicenseHistoryColClass = 'col-md-6';
let competitorAnomalyColClass = 'col-md-3';

// Condition for showing the Actions section: only if the app is an anomaly AND the active section is 'anomalies'
if (isAnomalous && activeSection === 'anomalies') {
    let threatCompetitors = [];
    const threatList = ['Active campaign', 'Zoom', 'Microsoft Teams', 'Google Drive', 'Sqauare POS'];
    const crossSellList = ['Mailchimp', 'Dropbox'];
    if (app.competitors && app.competitors.length > 0) {
        app.competitors.forEach(comp => {
            // A competitor is a threat if it's on the threat list OR not on the cross-sell list.
            if (threatList.includes(comp) || !crossSellList.includes(comp)) {
                threatCompetitors.push(comp);
            }
        });
    }
    const threatCompetitorsCount = threatCompetitors.length;

    const threatCountBadge = threatCompetitorsCount > 0
        ? `<span class="badge bg-danger rounded-pill">${threatCompetitorsCount}</span>`
        : '';
    
    // Encode threats for data attribute
    const threatsDataAttribute = `data-threats='${JSON.stringify(threatCompetitors)}'`;

    let escalatedTickets = [];
            const relevantDept = ticketDetailsData.find(dept => dept.id === app.relevantDepartmentId);
            if (relevantDept) {
                const openTickets = relevantDept.tickets.filter(tkt => tkt.status === 'Open');
                escalatedTickets = openTickets.filter(tkt => tkt.tags.includes('Escalation Request'));
            }
            const escalatedTicketsCount = escalatedTickets.length;
            const escalatedTicketsBadge = escalatedTicketsCount > 0
            ? `<span class="badge bg-danger rounded-pill">${escalatedTicketsCount}</span>`
            : '';
    
          // Encode tickets for data attribute
                const ticketsDataAttribute = `data-tickets='${JSON.stringify(escalatedTickets)}'`;
    
        // === START: NEW "INACTIVE" BUTTON LOGIC ===
        let inactiveAppButtonHtml = '';
        if (app.status === 'Inactive') {          
            inactiveAppButtonHtml = `
                <button class="glass-button inactive-app-trigger d-flex justify-content-between align-items-center" data-app-id="${app.id}" data-app-name="${app.application}">
                    <span>
                        <i class="bi bi-pause-circle"></i> Inactive App
                    </span>
                </button>
            `;
        }

    const resolvedItemsForApp = resolvedItemsHistory.filter(item => item.appName === app.application);
    const showResolvedIcon = resolvedItemsForApp.length > 0 ? 'inline-block' : 'none';


    actionsSectionHtml = `
        <div class="col-md-3 p-2 d-flex flex-column justify-content-between">
            <div>
                 <h6 class="mb-2 fw-bold d-flex justify-content-between align-items-center">
                    <span>Resolve (Anomalies)</span>
                    <i class="bi bi-check-circle-fill text-success resolved-history-trigger animated" style="cursor: pointer; display: ${showResolvedIcon};" data-app-name="${app.application}" data-tooltip="Resolved History"></i>
                </h6>
                <div class="action-dropdown-wrapper">
                    <div class="action-dropdown-menu show">
                        <button class="glass-button threat-link threat-details-trigger d-flex justify-content-between align-items-center" ${threatsDataAttribute} data-app-id="${app.id}" ${threatCompetitorsCount === 0 ? 'disabled' : ''}>
                            <span>
                                <i class="bi bi-exclamation-octagon"></i> Competitors (<strong>Threat</strong>)
                            </span>
                            ${threatCountBadge}
                        </button>
                    <button class="glass-button desk-tickets-link escalated-tickets-trigger d-flex justify-content-between align-items-center" ${ticketsDataAttribute} data-app-id="${app.id}" ${escalatedTicketsCount === 0 ? 'disabled' : ''}>
                        <span> 
                            <img src="images/Zoho_Desk_img-removebg-preview.png" alt="desk icon" style="width: 20px; height: 20px; vertical-align: middle; margin-right: 8px;"> Tickets (<strong>Escalated</strong>)
                        </span>
                        ${escalatedTicketsBadge}
                            </button>
                            ${inactiveAppButtonHtml}
                    </div>
                </div>
            </div>
        </div>
    `;
    usageLicenseHistoryColClass = 'col-md-6';
    competitorAnomalyColClass = 'col-md-3';
} else {
    // Adjust column widths if "Actions" section is not present
    usageLicenseHistoryColClass = 'col-md-8';
    competitorAnomalyColClass = 'col-md-4';
}


const getRandomUsageTrend = () => {
    const trends = [
        { icon: 'bi-graph-up', class: 'text-success' },
        { icon: 'bi-graph-down', class: 'text-danger' },
        { icon: 'bi-dash-lg', class: 'text-muted' }
    ];
    return trends[Math.floor(Math.random() * trends.length)];
};
let monthlyDataHtml = app.monthlyData.map((month, index) => {
    const usageValue = parseInt(month.change);
    const usageTrend = usageValue > 0 ? { icon: 'bi-graph-up', class: 'text-success' } : usageValue < 0 ? { icon: 'bi-graph-down', class: 'text-danger' } : { icon: 'bi-dash-lg', class: 'text-muted' };
    let changeIcon = '';
    let changeClass = 'text-muted';
    if (month.change.includes('+')) {
        changeIcon = `<i class="bi bi-graph-up text-success"></i>`;
        changeClass = 'text-success';
    } else if (month.change.includes('-')) {
        changeIcon = `<i class="bi bi-graph-down text-danger"></i>`;
        changeClass = 'text-danger';
    } else {
        changeIcon = `<i class="bi bi-dash-lg text-muted"></i>`;
    }

    let revenueTrendIcon = '';
    let revenueTrendClass = 'text-muted';
    let revenuePercentageChange = 'N/A';
    if (index > 0) {
        const previousMonthRevenue = app.monthlyData[index - 1].revenue;
        const currentMonthRevenue = month.revenue;
        if (previousMonthRevenue !== 0) {
            const percentage = ((currentMonthRevenue - previousMonthRevenue) / previousMonthRevenue) * 100;
            revenuePercentageChange = `${percentage.toFixed(1)}%`;
            if (percentage > 0) {
                revenueTrendIcon = `<i class="bi bi-graph-up text-success"></i>`;
                revenueTrendClass = 'text-success';
                revenuePercentageChange = `+${revenuePercentageChange}`;
            } else if (percentage < 0) {
                revenueTrendIcon = `<i class="bi bi-graph-down text-danger"></i>`;
                revenueTrendClass = 'text-danger';
            } else {
                revenueTrendIcon = `<i class="bi bi-dash-lg text-muted"></i>`;
                revenueTrendClass = 'text-muted';
            }
        } else if (currentMonthRevenue > 0) {
            revenuePercentageChange = `+Inf%`;
            revenueTrendIcon = `<i class="bi bi-graph-up text-success"></i>`;
            revenueTrendClass = 'text-success';
        } else {
            revenuePercentageChange = `N/A`;
            revenueTrendIcon = `<i class="bi bi-dash-lg text-muted"></i>`;
            revenueTrendClass = 'text-muted';
        }
    } else {
        revenuePercentageChange = 'N/A';
        revenueTrendIcon = `<i class="bi bi-dash-lg text-muted"></i>`;
        revenueTrendClass = 'text-muted';
    }
    return `
<tr>
<td>${month.month}</td>
<td>${usageValue}</td>
<td><i class="bi ${usageTrend.icon} ${usageTrend.class}"></i></td>
<td>${month.seats}</td>
<td class="${changeClass}">${changeIcon} ${month.change}</td>
<td>
<span style="color: #1a2b4d; font-weight: 700;">$${month.revenue}</span><br>
<span class="${revenueTrendClass} arr-percentage-text">${revenuePercentageChange}</span>
</td>
<td>${revenueTrendIcon}</td>
</tr>
`;
}).join('');
let competitorIntegrationsContent = '';
if (app.competitors && app.competitors.length > 0) {
    competitorIntegrationsContent = app.competitors.map(comp => `<li>${comp}</li>`).join('');
} else {
    competitorIntegrationsContent = `No competitor integrations detected.`;
}
let anomaliesHtml = '';
const detectedAnomalies = [];
let isAppCritical = false;
if (anomaliesCriticalOnlyData.some(item => item.id === app.id)) {
    isAppCritical = true;
    const latestMonthChange = app.monthlyData.length >= 6 ? parseInt(app.monthlyData[5].change) : null;
    if (app.license.includes('Downgraded') && latestMonthChange !== null && latestMonthChange < 0) {
        detectedAnomalies.push(`<li>Recent Significant Seat Loss</li>`);
    }
    if (app.usage === 'Low' && app.license.includes('Downgraded')) {
        detectedAnomalies.push(`<li>Very Low Usage with Downgraded License</li>`);
    }
    let totalRecentDecline = 0;
    const startIndex = app.monthlyData.length - 3;
    const relevantMonths = startIndex >= 0 ? app.monthlyData.slice(startIndex) : [];
    if (relevantMonths.length === 3) {
        relevantMonths.forEach(month => {
            const change = parseInt(month.change);
            if (change < 0) {
                totalRecentDecline += change;
            }
        });
    }
    if (totalRecentDecline <= -3) {
        detectedAnomalies.push(`<li>Consistent Seat Decline</li>`);
    }
    if (app.paymentFailureCount >= 5) {
        detectedAnomalies.push(`<li>Payment Failure: ${app.paymentFailureCount} (Critical)</li>`);
    }
    if (app.pauseScheduledCount >= 5) {
        detectedAnomalies.push(`<li>Pause Scheduled: ${app.pauseScheduledCount} (Critical)</li>`);
    }
    let maxSeatsLast6MonthsForDisplay = 0;
    if (app.monthlyData.length >= 6) {
        const seatsInLast6Months = app.monthlyData.slice(-6).map(m => m.seats);
        maxSeatsLast6MonthsForDisplay = Math.max(...seatsInLast6Months);
    }
    if (maxSeatsLast6MonthsForDisplay > 0 && (app.seats / maxSeatsLast6MonthsForDisplay) < 0.40) {
        detectedAnomalies.push(`<li>Seats Utilization < 40% of max in last 6 months (Critical)</li>`);
    }
    const totalInactiveAppsForDisplay = appData.filter(a => a.status === 'Inactive').length;
    if (totalInactiveAppsForDisplay > 4) {
        detectedAnomalies.push(`<li>More than 4 applications are Inactive (Critical)</li>`);
    }
    if (app.monthlyData.length >= 6) {
        const m6Revenue = app.monthlyData[5].revenue;
        const m3Revenue = app.monthlyData[2].revenue;
        if (m3Revenue > 0) {
            const percentageChange = (m6Revenue - m3Revenue) / m3Revenue;
            if (percentageChange < -0.40) {
                detectedAnomalies.push(`<li>ARR decreased by 40% or more (M3 to M6) (Critical)</li>`);
            }
        }
    }
    const relevantDepartmentForDisplay = ticketDetailsData.find(dept => dept.id === app.relevantDepartmentId);
    if (relevantDepartmentForDisplay && relevantDepartmentForDisplay.openStatus > 3) {
        detectedAnomalies.push(`<li>Relevant department (${relevantDepartmentForDisplay.department}) has > 3 open tickets (Critical)</li>`);
    }
    if (relevantDepartmentForDisplay) {
        const openTicketsInDeptForDisplay = relevantDepartmentForDisplay.tickets.filter(tkt => tkt.status === 'Open');
        const hasCriticalProblematicTagForDisplay = openTicketsInDeptForDisplay.some(tkt =>
            tkt.tags.some(tag => ['cancel threat/churn threat', 'competitor switch', 'service outage/emergency', 'security/data breach'].includes(tag.toLowerCase().replace(/ /g, '-').replace(/\//g, '-')))
        );
        if (hasCriticalProblematicTagForDisplay) {
            detectedAnomalies.push(`<li>Relevant department (${relevantDepartmentForDisplay.department}) has critical problematic tags (Critical)</li>`);
        }
    }
}
if (anomaliesWarningOnlyData.some(item => item.id === app.id) && !isAppCritical) {
    if (app.paymentFailureCount > 0 && app.paymentFailureCount < 5) {
        detectedAnomalies.push(`<li>Payment Failure: ${app.paymentFailureCount} (Warning)</li>`);
    }
    if (app.pauseScheduledCount > 0 && app.pauseScheduledCount < 5) {
        detectedAnomalies.push(`<li>Pause Scheduled: ${app.pauseScheduledCount} (Warning)</li>`);
    }
    let maxSeatsLast6MonthsForDisplay = 0;
    if (app.monthlyData.length >= 6) {
        const seatsInLast6Months = app.monthlyData.slice(-6).map(m => m.seats);
        maxSeatsLast6MonthsForDisplay = Math.max(...seatsInLast6Months);
    }
    if (maxSeatsLast6MonthsForDisplay > 0 && (app.seats / maxSeatsLast6MonthsForDisplay) < 0.70) {
        detectedAnomalies.push(`<li>Seats Utilization < 70% of max in last 6 months (Warning)</li>`);
    }
    const totalInactiveAppsForDisplay = appData.filter(a => a.status === 'Inactive').length;
    if (totalInactiveAppsForDisplay > 2) {
        detectedAnomalies.push(`<li>More than 2 applications are Inactive (Warning)</li>`);
    }
    if (app.monthlyData.length >= 6) {
        const m6Revenue = app.monthlyData[5].revenue;
        const m3Revenue = app.monthlyData[2].revenue;
        if (m3Revenue > 0) {
            const percentageChange = (m6Revenue - m3Revenue) / m3Revenue;
            if (percentageChange < -0.30) {
                detectedAnomalies.push(`<li>ARR decreased by 30% or more (M3 to M6) (Warning)</li>`);
            }
        }
    }
    const relevantDepartmentForDisplay = ticketDetailsData.find(dept => dept.id === app.relevantDepartmentId);
    if (relevantDepartmentForDisplay && relevantDepartmentForDisplay.openStatus > 1) {
        detectedAnomalies.push(`<li>Relevant department (${relevantDepartmentForDisplay.department}) has > 1 open ticket (Warning)</li>`);
    }
    if (relevantDepartmentForDisplay) {
        const openTicketsInDeptForDisplay = relevantDepartmentForDisplay.tickets.filter(tkt => tkt.status === 'Open');
        const hasWarningProblematicTagForDisplay = openTicketsInDeptForDisplay.some(tkt =>
            tkt.tags.some(tag => ['dissatisfaction/complaint', 'escalation request', 'repeated follow-up', 'slow support / delay', 'feature gap', 'product regret', 'evaluating alternatives'].includes(tag.toLowerCase().replace(/ /g, '-').replace(/\//g, '-')))
        );
        if (hasWarningProblematicTagForDisplay) {
            detectedAnomalies.push(`<li>Relevant department (${relevantDepartmentForDisplay.department}) has problematic tags (Warning)</li>`);
        }
    }
}
if (detectedAnomalies.length > 0) {
    anomaliesHtml = `
<p class="mb-1 fw-bold text-danger">
<i class="bi bi-exclamation-triangle-fill me-1"></i> Anomalies Detected:
</p>
<ul class="list-unstyled small ps-3">
${detectedAnomalies.join('')}
</ul>
`;
} else {
    anomaliesHtml = `
<p class="mb-1 fw-bold text-success">
<i class="bi bi-check-circle-fill me-1"></i> No Anomalies Detected
</p>
`;
}
expandedRow.innerHTML = `
<td colspan="10">
<div class="expanded-content p-3 bg-light rounded-bottom d-flex flex-wrap align-items-stretch">
<div class="${usageLicenseHistoryColClass} p-2"> <!-- Changed to col-md-6 -->
<h6 class="mb-2 fw-bold">Usage & License History</h6>
<div class="table-responsive">
<table class="table table-sm monthly-data-table mb-0">
    <thead>
        <tr>
            <th>Month</th>
            <th>Usage</th>
            <th>Trend</th>
            <th>License</th>
            <th>Trend</th>
            <th>ARR</th>
            <th>Trend</th>
        </tr>
    </thead>
    <tbody>
        ${monthlyDataHtml}
    </tbody>
</table>
</div>
</div>
<div class="${competitorAnomalyColClass} p-2 border-start border-end"> <!-- Changed to col-md-3 -->
<div class="expanded-column-header">
        <h6 class="mb-2 fw-bold">Competitor Integrations</h6>
        
        <div class="nps-score-expanded-container">
            <span class="nps-score-expanded-value">${app.npsScore !== undefined ? app.npsScore : 'N/A'}</span>
            <span class="nps-score-expanded-pill">NPS Score</span>
        </div>
    </div>
<p class="small text-muted mb-3">
${competitorIntegrationsContent}
</p>
<h6 class="mb-2 fw-bold">Zoho Conversion Opportunities</h1>
<p class="small text-dark">${app.monthlyData[app.monthlyData.length - 1].zohoConversionOpportunities}</p>
${anomaliesHtml}
</div>
${actionsSectionHtml} <!-- Conditionally included -->
</div>
</td>
`;
row.insertAdjacentElement('afterend', expandedRow);

// Add listener for the new threat popup trigger
const threatDetailsTrigger = expandedRow.querySelector('.threat-details-trigger');
if (threatDetailsTrigger) {
    threatDetailsTrigger.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent row from collapsing
        const threats = JSON.parse(e.currentTarget.dataset.threats);
        const appId = e.currentTarget.dataset.appId;
        showThreatDetailsPopup(threats, appId);
    });
}
 // Add listener for the new escalated tickets trigger
        const escalatedTicketsTrigger = expandedRow.querySelector('.escalated-tickets-trigger');
        if (escalatedTicketsTrigger) {
            escalatedTicketsTrigger.addEventListener('click', (e) => {
                e.stopPropagation();
                const tickets = JSON.parse(e.currentTarget.dataset.tickets);
                const appId = e.currentTarget.dataset.appId;
                showEscalatedTicketsPopup(tickets, appId);
            });
        }
        // === START: ADD THIS LISTENER ===
    const inactiveAppTrigger = expandedRow.querySelector('.inactive-app-trigger');
    if (inactiveAppTrigger) {
        inactiveAppTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const appId = e.currentTarget.dataset.appId;
            const appName = e.currentTarget.dataset.appName;
            showInactiveAppPopup(appName, appId);
        });
    }
// Add listener for the new resolved history trigger
const resolvedHistoryTrigger = expandedRow.querySelector('.resolved-history-trigger');
if (resolvedHistoryTrigger) {
    resolvedHistoryTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const appName = e.currentTarget.dataset.appName;
        showResolvedHistoryPopup(appName, e.currentTarget);
    });
}

expandedRowId = appId;
if (arrowSpan) arrowSpan.textContent = '▲';
// Apply animation to buttons in the expanded row's dropdown
if (isAnomalous && activeSection === 'anomalies') {
    const expandedRowDropdownMenu = expandedRow.querySelector('.action-dropdown-menu');
    if (expandedRowDropdownMenu) {
        expandedRowDropdownMenu.querySelectorAll('.glass-button').forEach((button, index) => {
            button.style.animation = `fadeInSlideUp 0.3s ease-out forwards ${index * 0.1}s`;
        });
        // Add event listeners for the buttons directly
        expandedRowDropdownMenu.querySelectorAll('button.connect-us').forEach(button => {
            button.addEventListener('click', (event) => {
                event.stopPropagation();
                console.log(`${button.textContent.trim()} clicked from expanded row!`);
                if (button.classList.contains('connect-us')) {
                    const subscriptionId = button.dataset.subscriptionId;
                    const subscriptionName = button.dataset.subscriptionName;
                    console.log(`Opening chat for Subscription ID: ${subscriptionId}, Name: ${subscriptionName}`);
                    openSubscriptionChatModal(subscriptionId, subscriptionName, event.target);
                }
                // No need to close dropdown as it's always visible
            });
        });
    }
}
}
});
applicationTableBody.appendChild(row);
});
}
function renderTicketDetailsTable() {
if (!ticketDetailsTableBody) {
console.error("Ticket details table body element (ticketDetailsTableBody) not found!");
return;
}
ticketDetailsTableBody.innerHTML = '';
expandedTicketRowId = null;
if (ticketDetailsData.length === 0) {
const noDataRow = document.createElement('tr');
noDataRow.innerHTML = `<td colspan="5" class="text-center py-4 text-muted">No ticket details available.</td>`;
ticketDetailsTableBody.appendChild(noDataRow);
return;
}
ticketDetailsData.forEach(ticket => {
const row = document.createElement('tr');
row.setAttribute('data-ticket-dept-id', ticket.id);
row.className = 'clickable-row';
row.innerHTML = `
<td><span class="ticket-expand-toggle-arrow">▼</span></td>
<td>${ticket.department}</td>
<td>${ticket.openStatus}</td>
<td>${ticket.closedStatus}</td>
<td>${ticket.openTicketOwnership}</td>
`;
row.addEventListener('click', (event) => {
const deptId = ticket.id;
const currentExpandedTicketId = expandedTicketRowId;
const arrowSpan = row.querySelector('.ticket-expand-toggle-arrow');
if (deptId === currentExpandedTicketId) {
const expandedRowElement = document.querySelector(`tr.ticket-detail-expanded-row[data-parent-dept-id="${deptId}"]`);
if (expandedRowElement) {
    expandedRowElement.remove();
    row.classList.remove('expanded');
}
expandedTicketRowId = null;
if (arrowSpan) arrowSpan.textContent = '▼';
} else {
if (currentExpandedTicketId !== null) {
    const previousExpandedRowElement = document.querySelector(`tr.ticket-detail-expanded-row[data-parent-dept-id="${currentExpandedTicketId}"]`);
    if (previousExpandedRowElement) {
        previousExpandedRowElement.remove();
        const prevParentRow = document.querySelector(`tr[data-ticket-dept-id="${currentExpandedTicketId}"]`);
        if(prevParentRow) prevParentRow.classList.remove('expanded');
    }
    const previousArrow = document.querySelector(`tr[data-ticket-dept-id="${currentExpandedTicketId}"] .ticket-expand-toggle-arrow`);
    if (previousArrow) previousArrow.textContent = '▼';
}
const expandedTicketRow = document.createElement('tr');
expandedTicketRow.className = 'ticket-detail-expanded-row';
expandedTicketRow.setAttribute('data-parent-dept-id', deptId);
row.classList.add('expanded');
const openTickets = ticket.tickets.filter(tkt => tkt.status === 'Open');
const closedTickets = ticket.tickets.filter(tkt => tkt.status === 'Closed');
let openTicketsHtml = '';
if (openTickets && openTickets.length > 0) {
    openTicketsHtml = openTickets.map(tkt => {
        const currentTicketTags = assignTagsFromSummary(tkt.summary);
        const tagsHtml = currentTicketTags.map(tag => {
            const classFriendlyTag = tag.toLowerCase().replace(/ /g, '-').replace(/\//g, '-');
            return `<span class="ticket-tag tag-${classFriendlyTag}">${tag}</span>`;
        }).join('');
        return `
<li class="ticket-item">
<a href="${tkt.url}" target="_blank" class="ticket-id text-primary">${tkt.id}</a>
<span class="ticket-summary">${tkt.summary}</span>
<div class="ticket-tags">${tagsHtml}</div>
</li>
`;
    }).join('');
} else {
    openTicketsHtml = `<p class="text-muted small mb-0">No open tickets for this department.</p>`;
}
let closedTicketsHtml = '';
if (closedTickets && closedTickets.length > 0) {
    closedTicketsHtml = closedTickets.map(tkt => {
        const tagsHtml = assignTagsFromSummary(tkt.summary).map(tag => {
            const classFriendlyTag = tag.toLowerCase().replace(/ /g, '-').replace(/\//g, '-');
            return `<span class="ticket-tag tag-${classFriendlyTag}">${tag}</span>`;
        }).join('');
        return `
<li class="ticket-item">
<a href="${tkt.url}" target="_blank" class="ticket-id text-primary">${tkt.id}</a>
<span class="ticket-summary">${tkt.summary}</span>
<div class="ticket-tags">${tagsHtml}</div>
</li>
`;
    }).join('');
} else {
    closedTicketsHtml = `<p class="text-muted small mb-0">No closed tickets for this department.</p>`;
}
expandedTicketRow.innerHTML = `
<td colspan="5">
<div class="ticket-dropdown-content">
<div class="ticket-dropdown-section summary-highlight">
<strong>Executive Summary (Open Tickets) </strong>
<p class="small text-dark mb-0">${ticket.executiveSummary}</p>
</div>
<div class="ticket-dropdown-section">
<strong>Open Tickets:</strong>
<ul class="ticket-list">
${openTicketsHtml}
</ul>
</div>
<div class="ticket-dropdown-section">
<strong>Closed Tickets:</strong>
<ul class="ticket-list">
${closedTicketsHtml}
</ul>
</div>
</div>
</td>
`;
row.insertAdjacentElement('afterend', expandedTicketRow);
expandedTicketRowId = deptId;
if (arrowSpan) arrowSpan.textContent = '▲';
}
});
ticketDetailsTableBody.appendChild(row);
});
}
// REPLACE your entire switchTab function with this one
function switchTab(selectedCategory, dataToRender = null) {
    closeAllDropdowns();
    closeAllThreatPopups();
    clearAllButtonHighlights();
    clearAllArrSegmentHighlights(); 
    currentArrFilter = 'all'; 
    activeSection = selectedCategory;

    if (crossSellFlashMessageContainer) {
        if (selectedCategory === 'cross-sell') {
            crossSellFlashMessageContainer.classList.add('visible');
        } else {
            crossSellFlashMessageContainer.classList.remove('visible');
        }
    }

    if (applicationTableContainer && applicationTableContainer.style.display !== 'none') {
        applicationTableContainer.classList.add('fade-out');
    }
    if (ticketDetailsTableContainer && ticketDetailsTableContainer.style.display !== 'none') {
        ticketDetailsTableContainer.classList.add('fade-out');
    }
    
    setTimeout(() => {
        if (applicationTableContainer) {
            applicationTableContainer.style.display = 'none';
            if (applicationTableBody) applicationTableBody.innerHTML = '';
            if (applicationTableHeader) {
                applicationTableHeader.style.display = 'none';
            }
        }
        if (ticketDetailsTableContainer) {
            ticketDetailsTableContainer.style.display = 'none';
        }

        switch (selectedCategory) {
            case 'cross-sell':
                if (crossSellBtn) crossSellBtn.classList.add('active');
                if (applicationTableContainer) {
                    applicationTableContainer.style.display = 'block';
                    applicationTableContainer.classList.remove('fade-out');
                    applicationTableContainer.classList.add('fade-in');
                    if (applicationTableHeader) {
                        applicationTableHeader.style.display = 'table-header-group';
                    }
                }
                renderApplicationTable(crossSellFilteredData);
                activeSection = 'cross-sell';
                updateCounts();
                break;
            case 'all-apps':
                if (allAppsBtn) allAppsBtn.classList.add('active');
                if (applicationTableContainer) {
                    applicationTableContainer.style.display = 'block';
                    applicationTableContainer.classList.remove('fade-out');
                    applicationTableContainer.classList.add('fade-in');
                    if (applicationTableHeader) {
                        applicationTableHeader.style.display = 'table-header-group';
                    }
                }
                updateDashboard(appData); 
                activeSection = 'all-apps';
                break;
            case 'downgrades':
                if (downgradesBtn) downgradesBtn.classList.add('active');
                if (applicationTableContainer) {
                    applicationTableContainer.style.display = 'block';
                    applicationTableContainer.classList.remove('fade-out');
                    applicationTableContainer.classList.add('fade-in');
                    if (applicationTableHeader) {
                        applicationTableHeader.style.display = 'table-header-group';
                    }
                }
                renderApplicationTable(downgradesFilteredData);
                activeSection = 'downgrades';
                updateCounts();
                break;
            case 'competitors':
                if (competitorsBtn) competitorsBtn.classList.add('active');
                if (applicationTableContainer) {
                    applicationTableContainer.style.display = 'block';
                    applicationTableContainer.classList.remove('fade-out');
                    applicationTableContainer.classList.add('fade-in');
                    if (applicationTableHeader) {
                        applicationTableHeader.style.display = 'table-header-group';
                    }
                }
                renderApplicationTable(competitorsFilteredData);
                activeSection = 'competitors';
                updateCounts();
                break;
            case 'anomalies':
                if (anomaliesBtn) anomaliesBtn.classList.add('active');
                if (applicationTableContainer) {
                    applicationTableContainer.style.display = 'block';
                    applicationTableContainer.classList.remove('fade-out');
                    applicationTableContainer.classList.add('fade-in');
                    if (applicationTableHeader) {
                        applicationTableHeader.style.display = 'table-header-group';
                    }
                }
                renderApplicationTable(dataToRender || anomaliesFilteredData);
                activeSection = 'anomalies';
                if (dataToRender !== null) {
                    updateCounts(dataToRender.length);
                } else {
                    updateCounts();
                }
                break;
            case 'ticket-details':
                if (ticketDetailsBtn) ticketDetailsBtn.classList.add('active');
                if (ticketDetailsTableContainer) {
                    ticketDetailsTableContainer.style.display = 'block';
                    ticketDetailsTableContainer.classList.remove('fade-out');
                    ticketDetailsTableContainer.classList.add('fade-in');
                }
                renderTicketDetailsTable();
                activeSection = 'ticket-details';
                updateCounts();
                break;
            default:
                if (allAppsBtn) allAppsBtn.classList.add('active');
                if (applicationTableContainer) {
                    applicationTableContainer.style.display = 'block';
                    applicationTableContainer.classList.remove('fade-out');
                    applicationTableContainer.classList.add('fade-in');
                    if (applicationTableHeader) {
                        applicationTableHeader.style.display = 'table-header-group';
                    }
                }
                renderApplicationTable(allAppsFilteredData);
                activeSection = 'all-apps';
                updateCounts();
                break;
        }
    }, 300); 
}
function clearAllButtonHighlights() {
const allBtns = document.querySelectorAll('.btns');
allBtns.forEach(btn => btn.classList.remove('active'));
}
function clearAllArrSegmentHighlights() {
if (arrLessThan5kSegment) arrLessThan5kSegment.classList.remove('active-arr-filter');
if (arrGreaterThan5kSegment) arrGreaterThan5kSegment.classList.remove('active-arr-filter');
}
function highlightActiveCard(activeCardElementId) {
const allCards = [
criticalIssuesCard,
warningSignsCard,
competitorExposureCard,
downgradeRisksCard,
deskTicketsCard
];
allCards.forEach(card => {
if (card) {
card.classList.remove('active-highlight',
'card-border-critical',
'card-border-warning',
'card-border-competitor',
'card-border-downgrade',
'card-border-tickets');
}
});
if (activeCardElementId) {
const activeCard = document.getElementById(activeCardElementId);
if (activeCard) {
activeCard.classList.add('active-highlight');
console.log(`Adding active-highlight to: ${activeCardElementId}`);
if (activeCardElementId === 'criticalIssuesCard') {
activeCard.classList.add('card-border-critical');
console.log(`Adding card-border-critical to: ${activeCardElementId}`);
} else if (activeCardElementId === 'warningSignsCard') {
activeCard.classList.add('card-border-warning');
console.log(`Adding card-border-warning to: ${activeCardElementId}`);
} else if (activeCardElementId === 'competitorExposureCard') {
activeCard.classList.add('card-border-competitor');
console.log(`Adding card-border-competitor to: ${activeCardElementId}`);
} else if (activeCardElementId === 'downgradeRisksCard') {
activeCard.classList.add('card-border-downgrade');
console.log(`Adding card-border-downgrade to: ${activeCardElementId}`);
} else if (activeCardElementId === 'deskTicketsCard') {
activeCard.classList.add('card-border-downgrade');
console.log(`Adding card-border-tickets (if defined) to: ${activeCardElementId}`);
}
console.log(`Current classes on ${activeCardElementId}: ${activeCard.className}`);
}
}
}
let subscriptionChatModal = null;
let closeSubscriptionChatModalBtn = null;
let chatRefreshBtn = null;
let summaryHoverTimer = null;
let chatModalBody = null;
let chatModalInput = null;
let chatModalSendBtn = null;
function openSubscriptionChatModal(subscriptionId, subscriptionName, clickedButton) {
    if (!subscriptionChatModal) {
        console.error('Chat modal element not found!');
        return;
    }
    // We no longer need to set the iframe src. We just show the modal.
    subscriptionChatModal.classList.add('show');
}
/**
 * Clears the chat history and input, resetting it to the welcome message.
 */
function refreshChat() {
    // Clear the chat history, but leave the first (welcome) message
    if (chatModalBody) {
        while (chatModalBody.children.length > 1) {
            chatModalBody.removeChild(chatModalBody.lastChild);
        }
    }
    // Also clear the input field
    if (chatModalInput) {
        chatModalInput.value = '';
    }
}

/**
 * Closes the modal AND refreshes the chat.
 */
function closeSubscriptionChatModal() {
    if (subscriptionChatModal) {
        subscriptionChatModal.classList.remove('show');
    }
    refreshChat(); // Call the new refresh function
}
function switchAnamoly(){
switchTab('anomalies');
highlightActiveCard(null);
}
function switchTicket(){
switchTab('ticket-details');
highlightActiveCard(null);
}

function startTypewriterSequence() {
const summaries = [
{ id: 'summary-subscription', text: 'The overall health score of this account is classified as healthy, indicating a positive status.' },
{ id: 'summary-potential', text: 'A user is evaluating the product "Analytics" with a lead type of "MQL". The user has received several emails with different subjects, including "Unlock $100 in wallet credits" and "Tu Período Gratuito de Zoho Analytics llego a su fin!". The user has opened 4 of the 6 emails, with the most opened being "Introducción al Potencial de Zoho Analytics" with 3 opens.' },
{ id: 'summary-hygiene', text: "A lead, jrodriguez@gmail.com, was contacted by Aziz Chafi, Sales Director at Zoho, on August 27, 2025. The lead mentioned being part of a corporate account with PAE (Pasos Al Éxito). A call was made to Bekki Grimm, the lead’s owner, on August 27, 2025. Previous attempts were made to contact the lead through multiple emails and calls, but there was no response. The lead was eventually marked as Closed Lost on October 24, 2024." }
];

let summaryIndex = 0;
const speed = 15; // ms per character

function typeNextSummary() {
if (summaryIndex >= summaries.length) return;

const summary = summaries[summaryIndex];
const element = document.getElementById(summary.id);
const text = summary.text;

if (!element) {
    summaryIndex++;
    typeNextSummary();
    return;
}

let charIndex = 0;
element.innerHTML = '';

function typeChar() {
    if (charIndex < text.length) {
        element.innerHTML += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeChar, speed);
    } else {
        summaryIndex++;
        typeNextSummary(); // Move to the next summary
    }
}

typeChar();
}

typeNextSummary(); // Start the sequence
}

function showResolveNotesPopup(item) {
    if (!resolveNotesPopup) return;
    // Store the current item context to be used on submit
    currentItemToResolve = item;
    // Clear the textarea from previous entries
    if(resolveNotesTextarea) resolveNotesTextarea.value = '';
    // Show the notes popup
    resolveNotesPopup.style.display = 'flex';
}


function closeResolveNotesPopup() {
if (resolveNotesPopup) {
resolveNotesPopup.style.display = 'none';
}
// Clear the context so we don't accidentally resolve the wrong item
currentItemToResolve = null;
}

function showThreatDetailsPopup(threats, appId) {
if (!threatDetailsPopup || !threatListContainer) return;

// Clear previous threats
threatListContainer.innerHTML = '';

// Populate with new threats
if (threats && threats.length > 0) {
threats.forEach(threatName => {
    const threatItem = document.createElement('div');
    threatItem.className = 'threat-item';
    threatItem.setAttribute('data-threat-name', threatName);
    threatItem.innerHTML = `
        <span class="threat-item-name">${threatName}</span>
        <button class="threat-resolve-btn">Resolve</button>
    `;
    threatListContainer.appendChild(threatItem);

    // Add event listener for the resolve button
    threatItem.querySelector('.threat-resolve-btn').addEventListener('click', (e) => {
        showResolveNotesPopup({ type: 'threat', appId: appId, name: threatName });
    });
});
}

// Show the popup
threatDetailsPopup.style.display = 'flex';
}

function closeThreatDetailsPopup() {
if (threatDetailsPopup) {
threatDetailsPopup.style.display = 'none';
}
}


function showEscalatedTicketsPopup(tickets, appId) {
    if (!escalatedTicketsPopup || !escalatedTicketsListContainer) return;

    escalatedTicketsListContainer.innerHTML = ''; // Clear

    if (tickets && tickets.length > 0) {
        tickets.forEach(ticket => {
            const ticketItem = document.createElement('div');
            ticketItem.className = 'escalated-ticket-item';
            ticketItem.setAttribute('data-ticket-id', ticket.id);
            ticketItem.innerHTML = `
                <span class="escalated-ticket-summary">${ticket.summary}</span>
                <button class="threat-resolve-btn">Resolve</button>
            `;
            escalatedTicketsListContainer.appendChild(ticketItem);

            ticketItem.querySelector('.threat-resolve-btn').addEventListener('click', () => {
                showResolveNotesPopup({ type: 'ticket', appId: appId, id: ticket.id, summary: ticket.summary });
            });
        });
    }

    escalatedTicketsPopup.style.display = 'flex';
}

function closeEscalatedTicketsPopup() {
    if (escalatedTicketsPopup) {
        escalatedTicketsPopup.style.display = 'none';
    }
}
/**
 * Shows the popup for resolving an inactive app.
 * @param {string} appName The name of the app (e.g., "CRM Plus").
 * @param {string} appId The ID of the app.
 */
function showInactiveAppPopup(appName, appId) {
    if (!inactiveAppPopup || !inactiveAppListContainer) return;

    inactiveAppListContainer.innerHTML = ''; // Clear

    const appItem = document.createElement('div');
    appItem.className = 'inactive-app-item';
    appItem.setAttribute('data-app-id', appId);
    appItem.innerHTML = `
        <span class="inactive-app-name">${appName}</span>
        <button class="threat-resolve-btn">Resolve</button>
    `;
    inactiveAppListContainer.appendChild(appItem);

    appItem.querySelector('.threat-resolve-btn').addEventListener('click', () => {
        showResolveNotesPopup({ type: 'inactive', appId: appId, name: appName });
    });

    inactiveAppPopup.style.display = 'flex';
}

function closeInactiveAppPopup() {
    if (inactiveAppPopup) {
        inactiveAppPopup.style.display = 'none';
    }
}


function showResolvedHistoryPopup(appName, triggerElement) {
if (!resolvedHistoryPopup || !resolvedHistoryListContainer || !triggerElement) return;

// Filter history for the specific app
const relevantHistory = resolvedItemsHistory.filter(item => item.appName === appName);

resolvedHistoryListContainer.innerHTML = ''; // Clear

if (relevantHistory.length > 0) {
    relevantHistory.forEach(item => {
    const historyItem = document.createElement('div');
    historyItem.className = 'resolved-history-item';
    
    const timestamp = item.resolvedAt.toLocaleString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
    let resolvedItemName = '';
    if (item.type === 'threat') {
        resolvedItemName = `Threat: ${item.name}`;
    } else if (item.type === 'ticket') {
        resolvedItemName = `Ticket: ${item.summary}`;
    } else if (item.type === 'inactive') {
        resolvedItemName = `Inactive App: ${item.appName}`;
    }

    historyItem.innerHTML = `
        <div class="resolved-item-header">
            <span class="resolved-item-name">${resolvedItemName}</span>
            <span class="resolved-item-timestamp">${timestamp}</span>
        </div>
        <div class="resolved-item-notes">${item.notes || 'No notes provided.'}</div>
    `;
    resolvedHistoryListContainer.appendChild(historyItem);
});
} else {
    resolvedHistoryListContainer.innerHTML = '<p class="text-muted text-center">No resolved items for this application yet.</p>';
}

const popupContent = resolvedHistoryPopup.querySelector('.resolved-history-popup-content');
resolvedHistoryPopup.style.display = 'block'; // Show overlay to calculate dimensions

const rect = triggerElement.getBoundingClientRect();
const popupRect = popupContent.getBoundingClientRect();

let top = rect.top - popupRect.height - 10; // 10px space above the icon
let left = rect.left + (rect.width / 2) - popupRect.width + 20; // Align right side near the icon

// Boundary checks
if (top < 10) { top = rect.bottom + 10; }
if (left < 10) { left = 10; }
if (left + popupRect.width > window.innerWidth) {
left = window.innerWidth - popupRect.width - 10;
}

popupContent.style.top = `${top}px`;
popupContent.style.left = `${left}px`;
}

function closeResolvedHistoryPopup() {
if (resolvedHistoryPopup) {
resolvedHistoryPopup.style.display = 'none';
const popupContent = resolvedHistoryPopup.querySelector('.resolved-history-popup-content');
if (popupContent) {
    popupContent.style.top = '';
    popupContent.style.left = '';
}
}
}
/**
 * Finds all tickets with cross-sell tags and populates the flash message popup.
 */
function fillPopupList() {
    if (!crossSellFlashMessageList) return;

    // Use the new helper function to get the list
    const opportunities = findCrossSellTickets();

    // Clear any previous list items
    crossSellFlashMessageList.innerHTML = '';

    if (opportunities.length > 0) {
        opportunities.forEach(ticket => {
            const li = document.createElement('li');
            li.innerHTML = `
    <div class="cross-sell-opportunity-item">
        <div class="d-flex justify-content-between align-items-center p-2">
            <span class="ticket-summary small">${ticket.summary}</span>
            <a href="${ticket.url}" target="_blank" class="ticket-id text-primary small">${ticket.id}</a>
        </div>
    </div>
            `;
            crossSellFlashMessageList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'No specific cross-sell tickets found.';
        crossSellFlashMessageList.appendChild(li);
    }
}
let toastTimeout; // Manages the timer for the toast message

/**
 * Displays a temporary toast notification at the top of the screen.
 * @param {string} message The message to display.
 */
function showToast(message) {
    if (toastTimeout) {
        clearTimeout(toastTimeout);
    }

    let toast = document.getElementById('toast-notification');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-notification';
        toast.className = 'toast-notification';
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add('show');

    // Set a timeout to hide it after 1 second (1000ms)
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 1000); // CHANGED from 3000 to 1000
}
/**
 * Calculates and sets the top position of the notification bar
 * to keep it perfectly aligned below the main header.
 */
function positionNotificationBar() {
    const headerSection = document.getElementById('subscriptions-header');
    const notificationBar = document.getElementById('crossSellFlashMessageContainer');

    if (headerSection && notificationBar) {
        // Get the height of the header section
        const headerHeight = headerSection.offsetHeight;
        
        // Position the notification bar 5px below the bottom of the header
        notificationBar.style.top = (headerHeight + 5) + 'px'; 
    }
}
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing...');
    if (!initializeDOMElements()) {
        console.error('Failed to initialize DOM elements, stopping further initialization.');
        return;
    }
    // Show loader immediately
    showWidgetLoader();

    setTimeout(() => {
        hideWidgetLoader();
    }, 3000);
    // Simulate data loading delay
    setTimeout(() => {
        filterDataArrays();
        console.log('Rendering initial table for "All Apps"');
        updateArrCapsuleCounts(); // Set the capsule counts which are static
        updateDashboard(appData); // Load the entire dashboard with all data initially
        const crossSellOpportunities = findCrossSellTickets();
        if (crossSellOpportunities.length > 0) {
            const formattedTime = getFormattedCurrentTime(); // Use your time helper
            const plural = crossSellOpportunities.length > 1 ? 'opportunities' : 'opportunity';
            
            dummyNotifications.unshift({
                text: `New! ${crossSellOpportunities.length} cross-sell ${plural} detected in open tickets.`,
                time: formattedTime,
                isRead: false
            });
        }
        // --- (END) NEW CROSS-SELL NOTIFICATION LOGIC ---
        if (allAppsBtn) { // Set the initial active button
            allAppsBtn.classList.add('active');
        }
        startTypewriterSequence();
        renderNotifications('all');

        // START: ADD THIS BLOCK
        // Start the 2-second flip timer for the health score widget
        if (healthScoreFlipper) {
            setInterval(() => {
                healthScoreFlipper.classList.toggle('is-flipped');
            }, 2000); // Flips every 2 seconds
        }
    }, 3500);

    // --- Primary Filter Button Listeners ---
    if (allAppsBtn) allAppsBtn.addEventListener('click', () => {
        switchTab('all-apps');
        highlightActiveCard(null);
    });
    if (crossSellBtn) crossSellBtn.addEventListener('click', () => {
        switchTab('cross-sell');
        highlightActiveCard(null);
    });
    if (downgradesBtn) downgradesBtn.addEventListener('click', () => {
        switchTab('downgrades');
        highlightActiveCard(null);
    });
    if (competitorsBtn) competitorsBtn.addEventListener('click', () => {
        switchTab('competitors');
        highlightActiveCard(null);
    });
    if (anomaliesBtn) anomaliesBtn.addEventListener('click', () => {
        switchTab('anomalies');
        highlightActiveCard(null);
    });
    if (ticketDetailsBtn) ticketDetailsBtn.addEventListener('click', () => {
        switchTab('ticket-details');
        highlightActiveCard(null);
    });
    if (arrLessThan5kSegment) {
        arrLessThan5kSegment.addEventListener('click', () => handleArrFilterClick('lessThan5k'));
    }
    if (arrGreaterThan5kSegment) {
        arrGreaterThan5kSegment.addEventListener('click', () => handleArrFilterClick('greaterThan5k'));
    }

    // --- KPI Card Listeners ---
    if (criticalIssuesCard) {
        criticalIssuesCard.addEventListener('click', () => {
            switchTab('anomalies', anomaliesCriticalOnlyData);
            highlightActiveCard('criticalIssuesCard');
        });
        criticalIssuesCard.style.cursor = 'pointer';
    }
    if (warningSignsCard) {
        warningSignsCard.addEventListener('click', () => {
            switchTab('anomalies', anomaliesWarningOnlyData);
            highlightActiveCard('warningSignsCard');
        });
        warningSignsCard.style.cursor = 'pointer';
    }
    if (competitorExposureCard) {
        competitorExposureCard.addEventListener('click', () => {
            switchTab('competitors');
            highlightActiveCard('competitorExposureCard');
        });
        competitorExposureCard.style.cursor = 'pointer';
    }
    if (downgradeRisksCard) {
        downgradeRisksCard.addEventListener('click', () => {
            switchTab('downgrades');
            highlightActiveCard('downgradeRisksCard');
        });
        downgradeRisksCard.style.cursor = 'pointer';
    }
    if (deskTicketsCard) {
        deskTicketsCard.addEventListener('click', () => {
            switchTab('ticket-details');
            highlightActiveCard('deskTicketsCard');
        });
        deskTicketsCard.style.cursor = 'pointer';
    }
    
    // --- Initial State Management ---
    if (applicationTableContainer) {
        applicationTableContainer.classList.remove('fade-out', 'd-none');
        applicationTableContainer.classList.add('fade-in');
        applicationTableContainer.style.display = 'block';
        if (applicationTableHeader) {
            applicationTableHeader.style.display = 'table-header-group';
        }
    }
    if (ticketDetailsTableContainer) {
        ticketDetailsTableContainer.classList.remove('fade-in'); 
        ticketDetailsTableContainer.classList.add('fade-out'); 
        ticketDetailsTableContainer.style.display = 'none';
    }
    
    // --- Cross-Sell Hover Listener (Final Positioning Fix) ---
    const crossSellFlashMessageTrigger = document.getElementById('crossSellFlashMessageTrigger');
    if (crossSellFlashMessageTrigger && crossSellFlashMessagePopup) {
        
        document.body.appendChild(crossSellFlashMessagePopup);

const showPopup = () => {
    fillPopupList(); 
    crossSellFlashMessagePopup.style.display = 'block';
    const popupHeight = crossSellFlashMessagePopup.offsetHeight;
    const popupWidth = crossSellFlashMessagePopup.offsetWidth;
    crossSellFlashMessagePopup.style.display = '';
    const triggerRect = crossSellFlashMessageTrigger.getBoundingClientRect();

    // --- THIS IS THE ONLY LINE THAT HAS CHANGED ---
    // We removed the "- 8" to close the gap
    const popupTop = triggerRect.top - popupHeight; 

    const popupLeft = triggerRect.right - popupWidth;
    
    crossSellFlashMessagePopup.style.top = `${popupTop}px`;
    crossSellFlashMessagePopup.style.left = `${popupLeft}px`;
    setTimeout(() => {
        crossSellFlashMessagePopup.classList.add('show');
    }, 10); 
};

        const hidePopup = () => {
            setTimeout(() => {
                if (!crossSellFlashMessageTrigger.matches(':hover') && !crossSellFlashMessagePopup.matches(':hover')) {
                    crossSellFlashMessagePopup.classList.remove('show');
                }
            }, 100);
        };

        crossSellFlashMessageTrigger.addEventListener('mouseenter', showPopup);
        crossSellFlashMessageTrigger.addEventListener('mouseleave', hidePopup);
        crossSellFlashMessagePopup.addEventListener('mouseenter', () => crossSellFlashMessagePopup.classList.add('show'));
        crossSellFlashMessagePopup.addEventListener('mouseleave', hidePopup);
    }
    // --- End Cross-Sell Hover Listener ---

    // --- Other Popups/Dropdowns/Modals ---
    if (threatPopupCloseBtn) {
        threatPopupCloseBtn.addEventListener('click', closeThreatDetailsPopup);
    }
    if (threatDetailsPopup) {
        threatDetailsPopup.addEventListener('click', (e) => {
            if (e.target === threatDetailsPopup) { closeThreatDetailsPopup(); }
        });
    }

    if (resolveNotesCancelBtn) {
        resolveNotesCancelBtn.addEventListener('click', closeResolveNotesPopup);
    }
    // --- Resolved History Popup Listeners ---
    if (resolvedHistoryPopupCloseBtn) {
        resolvedHistoryPopupCloseBtn.addEventListener('click', closeResolvedHistoryPopup);
    }
    
    // Optional: Close when clicking outside the white box (on the overlay)
    if (resolvedHistoryPopup) {
        resolvedHistoryPopup.addEventListener('click', (e) => {
            if (e.target === resolvedHistoryPopup) {
                closeResolvedHistoryPopup();
            }
        });
    }

    if (resolveNotesSubmitBtn) {
        resolveNotesSubmitBtn.addEventListener('click', () => {
            if (!currentItemToResolve) return;
    
            const { type, appId, name, id, summary } = currentItemToResolve;
            const notes = resolveNotesTextarea.value; 
            const appForHistory = appData.find(app => app.id.toString() === appId.toString());
    
            // --- (START) NEW NOTIFICATION LOGIC ---
            const formattedTime = getFormattedCurrentTime();
            let notificationText = '';
            // --- (END) NEW NOTIFICATION LOGIC ---

            // 1. ADD THE RESOLUTION TO HISTORY & MODIFY SOURCE DATA
            if (type === 'threat') {
                resolvedItemsHistory.push({ type: 'threat', appName: appForHistory?.application, name: name, notes: notes, resolvedAt: new Date() });
                const appIndex = appData.findIndex(app => app.id.toString() === appId.toString());
                if (appIndex !== -1) { 
                    appData[appIndex].competitors = appData[appIndex].competitors.filter(c => c !== name); 
                }
                
                // --- (START) NEW NOTIFICATION LOGIC ---
                notificationText = `Resolved 'Threat' (${name}) for app: ${appForHistory?.application}.`;
                // --- (END) NEW NOTIFICATION LOGIC ---

            } else if (type === 'ticket') {
                resolvedItemsHistory.push({ type: 'ticket', appName: appForHistory?.application, summary: summary, id: id, notes: notes, resolvedAt: new Date() });
                
                // FIX: Actually close the ticket in data
                ticketDetailsData.forEach(dept => {
                    const ticketToClose = dept.tickets.find(t => t.id === id);
                    if (ticketToClose && ticketToClose.status === 'Open') {
                        ticketToClose.status = 'Closed';
                        if (dept.openStatus > 0) dept.openStatus--;
                        dept.closedStatus++;
                    }
                });

                // --- (START) NEW NOTIFICATION LOGIC ---
                notificationText = `Resolved 'Escalated Ticket' for app: ${appForHistory?.application}.`;
                // --- (END) NEW NOTIFICATION LOGIC ---

            } else if (type === 'inactive') {
                resolvedItemsHistory.push({ type: 'inactive', appName: name, notes: notes, resolvedAt: new Date() });
                const appIndex = appData.findIndex(app => app.id.toString() === appId.toString());
                if (appIndex !== -1) { 
                    appData[appIndex].status = 'Resolved Inactive'; 
                }

                // --- (START) NEW NOTIFICATION LOGIC ---
                notificationText = `Resolved 'Inactive' status for app: ${name}.`;
                // --- (END) NEW NOTIFICATION LOGIC ---
            }
    
            // --- (START) NEW NOTIFICATION LOGIC ---
            // 2. CREATE AND ADD THE NEW NOTIFICATION
            if (notificationText) {
                const newNotification = {
                    text: notificationText,
                    time: formattedTime,
                    isRead: false
                };
                // Add to the top of the array
                dummyNotifications.unshift(newNotification);
            }
            // --- (END) NEW NOTIFICATION LOGIC ---

            // 3. CLOSE THE NOTES POPUP
            closeResolveNotesPopup();
    
            // 4. REFRESH THE ANOMALY POPUPS
            if (type === 'threat') {
                const threatList = ['Active campaign', 'Zoom', 'Microsoft Teams', 'Google Drive', 'Sqauare POS'];
                const crossSellList = ['Mailchimp', 'Dropbox'];
                let remainingThreats = [];
                if (appForHistory && appForHistory.competitors) {
                    remainingThreats = appForHistory.competitors.filter(comp => 
                        (threatList.includes(comp) || !crossSellList.includes(comp)) &&
                        !resolvedItemsHistory.some(item => item.type === 'threat' && item.appName === appForHistory.application && item.name === comp)
                    );
                }
                if (remainingThreats.length > 0) {
                    showThreatDetailsPopup(remainingThreats, appId);
                } else {
                    closeThreatDetailsPopup();
                }
            } else if (type === 'ticket') {
                let remainingTickets = [];
                const relevantDept = ticketDetailsData.find(dept => dept.id === appForHistory.relevantDepartmentId);
                if (relevantDept) {
                    const openTickets = relevantDept.tickets.filter(tkt => tkt.status === 'Open');
                    remainingTickets = openTickets.filter(tkt => 
                        tkt.tags.includes('Escalation Request') &&
                        !resolvedItemsHistory.some(item => item.type === 'ticket' && item.id === tkt.id)
                    );
                }
                 if (remainingTickets.length > 0) {
                        showEscalatedTicketsPopup(remainingTickets, appId);
                    } else {
                        closeEscalatedTicketsPopup();
                    }
            } else if (type === 'inactive') {
                closeInactiveAppPopup();
            }
    
            // 5. REFRESH THE MAIN UI DATA AND COUNTS
            filterDataArrays(); 
            switchTab('anomalies'); 
            showToast("Submitted successfully!"); 
    
            // --- (START) NEW NOTIFICATION LOGIC ---
            // 6. RE-RENDER THE NOTIFICATION LIST (AND BADGE)
            renderNotifications('all');
            // --- (END) NEW NOTIFICATION LOGIC ---

            // 7. HIGHLIGHT THE ROW
            setTimeout(() => {
                const rowToHighlight = document.querySelector(`tr[data-app-id='${appId}']`);
                if (rowToHighlight) {
                    rowToHighlight.classList.add('row-highlight-flash');
                    setTimeout(() => {
                        rowToHighlight.classList.remove('row-highlight-flash');
                    }, 2000);
                } else {
                    console.error("FAILURE: Could not find the row with data-app-id:", appId);
                }
            }, 350);
        });
    }
    // --- Document-wide Click Handlers ---
    document.addEventListener('click', (event) => {
        if (currentOpenDropdown && !event.target.closest('.action-dropdown-menu') && !event.target.closest('.action-toggle-element')) {
            closeAllDropdowns();
        }
        if (currentOpenThreatPopup && !event.target.closest('.threat-popup-container') && !event.target.closest('.threat-popup-wrapper')) {
            closeAllThreatPopups();
        }
        if (notificationPanel && notificationPanel.classList.contains('show') && 
            !event.target.closest('.notification-bell-wrapper')) {
            notificationPanel.classList.remove('show');
        }
        if (notificationFilterDropdown && notificationFilterDropdown.classList.contains('show') &&
        !event.target.closest('.notification-filter-wrapper')) {
        notificationFilterDropdown.classList.remove('show');
    }
    });

    // --- Eye Icon / Rating Popup ---
    const clickableEyeIcon = document.querySelector('.clickable-eye-icon');
    const ratingDetailsPopup = document.getElementById('ratingDetailsPopup');
    if (clickableEyeIcon && ratingDetailsPopup) {
        clickableEyeIcon.addEventListener('click', (event) => {
            event.stopPropagation();
            if (ratingDetailsPopup.style.display === 'block') { 
                ratingDetailsPopup.style.display = 'none'; 
            } else { 
                ratingDetailsPopup.style.display = 'block'; 
            }
        });
        document.addEventListener('click', (event) => {
            if (ratingDetailsPopup.style.display === 'block' &&
                !clickableEyeIcon.contains(event.target) &&
                !ratingDetailsPopup.contains(event.target)) {
                ratingDetailsPopup.style.display = 'none';
            }
        });
    }

    // --- Need Help Dropdown ---
    const needHelpDropdownWrapper = document.getElementById('need-help-dropdown-wrapper');
    if (needHelpDropdownWrapper) {
        const needHelpToggleElement = needHelpDropdownWrapper.querySelector('.action-toggle-element');
        const needHelpDropdownMenu = needHelpDropdownWrapper.querySelector('.action-dropdown-menu');
        const needHelpChatAgentBtn = document.getElementById('needHelpChatAgentBtn'); 
        
        if (needHelpToggleElement && needHelpDropdownMenu) {
            const emailClientBtn = needHelpDropdownMenu.querySelector('.email-client');
            const emailPeerBtn = needHelpDropdownMenu.querySelector('.email-peer');

            if (emailClientBtn) {
                emailClientBtn.addEventListener('click', (event) => {
                    event.stopPropagation();
                    showEmailPopup('client');
                    closeAllDropdowns();
                });
            }
            if (emailPeerBtn) {
                emailPeerBtn.addEventListener('click', (event) => {
                    event.stopPropagation();
                    showEmailPopup('peer');
                    closeAllDropdowns();
                });
            }

            needHelpToggleElement.addEventListener('click', (event) => {
                event.stopPropagation();
                if (currentOpenDropdown && currentOpenDropdown !== needHelpDropdownMenu) { closeAllDropdowns(); }
                closeAllThreatPopups();
                needHelpDropdownMenu.classList.toggle('show');
                if (needHelpDropdownMenu.classList.contains('show')) {
                    needHelpDropdownMenu.querySelectorAll('.glass-button').forEach((button, index) => {
                        button.style.animation = `fadeInSlideUp 0.3s ease-out forwards ${index * 0.1}s`;
                    });
                    currentOpenDropdown = needHelpDropdownMenu;
                    currentOpenDropdownToggle = needHelpToggleElement;
                } else {
                    needHelpDropdownMenu.querySelectorAll('.glass-button').forEach(button => { button.style.animation = ''; });
                    closeAllDropdowns();
                }
            });

            if (needHelpChatAgentBtn) {
                needHelpChatAgentBtn.addEventListener('click', (event) => {
                    event.stopPropagation();
                    openSubscriptionChatModal(null, null, event.target);
                    closeAllDropdowns(); 
                });
            }
            // === START: ADD NEW CHAT LISTENERS ===
            if (chatModalSendBtn) {
                chatModalSendBtn.addEventListener('click', () => handleChatSend());
            }
            if (chatModalInput) {
                chatModalInput.addEventListener('keydown', (event) => {
                    if (event.key === 'Enter') {
                        event.preventDefault(); // Stop it from adding a new line
                        handleChatSend();
                    }
                });
            }
            // === END: ADD NEW CHAT LISTENERS ===
            // === START: ADD THIS NEW BUBBLE LISTENER ===
        if (chatModalBody) {
            chatModalBody.addEventListener('click', (event) => {
                // Check if the user clicked on a suggestion pill
                if (event.target.classList.contains('chat-suggestion-pill')) {
                    const message = event.target.textContent;
                    handleChatSend(message); // Pass the bubble's text
                }
            });
        }
        // === END: ADD THIS NEW BUBBLE LISTENER ===

        }
    }

    if (closeSubscriptionChatModalBtn) { 
        closeSubscriptionChatModalBtn.addEventListener('click', closeSubscriptionChatModal); 
    }

    // --- Recent Purchases Hover ---
    if (recentPurchasesCountSpan && recentPurchasesHoverPopup && recentPurchasesHoverList) {
        recentPurchasesCountSpan.addEventListener('mouseenter', () => {
            recentPurchasesHoverList.innerHTML = '';
            if (recentPurchasesData.length > 0) {
                recentPurchasesData.forEach((item) => {
                    const li = document.createElement('li');
                    li.innerHTML = `<span class="app-name">${item.name}</span> <span class="app-revenue">$${item.revenue}</span>`;
                    recentPurchasesHoverList.appendChild(li);
                });
            } else {
                const li = document.createElement('li');
                li.textContent = 'No recent purchases in the last 6 months.';
                recentPurchasesHoverList.appendChild(li);
            }
            recentPurchasesHoverPopup.classList.add('show');
        });
        recentPurchasesCountSpan.addEventListener('mouseleave', () => {
            recentPurchasesHoverPopup.classList.remove('show');
        });
    }

    // --- Next Renewals Hover ---
    if (nextRenewalsCountSpan && nextRenewalsHoverPopup && nextRenewalsHoverList) {
        nextRenewalsCountSpan.addEventListener('mouseenter', () => {
            nextRenewalsHoverList.innerHTML = ''; 
            if (nextRenewalsData.length > 0) {
                nextRenewalsData.sort((a, b) => new Date(a.date) - new Date(b.date));
                nextRenewalsData.forEach((item) => {
                    const li = document.createElement('li');
                    li.style.display = 'flex'; 
                    li.style.justifyContent = 'space-between'; 
                    li.style.alignItems = 'center'; 
                    li.style.padding = '8px 0'; 
                    li.style.borderBottom = '1px solid #eee'; 
                    const nameSpan = document.createElement('span'); 
                    nameSpan.className = 'app-name'; 
                    nameSpan.textContent = item.name; 
                    nameSpan.style.flexBasis = '40%'; 
                    nameSpan.style.textAlign = 'left';
                    const dateSpan = document.createElement('span'); 
                    dateSpan.className = 'renewal-date'; 
                    dateSpan.textContent = item.date; 
                    dateSpan.style.flexBasis = '30%'; 
                    dateSpan.style.textAlign = 'center';
                    const revenueSpan = document.createElement('span'); 
                    revenueSpan.className = 'app-revenue'; 
                    revenueSpan.textContent = `$${item.revenue}`; 
                    revenueSpan.style.flexBasis = '30%'; 
                    revenueSpan.style.textAlign = 'right';
                    li.appendChild(nameSpan); 
                    li.appendChild(dateSpan); 
                    li.appendChild(revenueSpan); 
                    nextRenewalsHoverList.appendChild(li);
                });
                if (nextRenewalsHoverList.lastChild) { 
                    nextRenewalsHoverList.lastChild.style.borderBottom = 'none'; 
                }
            } else {
                const li = document.createElement('li'); 
                li.textContent = 'No upcoming renewals in the next 3 months.'; 
                nextRenewalsHoverList.appendChild(li);
            }
            nextRenewalsHoverPopup.classList.add('show');
        });
        nextRenewalsCountSpan.addEventListener('mouseleave', () => {
            nextRenewalsHoverPopup.classList.remove('show');
        });
    }

    // --- Event listener for the new refresh icon ---
    refreshIcon.addEventListener('click', () => {
        location.reload();
    });
    // --- Add Event Listeners for the Email Popup Buttons ---
    if (emailPopupCloseBtn) {
        emailPopupCloseBtn.addEventListener('click', closeEmailPopup);
    }
    if (emailPopupCopyBtn) {
        emailPopupCopyBtn.addEventListener('click', copyEmailContent);
    }
    // === START: NEW CHAT HELPER FUNCTIONS ===
    // These functions live inside DOMContentLoaded

    /**
     * Adds a new message bubble to the chat window.
     * @param {string} message The text content of the message.
     * @param {string} sender 'bot' or 'user'.
     */
    function addChatMessage(message, sender) {
        if (!chatModalBody) return;

        let messageGroup;

        if (sender === 'bot') {
            // Create bot message group
            messageGroup = document.createElement('div');
            messageGroup.className = 'chat-message-group-bot';
            messageGroup.innerHTML = `
            <img src="images/Chatbot.png" alt="Bot Avatar" class="chat-avatar-bot">
            <div class="chat-message-details">
                    <span class="chat-message-sender">Viyan-வியன் 360• Just now</span>
                    <div class="chat-bubble chat-bubble-bot">
                        ${message}
                    </div>
                </div>
            `;
        } else {
            // Create user message group
            messageGroup = document.createElement('div');
            messageGroup.className = 'chat-message-group-user';
            messageGroup.innerHTML = `
                <div class="chat-message-details">
                    <span class="chat-message-sender">You • Just now</span>
                    <div class="chat-bubble chat-bubble-user">
                        ${message}
                    </div>
                </div>
            `;
        }

        chatModalBody.appendChild(messageGroup);
        
        // Scroll to the bottom
        chatModalBody.scrollTop = chatModalBody.scrollHeight;
    }
    // === START: ADD THIS NEW ARRAY ===
    const botReplies = [
        "I’m still in training, but do not worry, greatness is buffering! Try again later. 😄",
        "I'm still learning! I'll be able to answer you properly very soon.",
        "I can't handle requests just yet, but I'm learning fast! I'll be ready to assist shortly."
    ];
    // === END: ADD THIS NEW ARRAY ===

/**
 * Handles sending a message from the user input or a suggestion bubble.
 * @param {string} [messageText] - Optional. The text from a suggestion bubble.
 */
function handleChatSend(messageText) {
    if (!chatModalInput) return;

    // Use the provided message or get it from the input field
    const message = messageText || chatModalInput.value.trim();

    if (message === '') return; // Don't send empty messages

    // 1. Add the user's message
    addChatMessage(message, 'user');

    // 2. Clear the input field (only if we didn't get text from a bubble)
    if (!messageText) {
        chatModalInput.value = '';
    }

// 3. Add a random bot reply after a short delay
setTimeout(() => {
    // Pick a random reply
    const randomIndex = Math.floor(Math.random() * botReplies.length);
    const randomReply = botReplies[randomIndex];

    addChatMessage(randomReply, 'bot');
}, 500); // 500ms delay
}

    // === END: NEW CHAT HELPER FUNCTIONS ===

    if (notificationBell) {
        notificationBell.addEventListener('click', (event) => {
            event.stopPropagation();
    
            // Close other dropdowns
            closeAllDropdowns();
            closeAllThreatPopups();
            notificationFilterDropdown.classList.remove('show');
    
            // Toggle this panel
            notificationPanel.classList.toggle('show');
    
            // --- START: NEW "MARK AS READ" LOGIC ---
            if (notificationPanel.classList.contains('show')) {
                // Get all visible new items
                const newItems = notificationList.querySelectorAll('li.is-new');
    
                // Get today's date
                const today = new Date();
                const year = today.getFullYear();
                const month = (today.getMonth() + 1).toString().padStart(2, '0');
                const day = today.getDate().toString().padStart(2, '0');
                const todayString = `${year}-${month}-${day}`;
    
                // Mark them as "read" in the data array
                dummyNotifications.forEach(notif => {
                    if (notif.time.startsWith(todayString)) {
                        notif.isRead = true;
                    }
                });
    
                // After 2 seconds, remove the badge and the highlight
                setTimeout(() => {
                    notificationBadge.textContent = '0';
                    notificationBadge.style.display = 'none';
                    newItems.forEach(item => {
                        item.classList.remove('is-new');
                    });
                }, 2000); // 2-second delay
            }
    });
}
if (notificationShowMore) {
    notificationShowMore.addEventListener('click', (event) => {
        event.stopPropagation();
        // Re-render with the 'all' filter and the 'showAll' flag
        renderNotifications('all', true); 
    });
}

// --- START:FILTER BLOCK ---
if (notificationFilterBtn) {
    notificationFilterBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        notificationFilterDropdown.classList.toggle('show');
    });
}

if (notificationFilterDropdown) {
    // Add listener to the options inside the dropdown
    notificationFilterDropdown.addEventListener('click', (event) => {
        if (event.target.classList.contains('filter-option')) {
            event.stopPropagation();

            const filterType = event.target.dataset.filter; // 'all' or 'unread'

            // Update button text
            notificationFilterBtn.querySelector('span').textContent = event.target.textContent;

            // Update active state
            notificationFilterDropdown.querySelectorAll('.filter-option').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            // --- NEW LOGIC ---
            // Re-render the list with the chosen filter
            renderNotifications(filterType);

            // Close dropdown
            notificationFilterDropdown.classList.remove('show');
        }
    });
}
// --- END:FILTER BLOCK ---
    // === START: CHAT MODAL CLOSE BUTTON ===
if (closeSubscriptionChatModalBtn) {
    closeSubscriptionChatModalBtn.addEventListener('click', () => {
        closeSubscriptionChatModal();
    });
}
// === END: CHAT MODAL CLOSE BUTTON ===
// === START: CHAT MODAL REFRESH BUTTON ===
if (chatRefreshBtn) {
    chatRefreshBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Stop the header from dragging
        refreshChat();
    });
}
// === END: CHAT MODAL REFRESH BUTTON ===
    // === START: DRAGGABLE CHAT MODAL LOGIC ===

if (chatModalHeader && subscriptionChatModal) {
    let isDragging = false;
    let offsetX, offsetY;

// When mouse is pressed down on the header
chatModalHeader.addEventListener('mousedown', (e) => {
    isDragging = true;

    // Get the chat modal's current position
    const rect = subscriptionChatModal.getBoundingClientRect();

    // Calculate the offset from the top-left corner
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    // --- THIS IS THE NEW PART ---
    // Instantly switch from "bottom/right" to "top/left" positioning
    // This prevents the chat window from jumping.
    subscriptionChatModal.style.transform = 'none'; 
    subscriptionChatModal.style.top = `${rect.top}px`;
    subscriptionChatModal.style.left = `${rect.left}px`;
    subscriptionChatModal.style.bottom = 'auto'; // Unset bottom
    subscriptionChatModal.style.right = 'auto';  // Unset right
    // --- END OF NEW PART ---

    // Prevent text selection while dragging
    e.preventDefault(); 
});

    // When mouse moves
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        // Set the new top/left position based on mouse move and offset
        subscriptionChatModal.style.left = `${e.clientX - offsetX}px`;
        subscriptionChatModal.style.top = `${e.clientY - offsetY}px`;
    });

    // When mouse is released
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}
// === END: DRAGGABLE CHAT MODAL LOGIC ===
// === START: EXECUTIVE SUMMARY HOVER LOGIC ===
{ // Use a block to keep variables local
    const wrapper = document.getElementById('summaryWrapper');
    const arrow = document.getElementById('summaryArrow');
    const content = document.getElementById('summaryContent');
    let hoverTimer = null;

    if (wrapper && arrow && content) {
        
        const showSummary = () => {
            if (hoverTimer) clearTimeout(hoverTimer);
            wrapper.classList.add('summary-is-open');
        };

        const hideSummary = () => {
            hoverTimer = setTimeout(() => {
                wrapper.classList.remove('summary-is-open');
            }, 3000); // 3-second delay
        };

        // 1. Hovering the ARROW shows it
        arrow.addEventListener('mouseenter', showSummary);
        
        // 2. Hovering the CONTENT itself keeps it open
        content.addEventListener('mouseenter', showSummary);

        // 3. Leaving the ARROW starts the hide timer
        arrow.addEventListener('mouseleave', hideSummary);

        // 4. Leaving the CONTENT starts the hide timer
        content.addEventListener('mouseleave', hideSummary);
    }
}
// === END: EXECUTIVE SUMMARY HOVER LOGIC ===
});
    