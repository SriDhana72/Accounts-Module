// Dummy data for the application table
const appData = [
  {
      id: 1,
      application: 'CRM Pro',
      category: 'Sales',
      usage: 25,
      seats: 28,
      license: `Downgraded in M6`,
      competitors: [],
      details: [],
      monthlyData: [
          { month: 'M1', seats: 30, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
          { month: 'M2', seats: 30, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
          { month: 'M3', seats: 29, change: '-1', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
          { month: 'M4', seats: 29, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
          { month: 'M5', seats: 29, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
          { month: 'M6', seats: 28, change: '-1', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
      ]
  },
  {
      id: 2,
      application: 'Lead Management',
      category: 'Sales',
      usage: 18,
      seats: 21,
      license: 'Downgraded in M6',
      competitors: [],
      details: [],
      monthlyData: [
          { month: 'M1', seats: 25, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
          { month: 'M2', seats: 24, change: '-1', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
          { month: 'M3', seats: 23, change: '-1', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
          { month: 'M4', seats: 22, change: '-1', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
          { month: 'M5', seats: 22, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
          { month: 'M6', seats: 21, change: '-1', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
      ]
  },
  {
      id: 3,
      application: 'Sales Analytics',
      category: 'Sales',
      usage: 54,
      seats: 33,
      license: 'Upgraded in M6',
      competitors: [],
      details: [],
      monthlyData: [
          { month: 'M1', seats: 30, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
          { month: 'M2', seats: 31, change: '+1', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
          { month: 'M3', seats: 31, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
          { month: 'M4', seats: 32, change: '+1', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
          { month: 'M5', seats: 32, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
          { month: 'M6', seats: 33, change: '+1', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
      ]
  },
  {
      id: 4,
      application: 'Email Platform',
      category: 'Marketing',
      usage: 35,
      seats: 41,
      license: 'No changes',
      competitors: ['Mailchimp'],
      details: [],
      monthlyData: [
          { month: 'M1', seats: 41, change: '0', competitorIntegrations: 'Mailchimp', zohoConversionOpportunities: 'High' },
          { month: 'M2', seats: 41, change: '0', competitorIntegrations: 'Mailchimp', zohoConversionOpportunities: 'High' },
          { month: 'M3', seats: 41, change: '0', competitorIntegrations: 'Mailchimp', zohoConversionOpportunities: 'High' },
          { month: 'M4', seats: 41, change: '0', competitorIntegrations: 'Mailchimp', zohoConversionOpportunities: 'High' },
          { month: 'M5', seats: 41, change: '0', competitorIntegrations: 'Mailchimp', zohoConversionOpportunities: 'High' },
          { month: 'M6', seats: 41, change: '0', competitorIntegrations: 'Mailchimp', zohoConversionOpportunities: 'High' },
      ]
  },
  {
      id: 5,
      application: 'Marketing Automation',
      category: 'Marketing',
      usage: 52,
      seats: 46,
      license: 'Downgraded in M6',
      competitors: ['MailChimp'],
      details: [],
      monthlyData: [
          { month: 'M1', seats: 50, change: '0', competitorIntegrations: 'Mailchimp', zohoConversionOpportunities: 'High' },
          { month: 'M2', seats: 49, change: '-1', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
          { month: 'M3', seats: 48, change: '-1', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
          { month: 'M4', seats: 47, change: '-1', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
          { month: 'M5', seats: 47, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
          { month: 'M6', seats: 46, change: '-1', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
      ]
  },
  {
      id: 6,
      application: 'Social Media',
      category: 'Marketing',
      usage: 70,
      seats: 29,
      license: 'Upgraded in M6',
      competitors: ['Mailchimp', 'Active campaign'],
      details: [],
      monthlyData: [
          { month: 'M1', seats: 25, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
          { month: 'M2', seats: 26, change: '+1', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
          { month: 'M3', seats: 27, change: '+1', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
          { month: 'M4', seats: 28, change: '+1', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
          { month: 'M5', seats: 28, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
          { month: 'M6', seats: 29, change: '+1', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
      ]
  },
  {
      id: 7,
      application: 'Helpdesk',
      category: 'Support',
      usage: 86,
      seats: 46,
      license: 'Upgraded in M6',
      competitors: [],
      details: [],
      monthlyData: [
          { month: 'M1', seats: 40, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
          { month: 'M2', seats: 41, change: '+1', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
          { month: 'M3', seats: 42, change: '+1', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
          { month: 'M4', seats: 44, change: '+2', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
          { month: 'M5', seats: 45, change: '+1', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
          { month: 'M6', seats: 46, change: '+1', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
      ]
  },
  {
      id: 8,
      application: 'Live Chat',
      category: 'Support',
      usage: 28,
      seats: 48,
      license: 'Downgraded in M6',
      competitors: [],
      details: [],
      monthlyData: [
          { month: 'M1', seats: 52, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
          { month: 'M2', seats: 51, change: '-1', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
          { month: 'M3', seats: 50, change: '-1', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
          { month: 'M4', seats: 49, change: '-1', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
          { month: 'M5', seats: 49, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
          { month: 'M6', seats: 48, change: '-1', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
      ]
  },
  {
      id: 9,
      application: 'Knowledge Base',
      category: 'Support',
      usage: 54,
      seats: 41,
      license: 'Downgraded in M6',
      competitors: [],
      details: [],
      monthlyData: [
          { month: 'M1', seats: 45, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
          { month: 'M2', seats: 44, change: '-1', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
          { month: 'M3', seats: 43, change: '-1', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
          { month: 'M4', seats: 42, change: '-1', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
          { month: 'M5', seats: 42, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
          { month: 'M6', seats: 41, change: '-1', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
      ]
  },
  {
      id: 10,
      application: 'Accounting',
      category: 'Finance',
      usage: 22,
      seats: 20,
      license: 'Downgraded in M6',
      competitors: [],
      details: [],
      monthlyData: [
          { month: 'M1', seats: 22, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
          { month: 'M2', seats: 22, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
          { month: 'M3', seats: 21, change: '-1', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
          { month: 'M4', seats: 21, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
          { month: 'M5', seats: 21, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
          { month: 'M6', seats: 20, change: '-1', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
      ]
  },
  {
      id: 11,
      application: 'Expense Tracking',
      category: 'Finance',
      usage: 29,
      seats: 12,
      license: 'Upgraded in M6',
      competitors: [],
      details: [],
      monthlyData: [
          { month: 'M1', seats: 10, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
          { month: 'M2', seats: 11, change: '+1', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
          { month: 'M3', seats: 11, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
          { month: 'M4', seats: 12, change: '+1', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
          { month: 'M5', seats: 12, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
          { month: 'M6', seats: 12, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
      ]
  },
  {
      id: 12,
      application: 'Invoice',
      category: 'Finance',
      usage: 86,
      seats: 31,
      license: 'Downgraded in M6',
      competitors: [],
      details: [],
      monthlyData: [
          { month: 'M1', seats: 35, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
          { month: 'M2', seats: 34, change: '-1', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
          { month: 'M3', seats: 33, change: '-1', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
          { month: 'M4', seats: 32, change: '-1', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
          { month: 'M5', seats: 32, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
          { month: 'M6', seats: 31, change: '-1', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
      ]
  },
  {
      id: 13,
      application: 'Inventory',
      category: 'Operations',
      usage: 73,
      seats: 47,
      license: 'Upgraded in M6',
      competitors: [],
      details: [],
      monthlyData: [
          { month: 'M1', seats: 45, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
          { month: 'M2', seats: 46, change: '+1', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
          { month: 'M3', seats: 46, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
          { month: 'M4', seats: 47, change: '+1', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
          { month: 'M5', seats: 47, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
          { month: 'M6', seats: 47, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
      ]
  },
  {
      id: 14,
      application: 'Project Management',
      category: 'Operations',
      usage: 54,
      seats: 29,
      license: 'No changes',
      competitors: [],
      details: [],
      monthlyData: [
          { month: 'M1', seats: 29, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
          { month: 'M2', seats: 29, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
          { month: 'M3', seats: 29, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
          { month: 'M4', seats: 29, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
          { month: 'M5', seats: 29, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
          { month: 'M6', seats: 29, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
      ]
  },
  {
      id: 15,
      application: 'HR',
      category: 'Human Resources',
      usage: 20,
      seats: 26,
      license: 'Upgraded in M6',
      competitors: [],
      details: [],
      monthlyData: [
          { month: 'M1', seats: 24, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
          { month: 'M2', seats: 25, change: '+1', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
          { month: 'M3', seats: 25, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
          { month: 'M4', seats: 26, change: '+1', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
          { month: 'M5', seats: 26, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
          { month: 'M6', seats: 26, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
    ]
},
{
    id: 16,
    application: 'Cloud Storage',
    category: 'Productivity',
    usage: 85,
    seats: 120,
    license: 'Upgraded in M6',
    competitors: ['Dropbox', 'Google Drive'],
    details: [],
    monthlyData: [
        { month: 'M1', seats: 100, change: '0', competitorIntegrations: 'Dropbox', zohoConversionOpportunities: 'High' },
        { month: 'M2', seats: 105, change: '+5', competitorIntegrations: 'Dropbox', zohoConversionOpportunities: 'High' },
        { month: 'M3', seats: 110, change: '+5', competitorIntegrations: 'Google Drive', zohoConversionOpportunities: 'High' },
        { month: 'M4', seats: 115, change: '+5', competitorIntegrations: 'Google Drive', zohoConversionOpportunities: 'High' },
        { month: 'M5', seats: 120, change: '+5', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
        { month: 'M6', seats: 120, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
    ]
},
{
    id: 17,
    application: 'Video Conferencing',
    category: 'Communication',
    usage: 60,
    seats: 75,
    license: 'No changes',
    competitors: ['Zoom', 'Microsoft Teams'],
    details: [],
    monthlyData: [
        { month: 'M1', seats: 75, change: '0', competitorIntegrations: 'Zoom', zohoConversionOpportunities: 'Medium' },
        { month: 'M2', seats: 75, change: '0', competitorIntegrations: 'Zoom', zohoConversionOpportunities: 'Medium' },
        { month: 'M3', seats: 75, change: '0', competitorIntegrations: 'Microsoft Teams', zohoConversionOpportunities: 'Medium' },
        { month: 'M4', seats: 75, change: '0', competitorIntegrations: 'Microsoft Teams', zohoConversionOpportunities: 'Medium' },
        { month: 'M5', seats: 75, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
        { month: 'M6', seats: 75, change: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
    ]
}
];

// Dummy data for Ticket Details table - UPDATED SERVICE NAMES
const ticketDetailsData = [
{ serviceName: "CRM", openStatus: 3, closedStatus: 2, ticketCount: 5, department: "IT Support" },
{ serviceName: "One", openStatus: 1, closedStatus: 0, ticketCount: 1, department: "Sales Operations" },
{ serviceName: "People", openStatus: 0, closedStatus: 10, ticketCount: 10, department: "IT Support" },
{ serviceName: "Assist", openStatus: 1, closedStatus: 0, ticketCount: 1, department: "Finance" },
{ serviceName: "Bigin", openStatus: 1, closedStatus: 0, ticketCount: 1, department: "IT Support" },
{ serviceName: "Software Bug", openStatus: 3, closedStatus: 0, ticketCount: 3, department: "Development" }
];


// Initialize all DOM element references at the top
let applicationTableContainer = null;
let ticketDetailsTableContainer = null;
let applicationTableBody = null;
let applicationTableHeader = null; // Reference for the applications table header
let ticketDetailsTableBody = null;
let allAppsBtn = null;
let downgradesBtn = null;
let competitorsBtn = null;
let anomaliesBtn = null;
let ticketDetailsBtn = null;
let allAppsCountSpan = null;
let downgradesCountSpan = null;
let competitorsCountSpan = null;
let anomaliesCountSpan = null;
let criticalIssuesCountSpan = null;
let warningSignsCountSpan = null;
let deskTicketsCountSpan = null;

// Initialize state variables
let expandedRowId = null;
let activeSection = 'all-apps'; // Keeps track of which tab is currently active

// Card element references
let criticalIssuesCard = null;
let warningSignsCard = null;
let competitorExposureCard = null;
let downgradeRisksCard = null;
let deskTicketsCard = null;
// Health Score elements - Declare globally
let healthScoreCircle = null;
let healthScoreValue = null;
let healthScoreStatus = null;
let healthScoreCheck = null;

// New references for the <strong> elements within the cards
let competitorExposureCountElement = null;
let downgradeRisksCountElement = null;


// Function to initialize DOM elements
function initializeDOMElements() {
applicationTableContainer = document.getElementById('applicationTableContainer');
ticketDetailsTableContainer = document.getElementById('ticketDetailsTableContainer');
applicationTableBody = document.getElementById('applicationTableBody');
applicationTableHeader = document.querySelector('#applicationTable thead'); // Select the thead of the applications table
ticketDetailsTableBody = document.getElementById('ticketDetailsTableBody');
allAppsBtn = document.getElementById('allAppsBtn');
downgradesBtn = document.getElementById('downgradesBtn');
competitorsBtn = document.getElementById('competitorsBtn');
anomaliesBtn = document.getElementById('anomaliesBtn');
ticketDetailsBtn = document.getElementById('ticketDetailsBtn');
allAppsCountSpan = document.getElementById('allAppsCount');
downgradesCountSpan = document.getElementById('downgradesCount');
competitorsCountSpan = document.getElementById('competitorsCount');
anomaliesCountSpan = document.getElementById('anomaliesCount');
criticalIssuesCountSpan = document.getElementById('criticalIssuesCount');
warningSignsCountSpan = document.getElementById('warningSignsCount');

// Card elements for click handling
criticalIssuesCard = document.getElementById('criticalIssuesCard');
warningSignsCard = document.getElementById('warningSignsCard');
competitorExposureCard = document.getElementById('competitorExposureCard');
downgradeRisksCard = document.getElementById('downgradeRisksCard');
deskTicketsCard = document.getElementById('deskTicketsCard');

// Desk Tickets card count (for the number next to 'Open')
const openTicketsCountInCard = document.getElementById('openTicketsCount');
if (openTicketsCountInCard) {
  deskTicketsCountSpan = openTicketsCountInCard;
} else {
  console.warn("Element with ID 'openTicketsCount' not found for desk tickets card count.");
}

// Correctly reference the strong elements by their specific IDs for Competitor Exposure and Downgrade Risks cards
competitorExposureCountElement = document.getElementById('competitorExposureCount');
downgradeRisksCountElement = document.getElementById('downgradeRisksCount');
// NEW: Health Score elements - Assign here
healthScoreCircle = document.getElementById('healthScoreCircle');
healthScoreValue = document.getElementById('healthScoreValue');
healthScoreStatus = document.getElementById('healthScoreStatus');
healthScoreCheck = document.getElementById('healthScoreCheck');


// Check if all required elements exist (add more checks as needed)
if (!applicationTableContainer) {
    console.error('Application table container not found!');
    return false;
}
if (!applicationTableBody) {
    console.error('Application table body not found!');
    return false;
}
if (!applicationTableHeader) { // Check for thead
    console.error('Application table header (thead) not found!');
    return false;
}
return true;
}

// Filtered data arrays (these will be used when switching tabs)
let allAppsFilteredData = [];
let downgradesFilteredData = [];
let competitorsFilteredData = [];
let criticalIssuesFilteredData = [];
let warningSignsFilteredData = [];
let anomaliesFilteredData = []; // Combined critical and warning
let anomaliesCriticalOnlyData = []; // For Critical Issues card click
let anomaliesWarningOnlyData = []; // For Warning Signs card click


// Function to filter data arrays - UPDATED LOGIC HERE
function filterDataArrays() {
  allAppsFilteredData = appData;

  // --- New Logic for Critical Issues ---
  anomaliesCriticalOnlyData = appData.filter(app => {
      // Ensure monthlyData has at least 6 months to safely access index 5 (M6)
      // If not, this condition cannot be met for that app
      const latestMonthChange = app.monthlyData.length >= 6 ? parseInt(app.monthlyData[5].change) : null;

      // Condition A: Recent Significant Seat Loss (e.g., lost seats in M6)
      const hasRecentSignificantDowngrade = app.license.includes('Downgraded') && latestMonthChange !== null && latestMonthChange < 0;

      // Condition B: Very Low Usage with Downgraded License
      const isVeryLowUsageAndDowngraded = app.usage < 20 && app.license.includes('Downgraded');

      // Condition C: Consistent Seat Decline (over last 3 months: M4, M5, M6)
      let totalRecentDecline = 0;
      // Ensure there are enough monthly data points to check the last 3 months
      const startIndex = app.monthlyData.length - 3;
      const relevantMonths = startIndex >= 0 ? app.monthlyData.slice(startIndex) : [];
      
      if (relevantMonths.length === 3) { // Ensure we have at least 3 months for this check
          relevantMonths.forEach(month => {
              const change = parseInt(month.change);
              if (change < 0) {
                  totalRecentDecline += change; // Accumulate negative changes
              }
          });
      }
      const hasConsistentSeatDecline = totalRecentDecline <= -3; // e.g., lost 3 or more seats in total

      return hasRecentSignificantDowngrade || isVeryLowUsageAndDowngraded || hasConsistentSeatDecline;
  });

  // --- New Logic for Warning Signs (must NOT be a Critical Issue) ---
  anomaliesWarningOnlyData = appData.filter(app => {
      // First, ensure it's not already a critical issue using the IDs
      const isCritical = anomaliesCriticalOnlyData.some(criticalApp => criticalApp.id === app.id);
      if (isCritical) return false; // If it's critical, it cannot be a warning sign

      // Retrieve latest zohoConversionOpportunities safely
      const latestZohoConversion = app.monthlyData.length > 0 ? app.monthlyData[app.monthlyData.length - 1].zohoConversionOpportunities : '';

      // Condition A: Low to Moderate Usage OR Low Seats
      const isLowToModerateUsageOrLowSeats = (app.usage >= 20 && app.usage <= 50) || (app.seats < 30);

      // Condition B: Downgraded License (without recent critical seat loss already covered)
      // This captures cases where license is downgraded, but seats might be stable or usage not critical.
      // It relies on the 'isCritical' check above to ensure it's not already a critical issue.
      const isDowngradedButNotCriticallyFalling = app.license.includes('Downgraded');

      // Condition C: Competitor Integrations Present
      const hasCompetitors = app.competitors && app.competitors.length > 0;

      // Condition D: Low Conversion Opportunities
      const isLowConversionOpp = latestZohoConversion === 'Low';

      return isLowToModerateUsageOrLowSeats || isDowngradedButNotCriticallyFalling || hasCompetitors || isLowConversionOpp;
  });


  // Downgrades button still filters by license string.
  downgradesFilteredData = appData.filter(app => app.license.includes('Downgraded'));
  // Competitors button still filters by competitors array.
  competitorsFilteredData = appData.filter(app => app.competitors && app.competitors.length > 0);


  // Anomalies are the union of Critical and Warning Signs for the main Anomalies button
  const anomaliesSet = new Set();
  anomaliesCriticalOnlyData.forEach(app => anomaliesSet.add(app));
  anomaliesWarningOnlyData.forEach(app => anomaliesSet.add(app));
  anomaliesFilteredData = Array.from(anomaliesSet);
}


// Function to update the counts on the buttons and top cards
function updateCounts(specificAnomaliesCount = null) {
console.log('Updating counts...');

// Update counts for buttons
if (allAppsCountSpan) allAppsCountSpan.textContent = allAppsFilteredData.length;
if (downgradesCountSpan) downgradesCountSpan.textContent = downgradesFilteredData.length;
if (competitorsCountSpan) competitorsCountSpan.textContent = competitorsFilteredData.length;
    // --- MODIFIED LOGIC for Anomalies Count ---
    if (anomaliesCountSpan) {
      if (specificAnomaliesCount !== null) {
          // Use the specific count if provided (from card click)
          anomaliesCountSpan.textContent = specificAnomaliesCount;
      } else {
          // Otherwise, use the total combined anomalies count (for direct button click)
          anomaliesCountSpan.textContent = anomaliesFilteredData.length;
      }
  }
  // --- END MODIFIED LOGIC ---

// Update counts for Critical Issues and Warning Signs cards
if (criticalIssuesCountSpan) criticalIssuesCountSpan.textContent = anomaliesCriticalOnlyData.length; // Uses specific critical count
if (warningSignsCountSpan) warningSignsCountSpan.textContent = anomaliesWarningOnlyData.length; // Uses specific warning count

// Correctly update counts for Competitor Exposure and Downgrade Risks cards
if (competitorExposureCountElement) {
  competitorExposureCountElement.textContent = competitorsFilteredData.length;
}
if (downgradeRisksCountElement) {
  downgradeRisksCountElement.textContent = downgradesFilteredData.length;
}


// Update counts for Desk Tickets card and button
const totalOpenTickets = ticketDetailsData.reduce((sum, ticket) => sum + ticket.openStatus, 0);
const totalClosedTickets = ticketDetailsData.reduce((sum, ticket) => sum + ticket.closedStatus, 0);

const openTicketsCountSpan = document.getElementById('openTicketsCount');
const closedTicketsCountSpan = document.getElementById('closedTicketsCount');

if (openTicketsCountSpan) openTicketsCountSpan.textContent = totalOpenTickets;
if (closedTicketsCountSpan) closedTicketsCountSpan.textContent = totalClosedTickets;

// Ensure the numbers are properly aligned (if needed, typically done via CSS)
if (openTicketsCountSpan) {
    openTicketsCountSpan.style.minWidth = '50px';
    openTicketsCountSpan.style.textAlign = 'center';
}
if (closedTicketsCountSpan) {
    closedTicketsCountSpan.style.minWidth = '50px';
    closedTicketsCountSpan.style.textAlign = 'center';
}
}


// Function to render the application table rows based on provided data
function renderApplicationTable(data) {
    console.log('Starting to render application table with', data.length, 'items');
    
    if (!applicationTableBody) {
        console.error("Application table body element (applicationTableBody) not found!");
        return;
    }
    
    // Clear any existing rows in the table body, including previously expanded rows
    applicationTableBody.innerHTML = '';
    expandedRowId = null; // Reset expanded row state
    
    // If no data, display a message
    if (data.length === 0) {
        const noDataRow = document.createElement('tr');
        noDataRow.innerHTML = `<td colspan="8" class="text-center py-4 text-muted">No data available for this category.</td>`;
        applicationTableBody.appendChild(noDataRow);
        return;
    }
    
    // Loop through each item (app) in the data array
    data.forEach((app) => {
        // Create a new table row element for the main application entry
        const row = document.createElement('tr');
        row.setAttribute('data-app-id', app.id);
        row.className = 'clickable-row';
    
        // Determine competitor display
        let competitorsHtml = 'None';
        if (app.competitors && app.competitors.length > 0) {
            competitorsHtml = app.competitors.map(comp => `<span class="red-bg">${comp}</span>`).join(' ');
        }
    
        // Determine license trend icon and color
        let licenseTrendIconHtml = `<i class="bi bi-dash-lg text-muted"></i>`; // Default: no change
        if (app.license.includes('Downgraded')) {
            licenseTrendIconHtml = `<i class="bi bi-graph-down text-danger"></i>`;
        } else if (app.license.includes('Upgraded')) {
            licenseTrendIconHtml = `<i class="bi bi-graph-up text-success"></i>`;
        }
    
        // --- NEW LOGIC FOR USAGE DISPLAY: Bar with text overlay ---
        let usageDisplayText = '';
        let usageBackgroundColorClass = ''; // This will hold our new background color class
    
        if (app.usage < 20) {
            usageDisplayText = 'Low';
            usageBackgroundColorClass = 'bg-usage-low';
        } else if (app.usage >= 20 && app.usage <= 40) {
            usageDisplayText = 'Medium';
            usageBackgroundColorClass = 'bg-usage-medium';
        } else { // Above 40
            usageDisplayText = 'High';
            usageBackgroundColorClass = 'bg-usage-high';
        }
    
        // New HTML structure for the usage cell
        const usageHtml = `
            <div class="usage-bar-container ${usageBackgroundColorClass}">
                <span class="usage-bar-text">${usageDisplayText}</span>
            </div>
        `;
        // --- END NEW LOGIC ---
    
        row.innerHTML = `
            <td><span class="expand-toggle-arrow">▼</span></td> <!-- Initial arrow state -->
            <td style="min-width: 200px;">
                ${app.application}<br><small>${app.category}</small>
            </td>
            <td>${usageHtml}</td> <!-- UPDATED: Now uses the new usageHtml -->
            <td>${app.seats}</td>
            <td>${licenseTrendIconHtml} ${app.license}</td>
            <td>${competitorsHtml}</td>
            <td>N/A</td> <!-- Zoho Options always N/A as per original HTML -->
            <td><i class="bi bi-exclamation-triangle text-danger"></i></td>
        `;
    
        // Add click event listener for row expansion/collapse
        row.addEventListener('click', (event) => {
            // Prevent event from bubbling up if clicked on the action icon
            if (event.target.tagName === 'I' && event.target.classList.contains('bi-exclamation-triangle')) {
                return;
            }
    
            const appId = app.id;
            const currentExpandedId = expandedRowId;
            const arrowSpan = row.querySelector('.expand-toggle-arrow');
    
            // If clicking on the currently expanded row, collapse it
            if (appId === currentExpandedId) {
                const expandedRowElement = document.querySelector(`tr.expanded-row[data-parent-app-id="${appId}"]`);
                if (expandedRowElement) {
                    expandedRowElement.remove();
                }
                expandedRowId = null; // Reset expanded state
                if (arrowSpan) arrowSpan.textContent = '▼'; // Change arrow to down
            } else {
                // Collapse any previously expanded row
                if (currentExpandedId !== null) {
                    const previousExpandedRowElement = document.querySelector(`tr.expanded-row[data-parent-app-id="${currentExpandedId}"]`);
                    if (previousExpandedRowElement) {
                        previousExpandedRowElement.remove();
                    }
                    const previousArrow = document.querySelector(`tr[data-app-id="${currentExpandedId}"] .expand-toggle-arrow`);
                    if (previousArrow) previousArrow.textContent = '▼'; // Change previous arrow to down
                }
    
                // Expand the new row
                const expandedRow = document.createElement('tr');
                expandedRow.className = 'expanded-row';
                expandedRow.setAttribute('data-parent-app-id', appId); // Link expanded row to its parent
    
                // --- START NEW EXPANDED ROW CONTENT ---
                let monthlyDataHtml = app.monthlyData.map(month => {
                    let changeIcon = '';
                    let changeClass = 'text-muted'; // Default for no change or '0'
                    if (month.change.includes('+')) {
                        changeIcon = `<i class="bi bi-graph-up text-success"></i>`;
                        changeClass = 'text-success';
                    } else if (month.change.includes('-')) {
                        changeIcon = `<i class="bi bi-graph-down text-danger"></i>`;
                        changeClass = 'text-danger';
                    } else {
                         changeIcon = `<i class="bi bi-dash-lg text-muted"></i>`;
                    }
                    return `
                        <tr>
                            <td>${month.month}</td>
                            <td>${month.seats}</td>
                            <td class="${changeClass}">${changeIcon}</td> <!-- ONLY ICON IS RENDERED HERE -->
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
    
                // Re-evaluate anomalies for the expanded row based on the new filter logic
                // Check Critical Issues
                if (anomaliesCriticalOnlyData.some(item => item.id === app.id)) {
                  // Determine specific critical sub-conditions if needed for display here
                  const latestMonthChange = app.monthlyData.length >= 6 ? parseInt(app.monthlyData[5].change) : null;
                  if (app.license.includes('Downgraded') && latestMonthChange !== null && latestMonthChange < 0) {
                      detectedAnomalies.push(`<li>Recent Significant Seat Loss</li>`);
                  }
                  if (app.usage < 20 && app.license.includes('Downgraded')) {
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
                }
    
                // Check Warning Signs (only if not already a Critical Issue for display in expanded row)
                if (anomaliesWarningOnlyData.some(item => item.id === app.id) && !anomaliesCriticalOnlyData.some(item => item.id === app.id)) {
                  // Determine specific warning sub-conditions for display
                  const latestZohoConversion = app.monthlyData.length > 0 ? app.monthlyData[app.monthlyData.length - 1].zohoConversionOpportunities : '';
                  
                  if ((app.usage >= 20 && app.usage <= 50) || (app.seats < 30)) {
                      detectedAnomalies.push(`<li>Low to Moderate Usage / Low Seats</li>`);
                  }
                  if (app.license.includes('Downgraded')) { // If it's a warning sign, it's a downgraded license
                      detectedAnomalies.push(`<li>Downgraded License</li>`);
                  }
                  if (app.competitors && app.competitors.length > 0) {
                      detectedAnomalies.push(`<li>Competitor Integrations Present</li>`);
                  }
                  if (latestZohoConversion === 'Low') {
                      detectedAnomalies.push(`<li>Low Zoho Conversion Opportunities</li>`);
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
                    <td colspan="8">
                        <div class="expanded-content p-3 bg-light rounded-bottom d-flex flex-wrap align-items-stretch">
                            <!-- Left Column: Usage & License History -->
                            <div class="col-md-4 p-2">
                                <h6 class="mb-2 fw-bold">Usage & License History</h6>
                                <div class="table-responsive">
                                    <table class="table table-sm monthly-data-table mb-0">
                                        <thead>
                                            <tr>
                                                <th>Month</th>
                                                <th>Seats</th>
                                                <th>Change</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${monthlyDataHtml}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
    
                            <!-- Middle Column: Competitor Integrations -->
                            <div class="col-md-4 p-2 border-start border-end">
                                <h6 class="mb-2 fw-bold">Competitor Integrations</h6>
                                <p class="small text-muted mb-0">
                                    ${competitorIntegrationsContent}
                                </p>
                            </div>
    
                            <!-- Right Column: Zoho Conversion Opportunities & Anomalies -->
                            <div class="col-md-4 p-2">
                                <h6 class="mb-2 fw-bold">Zoho Conversion Opportunities</h6>
                                <p class="small text-dark">${app.monthlyData[app.monthlyData.length - 1].zohoConversionOpportunities}</p>
                                ${anomaliesHtml}
                            </div>
                        </div>
                    </td>
                `;
                // --- END NEW EXPANDED ROW CONTENT ---
    
                // Insert expanded row after the clicked row
                row.insertAdjacentElement('afterend', expandedRow);
                expandedRowId = appId; // Set new expanded state
                if (arrowSpan) arrowSpan.textContent = '▲'; // Change current arrow to up
            }
        });
    
        // Append the main row to the table body
        applicationTableBody.appendChild(row);
    });
    }
    
// Function to render the Ticket Details table
function renderTicketDetailsTable() {
    if (!ticketDetailsTableBody) {
        console.error("Ticket details table body element (ticketDetailsTableBody) not found!");
        return;
    }
    ticketDetailsTableBody.innerHTML = ''; // Clear existing rows

    if (ticketDetailsData.length === 0) {
        // Updated colspan from 5 to 4 as "Ticket Count" column is removed
        const noDataRow = document.createElement('tr');
        noDataRow.innerHTML = `<td colspan="4" class="text-center py-4 text-muted">No ticket details available.</td>`;
        ticketDetailsTableBody.appendChild(noDataRow);
        return;
    }

    ticketDetailsData.forEach(ticket => {
        const row = ticketDetailsTableBody.insertRow();
        row.innerHTML = `
            <td>${ticket.serviceName}</td>
            <td>${ticket.openStatus}</td>
            <td>${ticket.closedStatus}</td>
            <td>${ticket.department}</td>
        `;
    });
}


// Function to handle tab switching
// This function now accepts an optional 'dataToRender' argument
function switchTab(selectedCategory, dataToRender = null) {
    // Remove 'active' class from the currently active button
    const currentActiveBtn = document.querySelector('.btns.active');
    if (currentActiveBtn) {
        currentActiveBtn.classList.remove('active');
    }

    // Explicitly hide BOTH table containers before showing the selected one
    // Aggressively hide applicationTableContainer and clear its content
    if (applicationTableContainer) {
        applicationTableContainer.classList.add('d-none'); // Hide with Bootstrap class
        applicationTableContainer.style.display = 'none'; // Also set inline display to none as a fallback
        if (applicationTableBody) applicationTableBody.innerHTML = ''; // Clear body content
        // Explicitly hide the thead of the applications table
        if (applicationTableHeader) {
            applicationTableHeader.style.display = 'none';
            console.log('Hiding application table header.');
        }
        console.log('Hiding and clearing applicationTableContainer content.');
    }
    // Hide ticketDetailsTableContainer with style.display = 'none'
    if (ticketDetailsTableContainer) {
        ticketDetailsTableContainer.style.display = 'none';
        ticketDetailsTableContainer.classList.remove('d-none'); // Ensure d-none is not interfering
        console.log('Hiding ticketDetailsTableContainer.');
    }


    // Show the appropriate table and render data
    switch (selectedCategory) {
        case 'all-apps':
            if (allAppsBtn) allAppsBtn.classList.add('active');
            if (applicationTableContainer) {
                applicationTableContainer.classList.remove('d-none');
                applicationTableContainer.style.display = 'block'; // Show it
                // Show the thead for applications table
                if (applicationTableHeader) {
                    applicationTableHeader.style.display = 'table-header-group'; // Default display for thead
                    console.log('Showing application table header for All Apps.');
                }
                console.log('Showing applicationTableContainer for All Apps.');
            }
            renderApplicationTable(allAppsFilteredData); // Re-render content
            activeSection = 'all-apps';
            updateCounts(); // <<< IMPORTANT: Added here
            break;
        case 'downgrades':
            if (downgradesBtn) downgradesBtn.classList.add('active');
            if (applicationTableContainer) {
                applicationTableContainer.classList.remove('d-none');
                applicationTableContainer.style.display = 'block'; // Show it
                // Show the thead for applications table
                if (applicationTableHeader) {
                    applicationTableHeader.style.display = 'table-header-group';
                }
                console.log('Showing applicationTableContainer for Downgrades.');
            }
            renderApplicationTable(downgradesFilteredData); // Re-render content
            activeSection = 'downgrades';
            updateCounts(); // <<< IMPORTANT: Added here
            break;
        case 'competitors':
            if (competitorsBtn) competitorsBtn.classList.add('active');
            if (applicationTableContainer) {
                applicationTableContainer.classList.remove('d-none');
                applicationTableContainer.style.display = 'block'; // Show it
                // Show the thead for applications table
                if (applicationTableHeader) {
                    applicationTableHeader.style.display = 'table-header-group';
                }
                console.log('Showing applicationTableContainer for Competitors.');
            }
            renderApplicationTable(competitorsFilteredData); // Re-render content
            activeSection = 'competitors';
            updateCounts(); // <<< IMPORTANT: Added here
            break;
        case 'anomalies':
            if (anomaliesBtn) anomaliesBtn.classList.add('active');
            if (applicationTableContainer) {
                applicationTableContainer.classList.remove('d-none');
                applicationTableContainer.style.display = 'block'; // Show it
                // Show the thead for applications table
                if (applicationTableHeader) {
                    applicationTableHeader.style.display = 'table-header-group';
                }
                console.log('Showing applicationTableContainer for Anomalies.');
            }
            // Use dataToRender if provided (from card clicks), otherwise use the combined anomaliesFilteredData
            renderApplicationTable(dataToRender || anomaliesFilteredData);
            activeSection = 'anomalies';
            // --- NEW LOGIC: Call updateCounts with specific anomalies count if dataToRender exists ---
            if (dataToRender !== null) {
                updateCounts(dataToRender.length); // Pass the specific count for anomalies
            } else {
                updateCounts(); // No specific count, so update all counts normally (anomalies shows total)
            }
            // --- END NEW LOGIC ---
            break;
        case 'ticket-details':
            if (ticketDetailsBtn) ticketDetailsBtn.classList.add('active');
            if (ticketDetailsTableContainer) {
                ticketDetailsTableContainer.style.display = 'block'; // Show using style.display
                console.log('Showing ticketDetailsTableContainer for Ticket Details.');
            }
            renderTicketDetailsTable(); // Render content
            activeSection = 'ticket-details';
            updateCounts(); // <<< IMPORTANT: Added here
            break;
        default:
            console.warn('Unknown category selected:', selectedCategory);
            if (allAppsBtn) allAppsBtn.classList.add('active');
            if (applicationTableContainer) {
                applicationTableContainer.classList.remove('d-none');
                applicationTableContainer.style.display = 'block';
                if (applicationTableHeader) {
                    applicationTableHeader.style.display = 'table-header-group';
                }
            }
            renderApplicationTable(allAppsFilteredData);
            activeSection = 'all-apps';
            updateCounts(); // <<< IMPORTANT: Added here
            break;
    }
    // <<< IMPORTANT: The 'updateCounts();' call from the very end of switchTab has been REMOVED.
}


// Function to highlight the active card (now globally accessible)
function highlightActiveCard(activeCardElementId) {
    // Get all card elements
    const allCards = [
        criticalIssuesCard,
        warningSignsCard,
        competitorExposureCard,
        downgradeRisksCard,
        deskTicketsCard
    ];

    // Remove highlight from all cards first
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

    // Add highlight to the active card if an ID is provided
    if (activeCardElementId) {
        const activeCard = document.getElementById(activeCardElementId);
        if (activeCard) {
            activeCard.classList.add('active-highlight');
            // Add specific color class based on card ID
            if (activeCardElementId === 'criticalIssuesCard') {
                activeCard.classList.add('card-border-critical');
            } else if (activeCardElementId === 'warningSignsCard') {
                activeCard.classList.add('card-border-warning');
            } else if (activeCardElementId === 'competitorExposureCard') {
                activeCard.classList.add('card-border-competitor');
            } else if (activeCardElementId === 'downgradeRisksCard') {
                activeCard.classList.add('card-border-downgrade');
            } else if (activeCardElementId === 'deskTicketsCard') {
                activeCard.classList.add('card-border-tickets');
            }
        }
    }
}


// DOMContentLoaded event listener to initialize the page
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing...');

  // Initialize DOM elements
  if (!initializeDOMElements()) {
      console.error('Failed to initialize DOM elements, stopping further initialization.');
      return;
  }

  // Filter and prepare data arrays
  filterDataArrays();

  // Initial rendering of application table (default to 'All Apps')
  console.log('Rendering initial table for "All Apps"');
  renderApplicationTable(allAppsFilteredData);

  // Update counts across the dashboard (Initial update on page load, now handled by switchTab or initial highlight logic)
  // updateCounts(); // Removed as updateCounts is now called within switchTab and by initial highlight

  // Set initial active button
  if (allAppsBtn) {
      allAppsBtn.classList.add('active');
  }
  
  // NEW: Call updateHealthScore with an initial example score
  // This line calls the function from healthScore.js to set the initial health score display.
   updateHealthScore(98); 
  // You can test other scores by uncommenting one of these lines:
  //updateHealthScore(75); // Example: A "Good" score
  // updateHealthScore(45); // Example: A "Poor" score
  
  // Add event listeners for buttons (main navigation buttons)
  if (allAppsBtn) allAppsBtn.addEventListener('click', () => {
      switchTab('all-apps');
      highlightActiveCard(null); // Clear card highlight when main button is clicked
  });
  if (downgradesBtn) downgradesBtn.addEventListener('click', () => {
      switchTab('downgrades');
      highlightActiveCard(null); // Clear card highlight
  });
  if (competitorsBtn) competitorsBtn.addEventListener('click', () => {
      switchTab('competitors');
      highlightActiveCard(null); // Clear card highlight
  });
  if (anomaliesBtn) anomaliesBtn.addEventListener('click', () => {
      switchTab('anomalies');
      highlightActiveCard(null); // Clear card highlight
  });
  if (ticketDetailsBtn) ticketDetailsBtn.addEventListener('click', () => {
      switchTab('ticket-details');
      highlightActiveCard(null); // Clear card highlight
  });

  // Add event listeners for the top cards - UPDATED TO CALL highlightActiveCard
  if (criticalIssuesCard) {
      criticalIssuesCard.addEventListener('click', () => {
          switchTab('anomalies', anomaliesCriticalOnlyData); // Pass only critical data
          highlightActiveCard('criticalIssuesCard'); // Highlight this card
      });
      criticalIssuesCard.style.cursor = 'pointer'; // Make card clickable visually
  }
  if (warningSignsCard) {
      warningSignsCard.addEventListener('click', () => {
          switchTab('anomalies', anomaliesWarningOnlyData); // Pass only warning data
          highlightActiveCard('warningSignsCard'); // Highlight this card
      });
      warningSignsCard.style.cursor = 'pointer'; // Make card clickable visually
  }
  if (competitorExposureCard) {
      competitorExposureCard.addEventListener('click', () => {
          switchTab('competitors');
          highlightActiveCard('competitorExposureCard'); // Highlight this card
      });
      competitorExposureCard.style.cursor = 'pointer'; // Make card clickable visually
  }
  if (downgradeRisksCard) {
      downgradeRisksCard.addEventListener('click', () => {
          switchTab('downgrades');
          highlightActiveCard('downgradeRisksCard'); // Highlight this card
      });
      downgradeRisksCard.style.cursor = 'pointer'; // Make card clickable visually
  }
  if (deskTicketsCard) {
      deskTicketsCard.addEventListener('click', () => {
          switchTab('ticket-details');
          highlightActiveCard('deskTicketsCard'); // Highlight this card
      });
      deskTicketsCard.style.cursor = 'pointer'; // Make card clickable visually
  }

  // Initial visibility settings on page load
  // applicationTableContainer should be visible by default
  if (applicationTableContainer) {
      applicationTableContainer.classList.remove('d-none');
      applicationTableContainer.style.display = 'block';
      if (applicationTableHeader) {
          applicationTableHeader.style.display = 'table-header-group'; // Ensure headers are visible initially
      }
  }
  // ticketDetailsTableContainer should be hidden by default
  if (ticketDetailsTableContainer) {
      ticketDetailsTableContainer.style.display = 'none';
  }

  // --- NEW: Call updateCounts() after initial rendering and filterDataArrays()
  // and also ensure initial card is highlighted if relevant.
  updateCounts(); // Call updateCounts initially to set all button counts

});
