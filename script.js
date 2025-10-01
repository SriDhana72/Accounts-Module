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
subscriptionChatModal = document.getElementById('subscriptionChatModal');
closeSubscriptionChatModalBtn = document.getElementById('closeSubscriptionChatModal');
subscriptionChatIframe = document.getElementById('subscriptionChatIframe');
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
function filterDataArrays() {
allAppsFilteredData = appData;
let initialSignupApp = null;
let earliestTime = Infinity;
appData.forEach(app => {
const appCreatedTime = new Date(app.createdTime).getTime();
if (appCreatedTime < earliestTime) {
    earliestTime = appCreatedTime;
    initialSignupApp = app;
}
});
crossSellFilteredData = appData.filter(app => app.id !== initialSignupApp.id);
const problematicTicketTagsList = [
"Dissatisfaction/Complaint", "Escalation Request", "Repeated Follow-up",
"Slow Support / Delay", "Feature Gap", "Cancel Threat/Churn Threat",
"Competitor Switch", "Product Regret", "Service Outage/Emergency",
"Security/Data Breach", "Evaluating Alternatives"
].map(tag => tag.toLowerCase().replace(/ /g, '-').replace(/\//g, '-'));
const findDepartment = (deptId) => ticketDetailsData.find(dept => dept.id === deptId);
// Declare totalInactiveApps here
const totalInactiveApps = appData.filter(app => app.status === 'Inactive').length;
anomaliesCriticalOnlyData = appData.filter(app => {
let isCritical = false;
const latestMonthChange = app.monthlyData.length >= 6 ? parseInt(app.monthlyData[5].change) : null;
if (app.license.includes('Downgraded') && latestMonthChange !== null && latestMonthChange < 0) {
    isCritical = true;
}
if (app.usage === 'Low' && app.license.includes('Downgraded')) {
    isCritical = true;
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
    isCritical = true;
}
if (app.paymentFailureCount >= 5 || app.pauseScheduledCount >= 5) {
    isCritical = true;
}
let maxSeatsLast6Months = 0;
if (app.monthlyData.length >= 6) {
    const seatsInLast6Months = app.monthlyData.slice(-6).map(m => m.seats);
    maxSeatsLast6Months = Math.max(...seatsInLast6Months);
    if (maxSeatsLast6Months > 0 && (app.seats / maxSeatsLast6Months) < 0.40) {
        isCritical = true;
    }
}
if (totalInactiveApps > 4) { // Use the defined totalInactiveApps
    isCritical = true;
}
if (app.monthlyData.length >= 6 && app.monthlyData[2] && app.monthlyData[5]) {
    const m6Revenue = app.monthlyData[5].revenue;
    const m3Revenue = app.monthlyData[2].revenue;
    if (m3Revenue > 0) {
        const percentageChange = (m6Revenue - m3Revenue) / m3Revenue;
        if (percentageChange < -0.40) {
            isCritical = true;
        }
    }
}
const relevantDepartment = findDepartment(app.relevantDepartmentId);
if (relevantDepartment && relevantDepartment.openStatus > 3) {
    isCritical = true;
}
if (relevantDepartment) {
    const openTicketsInDept = relevantDepartment.tickets.filter(tkt => tkt.status === 'Open');
    const hasCriticalProblematicTag = openTicketsInDept.some(tkt =>
        tkt.tags.some(tag => ['cancel threat/churn threat', 'competitor switch', 'service outage/emergency', 'security/data breach'].includes(tag.toLowerCase().replace(/ /g, '-').replace(/\//g, '-')))
    );
    if (hasCriticalProblematicTag) {
        isCritical = true;
    }
}
return isCritical;
});
anomaliesWarningOnlyData = appData.filter(app => {
const isAlreadyCritical = anomaliesCriticalOnlyData.some(criticalApp => criticalApp.id === app.id);
if (isAlreadyCritical) return false;
let isWarning = false;
if ((app.paymentFailureCount > 0 && app.paymentFailureCount < 5) ||
    (app.pauseScheduledCount > 0 && app.pauseScheduledCount < 5)) {
    isWarning = true;
}
let maxSeatsLast6Months = 0;
if (app.monthlyData.length >= 6) {
    const seatsInLast6Months = app.monthlyData.slice(-6).map(m => m.seats);
    maxSeatsLast6Months = Math.max(...seatsInLast6Months);
    if (maxSeatsLast6Months > 0 && (app.seats / maxSeatsLast6Months) < 0.70) {
        isWarning = true;
    }
}
if (totalInactiveApps > 2) { // Use the defined totalInactiveApps
    isWarning = true;
}
if (app.monthlyData.length >= 6 && app.monthlyData[2] && app.monthlyData[5]) {
    const m6Revenue = app.monthlyData[5].revenue;
    const m3Revenue = app.monthlyData[2].revenue;
    if (m3Revenue > 0) {
        const percentageChange = (m6Revenue - m3Revenue) / m3Revenue;
        if (percentageChange < -0.30) {
            isWarning = true;
        }
    }
}
const relevantDepartment = findDepartment(app.relevantDepartmentId);
if (relevantDepartment && relevantDepartment.openStatus > 1) {
    isWarning = true;
}
if (relevantDepartment) {
    const openTicketsInDept = relevantDepartment.tickets.filter(tkt => tkt.status === 'Open');
    const hasWarningProblematicTag = openTicketsInDept.some(tkt =>
        tkt.tags.some(tag => ['dissatisfaction/complaint', 'escalation request', 'repeated follow-up', 'slow support / delay', 'feature gap', 'product regret', 'evaluating alternatives'].includes(tag.toLowerCase().replace(/ /g, '-').replace(/\//g, '-')))
    );
    if (hasWarningProblematicTag) {
        isWarning = true;
    }
}
return isWarning;
});
downgradesFilteredData = appData.filter(app => app.license.includes('Downgraded'));
competitorsFilteredData = appData.filter(app => app.competitors && app.competitors.length > 0);
const anomaliesSet = new Set();
anomaliesCriticalOnlyData.forEach(app => anomaliesSet.add(app));
anomaliesWarningOnlyData.forEach(app => anomaliesSet.add(app));
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
const totalArr = data.reduce((sum, app) => sum + calculateTotalArr(app), 0);
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
updateHealthScore(totalScore);

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
if (competitorsCountSpan) competitorsCountSpan.textContent = competitorCount;
if (anomaliesCountSpan) anomaliesCountSpan.textContent = anomaliesCount;

const relevantDeptIds = new Set(data.map(app => app.relevantDepartmentId));

const relevantTickets = ticketDetailsData.filter(dept => relevantDeptIds.has(dept.id));

const openTickets = relevantTickets.reduce((sum, dept) => sum + dept.openStatus, 0);

const closedTickets = relevantTickets.reduce((sum, dept) => sum + dept.closedStatus, 0);

// Desk tickets based on relevant departments
const openTicketsCountInCard = document.getElementById('openTicketsCount');
const closedTicketsCountInCard = document.getElementById('closedTicketsCount');
if(openTicketsCountInCard) openTicketsCountInCard.textContent = openTickets;

if(closedTicketsCountInCard) closedTicketsCountInCard.textContent = closedTickets;


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
}
function getStatusTagHtml(status) {
let colorClass = '';
let displayText = status;
if (status === 'Active') {
colorClass = 'status-tag-active';
} else if (status === 'Inactive') {
colorClass = 'status-tag-inactive';
} else if (status === 'Renewal risk detected') {
colorClass = 'status-tag-renewal-risk';
displayText = 'Renewal risk';
}
return `<span class="status-tag ${colorClass}">${displayText}</span>`;
}
const getRandomUsageValue = () => {
const categories = [
'Major Decline', 
'Minor Decline', 
'Neutral Usage', 
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
case 'Neutral Usage':
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
let lastMonthUsageValue = 'N/A'; // To store M6 usage value
let monthlyDataHtml = app.monthlyData.map((month, index) => {
    const randomUsageValue = getRandomUsageValue();
    const randomUsageTrend = getRandomUsageTrend();

    if (month.month === 'M6') {
        lastMonthUsageValue = randomUsageValue;
    }

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
<td>${randomUsageValue}</td>
<td><i class="bi ${randomUsageTrend.icon} ${randomUsageTrend.class}"></i></td>
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

let usageCategory = '';
let usageBackgroundColorClass = '';
const usageValue = parseInt(lastMonthUsageValue);

if (usageValue < -10) {
    usageCategory = 'Major Decline';
    usageBackgroundColorClass = 'bg-usage-Major-Decline';
} else if (usageValue >= -10 && usageValue < 0) {
    usageCategory = 'Minor Decline';
    usageBackgroundColorClass = 'bg-usage-Minor-Decline';
} else if (usageValue === 0) {
    usageCategory = 'Neutral Usage';
    usageBackgroundColorClass = 'bg-usage-Neutral-Usage';
} else if (usageValue > 0 && usageValue <= 10) {
    usageCategory = 'Minor Increase';
    usageBackgroundColorClass = 'bg-usage-Minor-Increase';
} else if (usageValue > 10) {
    usageCategory = 'Major Increase';
    usageBackgroundColorClass = 'bg-usage-Major-Increase';
} else {
     usageCategory = 'N/A';
     usageBackgroundColorClass = 'bg-usage-Neutral-Usage';
}

let trendPercentage = 0;
switch (usageCategory) {
    case 'Major Decline':
        trendPercentage = -(Math.floor(Math.random() * 15) + 11); // -11% to -25%
        break;
    case 'Minor Decline':
        trendPercentage = -(Math.floor(Math.random() * 10) + 1); // -1% to -10%
        break;
    case 'Neutral Usage':
        trendPercentage = 0;
        break;
    case 'Minor Increase':
        trendPercentage = Math.floor(Math.random() * 10) + 1; // 1% to 10%
        break;
    case 'Major Increase':
        trendPercentage = Math.floor(Math.random() * 15) + 11; // 11% to 25%
        break;
}

let trendClass = 'text-muted';
let trendIcon = 'bi-dash-lg';

if (trendPercentage < 0) {
    trendClass = 'text-danger';
    trendIcon = 'bi-graph-down';
} else if (trendPercentage > 0) {
    trendClass = 'text-success';
    trendIcon = 'bi-graph-up';
}

const usageTrendHtml = `
    <div class="usage-trend-container ${trendClass}">
        <i class="bi ${trendIcon}"></i>
        <span>${trendPercentage}%</span>
    </div>
`;

const usageHtml = `
    <div class="usage-cell-content">
        <div class="usage-bar-container ${usageBackgroundColorClass}">
            <span class="usage-bar-text">${usageCategory}</span>
        </div>
        ${usageTrendHtml}
    </div>
`;

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
            arrTrendIconHtml = `<i class="bi bi-dash-lg text-muted"></i>`;
            arrPercentageClass = 'text-muted';
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
    inactiveInfoHtml = `
        <div class="inactive-info-container">
            <span class="inactive-months-text">Inactive for ${app.inactiveMonths} months</span>
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
<span class="application-category">${app.category}</span>
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
    const randomUsageValue = getRandomUsageValue();
    const randomUsageTrend = getRandomUsageTrend();
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
<td>${randomUsageValue}</td>
<td><i class="bi ${randomUsageTrend.icon} ${randomUsageTrend.class}"></i></td>
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
<h6 class="mb-2 fw-bold">Competitor Integrations</h1>
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
    closeSubscriptionChatModal();
    clearAllButtonHighlights();
    clearAllArrSegmentHighlights(); 
    currentArrFilter = 'all'; 
    activeSection = selectedCategory;

    // ADDED: Logic to show/hide the cross-sell flash message
    if (crossSellFlashMessageContainer) {
        if (selectedCategory === 'ticket-details') {
            crossSellFlashMessageContainer.style.display = 'block';
        } else {
            crossSellFlashMessageContainer.style.display = 'none';
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
let subscriptionChatIframe = null;
function openSubscriptionChatModal(subscriptionId, subscriptionName, clickedButton) {
if (!subscriptionChatModal || !subscriptionChatIframe || !clickedButton) {
console.error('Chat modal elements or clicked button not found!');
return;
}
// Set generic values if not provided (for "Need Help" button)
const chatSubscriptionId = subscriptionId || 'N/A';
const chatSubscriptionName = subscriptionName || 'General Inquiry';
subscriptionChatIframe.src = `chat_iframe_content.html?subscriptionId=${chatSubscriptionId}&subscriptionName=${encodeURIComponent(chatSubscriptionName)}`;
subscriptionChatModal.classList.add('show');
}
function closeSubscriptionChatModal() {
if (subscriptionChatModal) {
subscriptionChatModal.classList.remove('show');
subscriptionChatIframe.src = '';
}
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
{ id: 'summary-hygiene', text: "A lead, jrodriguez@gmail.com, was contacted by Aziz Chafi, Sales Director at Zoho, on 2025-08-27. The lead mentioned being part of a corporate account with PAE. Pasos Al Exito. A call was made to Bekki Grimm, the lead's owner, on 2025-08-27. Previous attempts were made to contact the lead, including multiple emails and calls, with no response. The lead was marked as Closed Lost on 2024-10-24." }
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
    const resolvedItemName = item.type === 'threat'

? `Threat: ${item.name}`

: `Ticket: ${item.summary}`;

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

    // Clear any previous list items
    crossSellFlashMessageList.innerHTML = '';

    if (opportunities.length > 0) {
        opportunities.forEach(ticket => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="d-flex justify-content-between align-items-center p-2">
                    <span class="ticket-summary small">${ticket.summary}</span>
                    <a href="${ticket.url}" target="_blank" class="ticket-id text-primary small">${ticket.id}</a>
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
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing...');
    if (!initializeDOMElements()) {
        console.error('Failed to initialize DOM elements, stopping further initialization.');
        return;
    }

    // Show loader immediately
    showWidgetLoader();

    setTimeout(()=>{
        hideWidgetLoader();
    },3000);
    // Simulate data loading delay
    setTimeout(() => {
        filterDataArrays();
        console.log('Rendering initial table for "All Apps"');
        updateArrCapsuleCounts(); // Set the capsule counts which are static
        updateDashboard(appData); // Load the entire dashboard with all data initially
        if (allAppsBtn) { // Set the initial active button
            allAppsBtn.classList.add('active');
        }
        startTypewriterSequence();
    }, 3500); // Simulate 1 second loading time

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
    
    // This part is correct: move the popup to the body to avoid clipping.
    document.body.appendChild(crossSellFlashMessagePopup);

    const showPopup = () => {
        // 1. Populate the list with content
        fillPopupList(); 

        // 2. Force the element into the layout by setting display:block. It's still invisible (opacity:0).
        crossSellFlashMessagePopup.style.display = 'block';

        // 3. NOW, measure its true height and width
        const popupHeight = crossSellFlashMessagePopup.offsetHeight;
        const popupWidth = crossSellFlashMessagePopup.offsetWidth;

        // 4. Hide it again before we calculate and set the final position
        crossSellFlashMessagePopup.style.display = '';

        // 5. Get the trigger icon's position
        const triggerRect = crossSellFlashMessageTrigger.getBoundingClientRect();

        // 6. Calculate the final, correct position
        const popupTop = triggerRect.top - popupHeight - 8; // 8px gap
        const popupLeft = triggerRect.left + (triggerRect.width / 2) - (popupWidth / 2);

        // 7. Apply the calculated position
        crossSellFlashMessagePopup.style.top = `${popupTop}px`;
        crossSellFlashMessagePopup.style.left = `${popupLeft}px`;

        // 8. Use a tiny delay to ensure the new position is applied, then fade it in.
        // This prevents any visual "jump".
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

    if (resolveNotesSubmitBtn) {
        resolveNotesSubmitBtn.addEventListener('click', () => {
            if (!currentItemToResolve) return;
            // ... (rest of resolveNotesSubmitBtn logic)
            // Assuming the full logic is present in your function block
            
            const { type, appId, name, id, summary } = currentItemToResolve;
            const notes = resolveNotesTextarea.value; 
            const appForHistory = appData.find(app => app.id.toString() === appId.toString());

            if (type === 'threat') {
                 // Add to history
                resolvedItemsHistory.push({ type: 'threat', appName: appForHistory?.application, name: name, notes: notes, resolvedAt: new Date() });
                const appIndex = appData.findIndex(app => app.id.toString() === appId.toString());
                if (appIndex !== -1) { appData[appIndex].competitors = appData[appIndex].competitors.filter(c => c !== name); }
            } else if (type === 'ticket') {
                resolvedItemsHistory.push({ type: 'ticket', appName: appForHistory?.application, summary: summary, id: id, notes: notes, resolvedAt: new Date() });
                ticketDetailsData.forEach(dept => {
                    const ticketIndex = dept.tickets.findIndex(tkt => tkt.id === id);
                    if (ticketIndex !== -1) { dept.tickets[ticketIndex].status = 'Closed'; dept.openStatus--; dept.closedStatus++; }
                });
            }
           
            filterDataArrays(); 
            updateCounts();     
            
            // Re-render table section if currently visible (optional optimization)
            if (activeSection === 'anomalies') updateDashboard(anomaliesFilteredData);
            if (activeSection === 'downgrades') updateDashboard(downgradesFilteredData);

            // Close popups
            closeResolveNotesPopup();
            if(type === 'threat') closeThreatDetailsPopup();
            if(type === 'ticket') closeEscalatedTicketsPopup();
        });
    }

    if (escalatedTicketsPopupCloseBtn) { escalatedTicketsPopupCloseBtn.addEventListener('click', closeEscalatedTicketsPopup); }
    if (escalatedTicketsPopup) {
        escalatedTicketsPopup.addEventListener('click', (e) => { if (e.target === escalatedTicketsPopup) { closeEscalatedTicketsPopup(); } });
    }

    if (resolvedHistoryPopupCloseBtn) { resolvedHistoryPopupCloseBtn.addEventListener('click', closeResolvedHistoryPopup); }
    if (resolvedHistoryPopup) {
        resolvedHistoryPopup.addEventListener('click', (e) => { if (e.target === resolvedHistoryPopup) { closeResolvedHistoryPopup(); } });
    }

    // --- Document-wide Click Handlers ---
    document.addEventListener('click', (event) => {
        if (currentOpenDropdown && !event.target.closest('.action-dropdown-menu') && !event.target.closest('.action-toggle-element')) {
            closeAllDropdowns();
        }
        if (currentOpenThreatPopup && !event.target.closest('.threat-popup-container') && !event.target.closest('.threat-popup-wrapper')) {
            closeAllThreatPopups();
        }
        if (subscriptionChatModal && subscriptionChatModal.classList.contains('show') &&
            !event.target.closest('.subscription-chat-modal')) {
            closeSubscriptionChatModal();
        }
    });

    // --- Eye Icon / Rating Popup ---
    const clickableEyeIcon = document.querySelector('.clickable-eye-icon');
    const ratingDetailsPopup = document.getElementById('ratingDetailsPopup');
    if (clickableEyeIcon && ratingDetailsPopup) {
        clickableEyeIcon.addEventListener('click', (event) => {
            event.stopPropagation();
            if (ratingDetailsPopup.style.display === 'block') { ratingDetailsPopup.style.display = 'none'; } else { ratingDetailsPopup.style.display = 'block'; }
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

            if (needHelpChatAgentBtn ) {
                needHelpChatAgentBtn.addEventListener('click', (event) => {
                    event.stopPropagation();
                    openSubscriptionChatModal(null, null, event.target);
                    closeAllDropdowns(); 
                });
            }

            needHelpDropdownMenu.querySelectorAll('.glass-button').forEach(button => {
                // Email button logic is handled outside this loop (above)
                if (button.id !== 'needHelpChatAgentBtn') {
                    button.addEventListener('click', (event) => {
                        event.stopPropagation();
                        closeAllDropdowns();
                    });
                }
            });
        }
    }

    if (closeSubscriptionChatModalBtn) { closeSubscriptionChatModalBtn.addEventListener('click', closeSubscriptionChatModal); }

    // --- Recent Purchases Hover ---
    if (recentPurchasesCountSpan && recentPurchasesHoverPopup && recentPurchasesHoverList) {
        recentPurchasesCountSpan.addEventListener('mouseenter', () => {
            // ... (Logic for recent purchases hover)
            recentPurchasesHoverList.innerHTML = '';
            if (recentPurchasesData.length > 0) {
                recentPurchasesData.forEach((item, index) => {
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
            // ... (Logic for next renewals hover)
            nextRenewalsHoverList.innerHTML = ''; 
            if (nextRenewalsData.length > 0) {
                nextRenewalsData.sort((a, b) => new Date(a.date) - new Date(b.date));
                nextRenewalsData.forEach((item, index) => {
                    const li = document.createElement('li');
                    li.style.display = 'flex'; li.style.justifyContent = 'space-between'; li.style.alignItems = 'center'; li.style.padding = '8px 0'; li.style.borderBottom = '1px solid #eee'; 
                    const nameSpan = document.createElement('span'); nameSpan.className = 'app-name'; nameSpan.textContent = item.name; nameSpan.style.flexBasis = '40%'; nameSpan.style.textAlign = 'left';
                    const dateSpan = document.createElement('span'); dateSpan.className = 'renewal-date'; dateSpan.textContent = item.date; dateSpan.style.flexBasis = '30%'; nameSpan.style.textAlign = 'center';
                    const revenueSpan = document.createElement('span'); revenueSpan.className = 'app-revenue'; revenueSpan.textContent = `$${item.revenue}`; revenueSpan.style.flexBasis = '30%'; revenueSpan.style.textAlign = 'right';
                    li.appendChild(nameSpan); li.appendChild(dateSpan); li.appendChild(revenueSpan); nextRenewalsHoverList.appendChild(li);
                });
                if (nextRenewalsHoverList.lastChild) { nextRenewalsHoverList.lastChild.style.borderBottom = 'none'; }
            } else {
                const li = document.createElement('li'); li.textContent = 'No upcoming renewals in the next 3 months.'; nextRenewalsHoverList.appendChild(li);
            }
            nextRenewalsHoverPopup.classList.add('show');
        });
        nextRenewalsCountSpan.addEventListener('mouseleave', () => {
            nextRenewalsHoverPopup.classList.remove('show');
        });
    }

    // Event listener for the new refresh icon
    refreshIcon.addEventListener('click', () => {
        location.reload(); // Reload the entire page
    });
        // Add Event Listeners for the Email Popup Buttons
        if (emailPopupCloseBtn) {
            emailPopupCloseBtn.addEventListener('click', closeEmailPopup);
        }
        if (emailPopupCopyBtn) {
            emailPopupCopyBtn.addEventListener('click', copyEmailContent);
        }
});

const loader = document.getElementById('widgetLoaderOverlay');
const container = document.getElementById('container-id');
setTimeout(() => {
    // Hide the loader
    loader.style.display = 'none';

    // Show the container
    container.style.display = 'block';
}, 3000);